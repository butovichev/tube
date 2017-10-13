// ========== TABLE OF CONTENTS =========== //
//
// 1. Page Loader 
// 2. Menu Toggle
// 3. Search
// 4. Resize window
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
		search_form_change();
		$(".desktop-search-form input").toggle("slow");
	});

	$(".mobile-search-form .glass-button").click(function(){
		search_mobile_form_change();
		$(".mobile-search-form input").toggle("slow");
	});

	
	/**
	* This function is performed when the window size changes
	*/
	function search_mobile_form_change(){
		var width = Math.round($(".mobile-search-form .glass-button").offset().left - $(".logo-mobile").offset().left);

		if (width > 0){
			$(".mobile-search-form input").css("width", width + "px");		
		}
	}

	/**
	* This function is performed when the window size changes
	*/
	function search_form_change(){
		var width = Math.round($('.desktop-search-form .glass-button').offset().left - $("#fixed-navbar").offset().left - 6);
		//var width = Math.round($("#fixed-navbar").css("width") - $(".glass-button").css("width") - $(".btn-search-video").css("width"));
		//var width = Math.round($("#fixed-navbar").css("width"));	
		//console.log('width = ' + width);

		if (width > 0){
			$(".desktop-search-form input").css("width", width + 'px');
		}
	}

	/* 4. Resize window */	
	$(window).resize(function(){
		search_form_change();
		search_mobile_form_change();
	}); 	
	

	
	

})(jQuery);

