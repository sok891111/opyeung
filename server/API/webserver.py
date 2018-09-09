#-*- coding: utf-8 -*-
# encoding=utf8  
#!/usr/bin/python
from flask import Flask
from flask_restful import Resource, Api
import sys,MySQLdb,json,datetime
from flask_cors import CORS
from flask import make_response
sys.path.append('/home/sungjin/opyeung/bootstrap')
import database

def myconverter(o):
	if isinstance(o, datetime.datetime):
		return o.__str__()

app = Flask(__name__)
app.config["CACHE_TYPE"] = 'null'
api = Api(app)
cors = CORS(app)
tnx = database.init_db()

class HelloWorld(Resource):
	def get(self):
		cur = tnx.cursor()
		cur.execute("""
			SELECT A.INX AS SITE_ID, A.SITE_NM , A.SITE_ICON , B.CATEGORY , B.CATEGORY_DESC , C.PRODUCT_IMG, C.PRODUCT_CODE , C.URL, C.PRODUCT_NM , C.PRODUCT_DESC, C.PRICE , C.DISCOUNT_PRICE , C.UPDATE_TM
			FROM OP_SITE_MAS A
			JOIN OP_CATEGORY_MAS B ON A.INX = B.SITE_ID
			JOIN OP_PRODUCT_MAS C ON B.CATEGORY = C.CATEGORY_ID
			LIMIT 10
			""")
		row_headers=[x[0] for x in cur.description]
		rv = cur.fetchall()
		json_data=[]
		for result in rv:
			json_data.append(dict(zip(row_headers,result)))
		cur.close()
		return make_response(json.dumps(json_data,default = myconverter, ensure_ascii=False).decode('utf-8'))


api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(debug=False,host = '0.0.0.0',port=8888)



