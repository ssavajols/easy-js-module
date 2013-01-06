/*
 * APP FILE
 */
$(document).ready(function() {
	$.ajax({
		url:"./ajax.html",
		success:function(result){
			$("#ajax").html(result);
		},
		complete:function(){
			APP.executeDataController();
		}
	})
});