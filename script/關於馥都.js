// $(document).ready(function(){

//     //Check to see if the window is top if not then display button
//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 50) {
//             $('#section01').fadeOut();
//         } else {
//             $('#section01').fadeIn();
//         }
//     });

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
