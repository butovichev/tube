// ========== TABLE OF CONTENTS =========== //
//
// 1. Page Loader 
// 2. Text fitting for headlines
// 3. Parallax
// 4. Calendar
//
// ======================================= //


(function($) {
    "use strict";
	
	/* 1. Page Loader */	
	$(".loader-item").delay(7000).fadeOut();
	$("#pageloader").delay(1200).fadeOut("slow");

	/* 2. Menu Toggle */	
	$(".icon-sub-menu").click(function(){
		$(this).next().toggle("fast");	
		if ($(this).find(":nth-child(1)").hasClass("show")){
			$(this).find(":nth-child(1)").removeClass("show");
			$(this).find(":nth-child(2)").addClass("show");			
		} else{
			$(this).find(":nth-child(2)").removeClass("show");
			$(this).find(":nth-child(1)").addClass("show");			
		}
	});

	/* 3. Search */	
	$(".desktop-search-form .glass-button").click(function(){
		
			if ($(".desktop-search-form input").css("width") < '500px'){
				$(".desktop-search-form input").css("width", Math.round($(this).offset().left - $("#fixed-navbar").offset().left) + 'px');
			}
			$(".desktop-search-form input").toggle("slow");
	});

	$(".mobile-search-form .glass-button").click(function(){
			console.log('left1 = ' + $(".logo-mobile").offset().left);
			console.log('left2 = ' + $(this).offset().left);
			
			console.log('Diffrence = ' + Math.round($(this).offset().left - $(".logo-mobile").offset().left));
			

			if ($(".mobile-search-form input").css("width") < '10px'){
				$(".mobile-search-form input").css("width", Math.round($(this).offset().left - $(".logo-mobile").offset().left) + 'px');
			}
			$(".mobile-search-form input").toggle("slow");

	});

	

	
	

})(jQuery);

