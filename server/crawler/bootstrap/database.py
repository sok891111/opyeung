#!/usr/bin/python
import MySQLdb,json

def init_db():
	print('Start Database init')
	with open('/home/sungjin/opyeung/config/database.json') as json_data_file:
	    data = json.load(json_data_file)
	config = data['mysql']

	db = MySQLdb.connect(host=config['host'],    # your host, usually localhost
	                     user=config['user'],         # your username
	                     passwd=config['passwd'],  # your password
	                     db=config['db'])        # name of the data base
	db.set_character_set('utf8')
	print('Database is ready')
	return db

# # you must create a Cursor object. It will let
# #  you execute all the queries you need
# cur = db.cursor()

# # Use all the SQL you like
# cur.execute("SELECT * FROM OP_PRODUCT_MAS")

# # print all the first cell of all the rows
# for row in cur.fetchall():
#     print row[1]

# db.close()