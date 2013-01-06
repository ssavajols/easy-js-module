easy-js-module
==============

Sample code

HTML :
--------------
	&lt;!DOCTYPE html&gt;
	&lt;html&gt;
		&lt;head&gt;
			&lt;title&gt;EASY-JS-MODULE&lt;/title&gt;
			&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
			&lt;script type=&quot;text/javascript&quot; src=&quot;../../build/development/assets/vendor/jquery/jquery-1.8.3.min.js&quot;&gt;&lt;/script&gt;
			&lt;script type=&quot;text/javascript&quot; src=&quot;../../build/development/assets/js/core/easy-js-module.js&quot;&gt;&lt;/script&gt;
		&lt;/head&gt;
		&lt;body&gt;
			&lt;div data-controller=&quot;sample1&quot;&gt;sample module 1&lt;/div&gt;
		&lt;/body&gt;
	&lt;/html&gt;

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