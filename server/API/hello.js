#!/usr/bin/env nodejs
var http = require('http');
var mysql      = require('mysql');
var url = require('url');
var querystring = require('querystring');

var connection = mysql.createConnection({
  host     : '52.78.129.94',
  user     : 'opyeung',
  password : 'opyeung',
  port     : 3306,
  database : 'opyeung'
});

connection.connect();

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8 ' , 'Access-Control-Allow-Origin' : '*'});

	var path = url.parse(req.url).pathname;
	var oQueryParams = querystring.parse(req.url.replace(/^.*\?/, ''));
    var sessionId = oQueryParams ? oQueryParams.sh :  Math.random().toString(36).substring(2, 15);
	if(path == '/uservote'){
		if(!oQueryParams) return;
		var productId = oQueryParams.productId ;
		var vote = oQueryParams.vote ;
	 	var sql = 'INSERT INTO OP_VOTE_INF \
		(SESSION_ID , PRODUCT_ID , VOTE_RESULT ) \
		VALUES\
		(%s , %s , %d)';
		connection.query(sql,[sessionId , productId , vote ], function(err, rows, fields) {
		  if (!err)
			 res.end(JSON.stringify(rows));
		  else
		    console.log('Error while performing Query.', err);
		});
	 	res.end(oQueryParams);
	}else{
		var sql = 'SELECT * from OP_PRODUCT_MAS \
		WHERE INX NOT IN ( SELECT PRODUCT_ID FROM OP_VOTE_INF WHERE SESSION_ID = ?) \
		ORDER BY RAND()\
		LIMIT 10';
		connection.query(sql,['test'], function(err, rows, fields) {
		  if (!err)
			 res.end(JSON.stringify(rows));
		  else
		    console.log('Error while performing Query.', err);
		});
	}

   
}).listen(8888, '0.0.0.0');

console.log('Server running at http://localhost:8888/');