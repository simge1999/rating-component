$(document).ready(function(){
$("span").click(function(){
$(this).toggleClass("head");
});
$("input").click(function(){
	$(".thanks").show(2000);
});
$("input").click(function(){
	$(".first").hide(2000);
});
$("span").on("click", function(e){
	$("#selected").html($("span").val("click"));
});
$(".star").click(function(){
	$(".first").show(2000)
	$(".thanks").hide(2000)
})
});