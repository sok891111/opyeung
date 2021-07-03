var mode = "test";
var $touchTreshold = 200;
var $server_url = "";


if("test" == mode)
	$server_url = 'http://localhost:8888/';
else
	$server_url = 'http://34.83.107.247:8888/';


var $list_url = $server_url+'product/list'