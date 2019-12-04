var $firstMenu = $('nav ul.menu > li'),
	$header = $('header');


	$firstMenu.mouseover(function() {
		$header.stop().animate({
			height: '350px'
		},300);
	})
	.mouseout(function() {
		$header.stop().animate({
			height: '130px'
		},300)
	});
