$(".圖釘").mouseover(function(){
	var thisId = $(this).attr("id");
	var addClass = $(this).attr("id") + "變大";
	$("."+thisId).addClass(addClass);
});

$(".圖釘").mouseout(function() {
	var thisId = $(this).attr("id");
	var addClass = $(this).attr("id") + "變大";
	$("."+thisId).removeClass(addClass);
});



// Area Changes

$("#banqiao").hover(function(){
	$("#banqiaoHouses").fadeIn(300);
	$("#chunghoHouses").fadeOut(0);
	$("#tuchengHouses").fadeOut(0);
	$("#xinzhuangHouses").fadeOut(0);
});

$("#chungho").hover(function(){
	$("#banqiaoHouses").fadeOut(0);
	$("#chunghoHouses").fadeIn(300);
	$("#tuchengHouses").fadeOut(0);
	$("#xinzhuangHouses").fadeOut(0);
});

$("#tucheng").hover(function(){
	$("#banqiaoHouses").fadeOut(0);
	$("#chunghoHouses").fadeOut(0);
	$("#tuchengHouses").fadeIn(300);
	$("#xinzhuangHouses").fadeOut(0);
});

$("#xinzhuang").hover(function(){
	$("#banqiaoHouses").fadeOut(0);
	$("#chunghoHouses").fadeOut(0);
	$("#tuchengHouses").fadeOut(0);
	$("#xinzhuangHouses").fadeIn(300);

});


