#-*- coding: utf-8 -*-
#!/usr/bin/python
import database, cralwer

class init:
	def __init__(self,site):
		self.site = site
		print('Starting cralwer for %s.' % site)
		self.site = site
		self.tnx = database.init_db() #init database
		self.JQ = cralwer.Cralwer() #init Cralwer
		self.setInfo()

	def setInfo(self):
		#1.site 정보 get
		cur = self.tnx.cursor()
		cur.execute("SELECT * FROM OP_SITE_MAS WHERE SITE_NM = '%s'"%(self.site))
		for row in cur.fetchall():
			self.site_id= row[0]
			self.site_nm= row[1]
			self.site_url= row[2]