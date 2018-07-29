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

$(".col-lg").hover(function() {
      	var this1 = $(this).attr("id") + "-1";
        var this2 = $(this).attr("id") + "-2";
      	$("."+this1).addClass("box-shadow");
        $("."+this2).addClass("bottom-border");
      }, function() {
        var this1 = $(this).attr("id") + "-1";
        var this2 = $(this).attr("id") + "-2";
        $("."+this1).removeClass("box-shadow");
        $("."+this2).removeClass("bottom-border");
      });

$(".相片hover").hover(function() {
        var thisPhoto = $(this).attr("id");
        $("."+thisPhoto).addClass("相片opacity");
        $(".相片hover").not(this).stop(true,true).addClass("相片lowOpacity");
      }, function() {
        var thisPhoto = $(this).attr("id");
        $("."+thisPhoto).removeClass("相片opacity");
        $(".相片hover").not(this).stop(true,true).removeClass("相片lowOpacity");
      });
