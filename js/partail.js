var $firstMenu = $('nav ul.menu > li'),
	$header = $('header'),
	$firstMenuSelect = $('header .menu > li > a')
	$menuSelect = $('header .menu ul li a'),
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

	$firstMenuSelect.mouseover(function() {
		$(this).animate({
			color: '#8c0c04'
		},100)
	})
	.mouseout(function() {
		$(this).animate({
			color:'#303030'
		},100)
	})

    $menuSelect.mouseover(function() {
    	$(this).animate({
    		color: '#8c0c04'
    	},100);
    	$(this).parents('ul').parents('li').children('a').css({
    		color: '#8c0c04'
    	})
    })
    .mouseout(function() {
    	$(this).animate({
    		color: '#8a8a8a'
    	},100);
    	$(this).parents('ul').parents('li').children('a').css({
    		color: '#303030'
    	})
    })