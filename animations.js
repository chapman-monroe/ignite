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

$(document).ready(function(){
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
				$(".logo").css("margin-top", "3px");
				$(".navbuttons").css("font-size", "15px");
				$(".navbuttons").css("padding", "8px 55px 8px 0");
				$(".navbuttons").css("margin", "5px 0");
                $(".applybtn").css("font-size", "15px");
				$(".applybtn").css("padding", "7px 20px");
				$(".applybtn").css("margin", "6px 10px 3px 0");
                $(".text").css("font-size", "15px");
			}
            if(wn > 1100) {
                $(".adam").css("opacity", "1");
                $(".adam").css("transform", "translate(-50%, 0) scale(1)");
                $(".adamTitle").css("opacity", "1");
                $(".adamTitle").css("transform", "translate(-50%, 0) scale(1)");
            }
            if(wn > 1200) {
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
				$(".logo").css("margin-top", "3px");
				$(".dropbtn").css("width", "30px");
				$(".dropbtn").css("height", "30px");
				$(".dropbtn").css("padding", "0");
				$(".dropbtn").css("margin-right", "40%");
				$(".content").css("top", "58px");
			}
			else {
				$(".logo").css("width","85px");
				$(".logo").css("height","85px");
				$(".logo").css("margin-top", "6px");
				$(".navbuttons").css("font-size", "20px");
				$(".navbuttons").css("padding", "14px 55px 14px 0");
				$(".navbuttons").css("margin", "14px 0");
				$(".applybtn").css("padding", "9px 35px");
				$(".applybtn").css("margin", "20px 15px 20px 0");
                $(".text").css("font-size", "20px");
			}
		}
	});
});