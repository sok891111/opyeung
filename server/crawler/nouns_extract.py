# -*- coding: utf-8 -*-
import sys,pymysql,os
from konlpy.tag import Okt
sys.path.append('%s/bootstrap'%os.getcwd())
import database
from collections import Counter


tnx = database.init_db() #init database
cur = tnx.cursor()
okt = Okt()


cur.execute("SELECT PRODUCT_ID  , PRODUCT_DESC FROM OP_PRODUCT_MAS")
for row in cur.fetchall():
	product_id = row[0]
	product_desc = row[1]
	nouns = okt.nouns(product_desc)
	
	for i , v in enumerate(nouns):
		if len(v) <2 :
			nouns.pop(i)
	
	count = Counter(nouns)

	tag_most = ','.join([str(x) for x,y in count.most_common(5)]) 
	tag = ','.join([str(y) for x,y in enumerate(nouns)]) 
	
	query = "UPDATE OP_PRODUCT_MAS SET PRODUCT_TAG = '%s', PRODUCT_TAG_MOST ='%s' WHERE PRODUCT_ID ='%s'"%(tag, tag_most ,product_id)
	cur.execute(query)


tnx.commit();
cur.close()
tnx.close()	
