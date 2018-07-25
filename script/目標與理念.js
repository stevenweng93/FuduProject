$(".目標與理念按鈕").mouseover(function(){
	var thisTopic = $(this).attr("id") + "標題";
	var thisDescription = $(this).attr("id") + "敘述";
	var thisPicture = $(this).attr("id");
	$("."+thisPicture).css({"opacity": "1"})
	$(".目標與理念標題").css({"opacity": "0"})
	$("."+thisTopic).css({"opacity": "1"})
	$("."+thisDescription).css({"opacity": "1"})
	$(".標題:not(#"+thisTopic+")").css({"opacity": "0"});
	$(".敘述:not(#"+thisDescription+")").css({"opacity": "0"});
	$(".照片:not(#"+thisPicture+")").css({"opacity": "0"});
});

$(".目標與理念按鈕").mouseout(function() {
	var thisTopic= $(this).attr("id") + "標題";
	var thisDescription = $(this).attr("id") + "敘述";
	$("."+thisTopic).css({"opacity": "1"})
	$("."+thisDescription).css({"opacity": "1"})
    $(".標題:not(#"+thisTopic+")").css({"opacity": "0"});
    $(".敘述:not(#"+thisDescription+")").css({"opacity": "0"});
    $(".照片:not(#"+thisPicture+")").css({"opacity": "0"});
});

