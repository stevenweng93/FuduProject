$(".服務項目hover").mouseover(function() {
	var thisHover = $(this).attr("id");
	$("."+thisHover).css({"opacity": "1", "transition": "0.8s ease-in-out"});
	$(".服務項目:not(."+thisHover+")").css({"opacity": "0", "transition": "0.8s ease-in-out"});
});

$(".服務項目hover").mouseout(function() {
	var thisHover = $(this).attr("id");
	$("."+thisHover).css({"opacity": "1"});
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
