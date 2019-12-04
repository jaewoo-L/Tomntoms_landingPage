var $firstMenu = $('nav ul.menu > li'),
	$header = $('header'),
	$top = $('#footer .btn-top');


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

	$top.click(function(event) {
		event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });