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
$(".areaButton").mouseover(function() {
	var thisMap = $(this).attr("id") + "Map";
	var thisHouses = $(this).attr("id") + "Houses";
	$("#banqiao").removeClass("hoverEffect");
	$("#"+thisHouses).css({"display": "block"});
	$(".housesHover:not(#"+thisHouses+")").css({"display": "none"});
	$("#"+thisMap).css({"display": "block"});
	$(".areaHover:not(#"+thisMap+")").css({"display": "none"});
});
$(".areaButton").mouseout(function() {
	var thisMap = $(this).attr("id") + "Map";
	var thisHouses = $(this).attr("id") + "Houses";
	$("#"+thisHouses).css({"display": "block"});
	$("#"+thisMap).css({"display": "block"});
});

//mobile areaIntro
$(".areaButtonMobile").click(function() {
	var thisArea = $(this).attr("id") + "介紹";
	$("."+thisArea).show();
	$(".板橋container:not(."+thisArea+")").hide();
});




$(window).scroll(function() {
        scrollPosition = $(window).scrollTop();
        if(scrollPosition >= 80) {
          // change lower navbar to fixed
          $('.demo').addClass("arrow-none");
        } else {
          // change lower navbar to normal
          $('.demo').removeClass("arrow-none");
        }
      })
