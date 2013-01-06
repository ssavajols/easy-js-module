easy-js-module
==============

Easy JS Module is a lightweight system to load module for JavaScript application based on jQuery framework.

HOW TO USE
==============

CONFIG FILE :
--------------

Config.json is the user defined config values.
config.json is on the same level as index.html file.

NAMESPACE : 
The application's name. Name of the application and prefix module's filename.
Ex : APP

DIR_MODULES : 
Directory of the application's modules.
Ex : ./assets/js/modules/APP.sample.js

DIR_CORE : 
The core system's directory.
Ex : ../../build/development/assets/js/core/easy-js-module.js

DIR_APP : 
The application file directory.
Ex : ./assets/js/APP.js

	{
		"NAMESPACE":"APP",
		"DIR_MODULES":"./assets/js/modules/",
		"DIR_CORE":"../../build/development/assets/js/core/",
		"DIR_APP":"./assets/js/"
	}

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

		_super.sample1 = function(){
			alert("sample module 1");
		}

	})(APP.modules, jQuery);