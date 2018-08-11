$(".聯絡我們content").mouseover(function(){
	var thisPicture = $(this).attr("id") + "空拍";
	var thisName = $(this).attr("id") + "Name";
	var thisNumber = $(this).attr("id") + "Number";
	$("."+thisPicture).css({"opacity": "0.3", "transition": "1s"});
	$("."+thisName).css({"color": "#666", "transition": "1s"});
	$("."+thisNumber).css({"color": "#666", "transition": "1s"});
});

$(".聯絡我們content").mouseout(function() {
	var thisPicture = $(this).attr("id") + "空拍";
	var thisName = $(this).attr("id") + "Name";
	var thisNumber = $(this).attr("id") + "Number";
	$("."+thisPicture).css({"opacity": "0.7", "transition": "1s"});
	$("."+thisName).css({"color": "#fff", "transition": "1s"});
	$("."+thisNumber).css({"color": "#fff", "transition": "1s"});
});

$(".聯絡我們-left").hover(function() {
	var thisAddress = $(this).attr("id") + "-address";
	var thisMap = $(this).attr("id") + "地圖";
	$("."+thisAddress).css({"display": "block"});
	$("."+thisMap).css({"display": "block"});
}, function() {
	var thisAddress = $(this).attr("id") + "-address";
	var thisMap = $(this).attr("id") + "地圖";
	$("."+thisAddress).css({"display": "none"});
	$("."+thisMap).css({"display": "none"});
});

// $(".聯絡我們-left").click(function() {
// 	var thisAddress = $(this).attr("id") + "-address";
// 	var thisMap = $(this).attr("id") + "地圖";
// 	$("."+thisAddress).addClass("show");
// 	$("."+thisMap).addClass("show");
// });
