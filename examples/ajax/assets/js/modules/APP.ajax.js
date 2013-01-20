/*
 * BASIC SAMPLE STRUCTURE MODULE
 */
(function(_super){
	
	_super.ajax = function(){
		alert("ajax loaded module", arguments);
	}
	
})(APP.modules)