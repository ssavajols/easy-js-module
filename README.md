easy-js-module
==============

Sample code

HTML :
--------------
	<!DOCTYPE html>
	<html>
		<head>
			<title>EASY-JS-MODULE</title>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
			<script type="text/javascript" src="../../build/development/assets/vendor/jquery/jquery-1.8.3.min.js"></script>
			<script type="text/javascript" src="../../build/development/assets/js/core/easy-js-module.js"></script>
		</head>
		<body>
			<div data-controller="sample1">sample module 1</div>
		</body>
	</html>

APP FILE :
--------------
	$(document).ready(function() {
		APP.executeDataController();
	});

MODULE : 
--------------

	(function(_super, $){

		_super.sample2 = function(){
			alert("sample module 1");
		}

	})(APP.modules, jQuery);