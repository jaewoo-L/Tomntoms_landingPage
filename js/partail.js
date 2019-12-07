var $firstMenu = $('#header nav ul.menu > li'),
	$header = $('#header'),
	$firstMenuSelect = $('#header .menu > li > a')
	$menuSelect = $('#header .menu ul li a'),
	$top = $('#footer .btn-top');
var $mbHeader = $('#mbHeader'),
	$mbBtn = $('#mbHeader .util li'),
	$mbMenu = $('#mbHeader nav'),
	$mbFirstMenu = $('#mbHeader nav ul.menu > li a'),
	$mbSecondMenu = $('#mbHeader nav ul.menu > li > ul');

	$firstMenu.mouseover(function() {
		$header.stop().animate({
			height: '350px'
		},300);
	})
	.mouseout(function() {
		$header.stop().animate({
			height: '136px'
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
// mobile
	$mbBtn.click(function() {
		$mbMenu.toggleClass('active');
		$mbHeader.toggleClass('active');
	});
	$mbFirstMenu.click(function(event) {
		var sameMenuClick = false;
		event.preventDefault();
		if($(event.target).siblings('ul').hasClass('active')) {
			$(event.target).siblings('ul').removeClass('active');
			sameMenuClick = true;
		}
		$mbSecondMenu.each(function() {
			$(this).removeClass('active')
			$mbFirstMenu.find('img').attr('src','img/opne_tap.png')
		})
		if(!sameMenuClick){
			$(event.target).siblings('ul').toggleClass('active');
			$(event.target).find('img').attr('src','img/close_tap.png')
		}
	})