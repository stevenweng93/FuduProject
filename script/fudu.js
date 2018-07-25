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

// if($(window).width() > 768) {
// $(".item").mouseover(function() {
// 	var thisId = $(this).attr("id") + "-content";
// 	var thisArea = $(this).attr("id") + "-area";
// 	var thisCol = $(this).attr("id") + "-col";    
//         $(this).stop(true,true).addClass("col-sm-4 opacity-use");
//         $("#"+thisCol).stop(true,true).addClass("col-sm-4");
//         $(".item").not(this).stop(true,true).css({"opacity": "1"});
//         $("#"+thisId).css({"opacity": "1"});
//         $("#"+thisArea).css({"opacity": "0"});
//         // $(".s_intro:not(#"+thisId+")").css({"opacity": "0"});
//         // $(".title:not(#"+thisArea+")").css({"opacity": "1"});
//     });
// $(".item").mouseout(function() {
//         $(".item").stop(true,true).removeClass("col-sm-4 opacity-use");
// 		$(".s_intro").stop(true, true).css({"opacity":"0"});  
// 		$(".title").css({"opacity": "1"});
// 		$(".all-item").stop(true,true).addClass("opacity-use");
// 	});
// };







