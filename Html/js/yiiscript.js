$("document").ready(function(){
	$(".ico-f-close").click(function(){
		$(".yii-features").toggleClass('f-hidden'); // Close features
	});

	$(".subnav-btn").click(function(){
		$(".subnav-all").toggleClass('subnav-visible'); // Show subnav on mobile
	});

	$(".sect-title").sticky({ topSpacing: 0, bottomSpacing: 840, center:true, className:"title-stick" }); // Sticker page title
	$(".sect-subtitle").sticky({ topSpacing: 48, bottomSpacing: 800, center:true, className:"subtitle-stick" }); // Sticker page subtitle
	$(".subnav").sticky({ topSpacing: 140, bottomSpacing: 400, center:true, className:"subnav-stick" }); // Sticker page subnav
});
