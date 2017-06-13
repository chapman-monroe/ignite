
    // $(".kimDesc").hover(function() {
    //     $(".kimTitle").css("color", "#CFF1F4");
    //     $(".kimTitle").css("transform", "scale(1.05)");
    //     $(".kim").css("transform", "scale(1.08)");
    // },
    // function() {
    //     $(".kimTitle").css("color", "#A1CAF1");
    //     $(".kimTitle").css("transform", "scale(1)");
    //     $(".kim").css("transform", "scale(1)");
    // }
    // );
    // $(".kendallDesc").hover(function() {
    //     $(".kendallTitle").css("color", "#CFF1F4");
    //     $(".kendallTitle").css("transform", "scale(1.05)");
    //     $(".kendall").css("transform", "scale(1.08)");
    // },
    // function() {
    //     $(".kendallTitle").css("color", "#A1CAF1");
    //     $(".kendallTitle").css("transform", "scale(1)");
    //     $(".kendall").css("transform", "scale(1)");
    // }
    // );

window.onclick = function(event) {
  document.getElementById("ddn").css("display", "none");
}

$(document).ready(function(){       
		$(".one-a").click(function() {
        $('html,body').animate({
        scrollTop: $(".instrSect").offset().top},
        'slow');
        });

            $(window).on("scroll",function(){
  				var wn = $(window).scrollTop();
    			if(wn > 45){
    				if($(window).width() <= 900) {
    					$(".logo").css("width", "40px");
    					$(".logo").css("height", "40px");
    					$(".logo").css("margin-top", "4px");
    					$(".dropbtn").css("width", "20px");
    					$(".dropbtn").css("height", "20px");
    					$(".dropbtn").css("padding", "0");
    					$(".dropbtn").css("margin-right", "40%");
    					$(".content").css("top", "49px");
    				}
    				else {
	    				$(".logo").css("width", "48px");
	    				$(".logo").css("height", "48px");
	    				$(".logo").css("margin-top", "4px");
	    				$(".navbuttons").css("font-size", "15px");
	    				$(".navbuttons").css("padding", "10px 55px 10px 0");
	    				$(".navbuttons").css("margin", "10px 0");
                        $(".applybtn").css("font-size", "15px");
	    				$(".applybtn").css("padding", "10px 20px");
	    				$(".applybtn").css("margin", "10px 10px 10px 0");
                        $(".text").css("font-size", "15px");
                        $(".in-use").css("font-size", "15px");
                        $(".in-use").css("padding", "10px 20px");
                        $(".in-use").css("margin", "10px 10px 10px 0");
                        $(".text-inuse").css("font-size", "15px");
    				}
                    if(wn > 950) {
                        $(".adam").css("opacity", "1");
                        $(".adam").css("transform", "translate(-50%, 0) scale(1)");
                        $(".adamTitle").css("opacity", "1");
                        $(".adamTitle").css("transform", "translate(-50%, 0) scale(1)");
                    }
                    if(wn > 1050) {
                        $(".kim").css("opacity", "1");
                        $(".kim").css("transform", "scale(1)");
                        $(".kimTitle").css("opacity", "1");
                        $(".kimTitle").css("transform", "scale(1)");
                        $(".kendall").css("opacity", "1");
                        $(".kendall").css("transform", "scale(1)");
                        $(".kendallTitle").css("opacity", "1");
                        $(".kendallTitle").css("transform", "scale(1)");
                        $(".instrHeading").css("opacity", "1");
                        $(".instrHeading").css("transform", "translate(-50%, 0) scale(1)");
                    }
   				}
   				else{
   					if($(window).width() <= 900) {
    					$(".logo").css("width", "53px");
    					$(".logo").css("height", "53px");
    					$(".logo").css("margin-top", "4px");
    					$(".dropbtn").css("width", "30px");
    					$(".dropbtn").css("height", "30px");
    					$(".dropbtn").css("padding", "0");
    					$(".dropbtn").css("margin-right", "40%");
    					$(".content").css("top", "58px");
    				}
    				else {
	    				$(".logo").css("width","65px");
	    				$(".logo").css("height","65px");
	    				$(".logo").css("margin-top", "8px");
	    				$(".navbuttons").css("font-size", "20px");
	    				$(".navbuttons").css("padding", "14px 55px 14px 0");
	    				$(".navbuttons").css("margin", "14px 0");
	    				$(".applybtn").css("padding", "9px 35px");
	    				$(".applybtn").css("margin", "20px 15px 20px 0");
                        $(".text").css("font-size", "20px");
                        $(".in-use").css("padding", "9px 35px");
                        $(".in-use").css("margin", "20px 15px 20px 0");
                        $(".text-inuse").css("font-size", "20px");
 					}
    			}
      		});
		});


