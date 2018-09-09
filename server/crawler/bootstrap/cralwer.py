#!/usr/bin/python
import urllib2
from pyquery import PyQuery as pq

class Cralwer:

	def __init__(self):
		print('Init Cralwer library : urlib2, pyquery')

	def get(self,url):
		self.urlopen = urllib2.urlopen(url)	
		self.html = self.urlopen.read()
		d = pq(self.html)
		return d
