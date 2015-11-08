$("document").ready(function(){
	$(".ico-f-close").click(function(){
		$(".yii-features").toggleClass('f-hidden'); // Close features
	});

	$(".subnav-btn").click(function(){
		$(".subnav-all").toggleClass('subnav-visible'); // Show subnav on mobile
	});

	$(".sect-title").sticky({ topSpacing: 0, bottomSpacing: 840, center:true, className:"title-stick" }); // Sticker page title
	$(".subnav").sticky({ topSpacing: 140, bottomSpacing: 400, center:true, className:"subnav-stick" }); // Sticker page subnav
});
