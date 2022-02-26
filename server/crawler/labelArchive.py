#-*- coding: utf-8 -*-
# encoding=utf8  
#!/usr/bin/python
import sys,MySQLdb,os
from pyquery import PyQuery as pq
from progressbar import ProgressBar
sys.path.append('%s/bootstrap'%os.getcwd())
import init, re
import time


site = init.init('labelArchive')
pbar = ProgressBar()
JQ = site.JQ
tnx = site.tnx

cur = tnx.cursor()



# p01.category insert
# p01-1 이전 category 정보 삭제

cur.execute("DELETE FROM OP_CATEGORY_MAS WHERE SITE_ID = %s",(site.site_id,))
tnx.commit();

#p01-1 상위 category 정보 insert
html = JQ.get(site.site_url+'/140')
cateogyr_list = html('.depth-01.active li')
for category in cateogyr_list:
	url = pq(category.find('a')).attr['href']
	try:
		url.index('/') 
	except(Exception) as e:
		continue
	category_desc = pq(category.find('a')).text()
	category_code = url.split('/')[1]

	cur.execute("""INSERT INTO OP_CATEGORY_MAS (SITE_ID , UPPER_CATEGORY , CATEGORY , CATEGORY_DESC , URL , CREATE_TM , UPDATE_TM )
					VALUES (%s , %s ,%s , %s, %s , now() , now() ) """,(site.site_id , category_code , category_code, category_desc, site.site_url+url ))

tnx.commit();


#P02-01 Product 정보 delete
cur.execute("""DELETE FROM OP_PRODUCT_MAS WHERE CATEGORY_ID IN 
			(SELECT CATEGORY FROM OP_CATEGORY_MAS B WHERE CATEGORY_ID = B.CATEGORY AND B.SITE_ID = %s)""",(site.site_id,))
cur.execute("""DELETE FROM OP_IMAGE_MAS WHERE SITE_ID = %s""",(site.site_id,))
tnx.commit();

#p02-02 Product 정보 Insert
print('Starting %s product list...' %site.site_nm)
cur.execute("SELECT CATEGORY FROM OP_CATEGORY_MAS WHERE SITE_ID = %s AND UPPER_CATEGORY IS NOT NULL ",(site.site_id,))
for row in pbar(cur.fetchall()):
	category = row[0]
	page_cnt = 1
	while page_cnt ==1:
		html = JQ.get('%s/%s/?&page=%d'%(site.site_url,category,page_cnt))
		product_list = html('.shop-item')	
		if product_list.length < 1 : #존재하지 않는 페이지일경우 stop
			break
		for product in product_list :
			# product_code = pq(pq(product).find('a')).attr['name'].split('_')[1]

			url = pq(pq(product).find('a').eq(0)).attr['href']
			product_code = url.split('=')[1]
			url = '%s%s'%(site.site_url,url)

			if product_code is None :
				continue
			# url = '%s/product/-/22500/category/37/display/1/%s'%(site.site_url,product_code)
			cur.execute("""INSERT INTO OP_PRODUCT_MAS (PRODUCT_CODE , CATEGORY_ID ,URL , CREATE_TM , UPDATE_TM , SITE_ID )
						VALUES ('%s' , '%s' , '%s' , now() , now() , %s ) """%( product_code, category, url ,site.site_id))		
			#P02-02 Product 상세 정보 Insert
			time.sleep(1)
			html = JQ.get(url)
			product_nm = html('.view_tit').text().split('\t')[0]
			product_desc = html('meta[name="description"]').attr('content').replace('\n','').replace('\t','').replace('&nbsp;','').strip()[:998]


			product_price = html('.sale_price').text()

			if product_price is None or product_price == '':
				product_price = html('.real_price').text()
				product_sale_price = product_price
			else :
				product_sale_price = html('.real_price').text()

			product_price = ''.join(re.findall('\d+', product_price.encode('utf8') )) if product_price != '' else '0'
			product_sale_price = ''.join(re.findall('\d+', product_sale_price.encode('utf8') )) if product_sale_price != '' else '0'

			product_img = html('._item img').attr('src')

			# product_sale_price = '0'
			cur.execute("""UPDATE OP_PRODUCT_MAS SET PRODUCT_NM = %s, PRODUCT_DESC = %s, PRICE = %s, DISCOUNT_PRICE = %s , PRODUCT_IMG = %s, UPDATE_TM = now() 
				WHERE PRODUCT_CODE = %s AND SITE_ID = %s """,( product_nm, product_desc, product_price , product_sale_price , product_img , product_code ,site.site_id ))
			#P02-03 Product image 정보 Insert
			product_img_list = html('.fr-dib')
			for img in product_img_list:
				img_src = pq(img).attr['data-original']
				if img_src is None : 
					continue
				try:
					cur.execute("""INSERT INTO OP_IMAGE_MAS (URL , PRODUCT_CODE , CREATE_TM , UPDATE_TM , SITE_ID )
							VALUES (%s , %s , now() , now(), %s ) """,( img_src, product_code , site.site_id))		
				except (MySQLdb.Error, MySQLdb.Warning) as e:
					continue #Image Insert 중 Error 발생시 그냥 

		tnx.commit();
		page_cnt = page_cnt +1
		time.sleep(10)

cur.close()
tnx.close()
