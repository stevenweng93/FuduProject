if($(window).width() > 768) {
var timeout;
$(".item").mouseover(function() {
	clearTimeout(timeout);
	var thisId = $(this).attr("id") + "-content";
	var thisArea = $(this).attr("id") + "-area";
	var thisDescription = $(this).attr("id") + "-description";
        $(this).stop(true,true).css({"width": "33.333333%", "opacity": "0.3"});
        $(".item").not(this).stop(true,true).css({"width": "16.666667%", "opacity": "1"});
        $("#"+thisId).css({"opacity": "1"});
        $("#"+thisArea).css({"opacity": "0"});
        $(".s_intro:not(#"+thisId+")").css({"opacity": "0"});
        $(".title:not(#"+thisArea+")").css({"opacity": "1"});
    });
$(".item").mouseout(function() {
	var self = this;
	timeout = setTimeout(function() {
	$(".s_intro").stop(true, true).css({"opacity":"0"});
	$(".title").css({"opacity": "1"});
	$(".item").stop(true,true).css({"width": "20%", "opacity": "1"});
	}, 1000)
})
};

$(window).scroll(function() {
        scrollPosition = $(window).scrollTop();
        if(scrollPosition >= 80) {
          // change lower navbar to fixed
          $('.demo').addClass("arrow-none");
        } else {
          // change lower navbar to normal
          $('.demo').removeClass("arrow-none");
        }
      });
$(window).scroll(function() {
			     scrollPosition = $(window).scrollTop();
			     if(scrollPosition >= 520) {
			       $('.table-bar-container').addClass("table-bar-up");
			     } else {
			       $('.table-bar-container').removeClass("table-bar-up");
			     }
			   });
