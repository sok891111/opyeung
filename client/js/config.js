var mode = "REAL";
var $touchTreshold = 200;
var $server_url = "";


if("test" == mode)
	$server_url = 'http://localhost:8080/';
else
	$server_url = 'http://52.79.59.127:8080/';


var $list_url = $server_url+'product/list'