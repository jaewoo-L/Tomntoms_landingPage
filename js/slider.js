var mainSliderContainer = document.querySelector('.main_slider_container'),
	mainSlider = document.getElementsByClassName('main_slider'),
	mainCurrentIdx = 0,
	mainPagerHTML = '',
	maxHeight = 0,
	autoSlide = undefined,
	mainPager = document.querySelector('.pager');

var newStoreContainer = document.querySelector('.new_store_slider_container'), 
	newStoreSlider = document.getElementsByClassName('new_store_slider'),
	newStoreCurrentIdx = 0,
	newStorePagerHTML = '',
	newStoreautoSlide = undefined,
	newStorePager = document.querySelector('.square-pager');

var mallSliderContainer = document.querySelector('.tomnmall-container'), 
	mallSlider = document.getElementsByClassName('tomnmall-slider'), 
	mallCurrentIdx = 0,
	mallPagerHTML = '',
	mallautoSlide = undefined,
	mallPager = document.querySelector('.mall-pager');

var $mainDiv = $('#main-slider'),
	$sliderContainer = $('.main_slider_container'),
	$slider = $('.main_slider');

	function sliderHeight() {
		var slideHeight = $slider.height()
		$mainDiv.css({
			height : slideHeight + 'px'
		})
		$sliderContainer.css({
			height : slideHeight + 'px'
		})
	}
	sliderHeight();
	$(window).resize(function() { 
		sliderHeight();
	});
	
	
	for(var i = 0; i < mainSlider.length; i++) {
		mainSlider[i].style.left = i*100 + '%';
		mainPagerHTML += "<span>" + i + "</span>"
		mainPager.innerHTML = mainPagerHTML;
	}
	for(var j = 0; j < newStoreSlider.length; j++) {
		newStoreSlider[j].style.left = j*100 + '%';
		newStorePagerHTML += "<span>" + j + "</span>"
		newStorePager.innerHTML = newStorePagerHTML;
	}
	for(var j = 0; j < mallSlider.length; j++) {
		mallSlider[j].style.left = j*33.5 + '%';
	}
	for(var j = 0; j < mallSlider.length/3; j++) {
		mallPagerHTML += "<span>" + j + "</span>"
		mallPager.innerHTML = mallPagerHTML;
	}


var mainSliderBtn = document.querySelectorAll('.pager span'); //main btn
var newStoreBtn = document.querySelectorAll('.square-pager span');
var mallStoreBtn = document.querySelectorAll('.mall-pager span');

	function goToSlide(idx) {
		mainSliderContainer.classList.add('animated');
		for(var j = 0; j < mainSliderBtn.length; j++) {
			mainSliderBtn[j].classList.remove('active');
		}
		mainSliderBtn[idx].classList.add('active');
		mainSliderContainer.style.left = idx*(-100) + '%';
		mainCurrentIdx = idx;		
	}
	function newStoreSlide(idx) {
		newStoreContainer.classList.add('animated');
		for(var j = 0; j < newStoreBtn.length; j++) {
			newStoreBtn[j].classList.remove('active');
		}
		newStoreBtn[idx].classList.add('active');
		newStoreContainer.style.left = idx*(-100) + '%';
		newStoreCurrentIdx = idx;
	}
	function mallStoreSlide(idx) {
		mallSliderContainer.classList.add('animated');
		for(var j = 0; j < mallStoreBtn.length; j++) {
			mallStoreBtn[j].classList.remove('active');
		}
		mallStoreBtn[idx].classList.add('active');
		mallSliderContainer.style.left = idx*(-100) + '%';
		mallCurrentIdx = idx;
	}

	goToSlide(0);
	newStoreSlide(0);
	mallStoreSlide(0);

	function startAutoSlide() {
		autoSlide = setInterval(function() {
			var nextIdx = (mainCurrentIdx + 1) % mainSlider.length;
			goToSlide(nextIdx);
		},4000);
	}
	
	function stopAutoSlide() {
		clearInterval(autoSlide);
	}
	function startAutoNewStoreSlide() {
		newStoreautoSlide = setInterval(function() {	
			var nextIdx = (newStoreCurrentIdx + 1) % newStoreBtn.length;
			newStoreSlide(nextIdx);
		},4000);
	}
	function stopAutoNewStoreSlide() {
		clearInterval(newStoreautoSlide);
	}
	function startAutoMallSlide() {
		mallautoSlide = setInterval(function() {
			var nextIdx = (mallCurrentIdx + 1) % mallStoreBtn.length;
			mallStoreSlide(nextIdx);
		},4000);
	}
	function stopAutoMallSlide() {
		clearInterval(mallautoSlide);
	}
	startAutoSlide();
	startAutoNewStoreSlide();
	startAutoMallSlide();


	mainSliderContainer.addEventListener('mouseenter', function() {
		stopAutoSlide();
	});
	mainSliderContainer.addEventListener('mouseleave', function() {
		startAutoSlide();		
	});
	newStoreContainer.addEventListener('mouseenter', function() {
		stopAutoNewStoreSlide();
	});
	newStoreContainer.addEventListener('mouseleave', function() {
		startAutoNewStoreSlide();		
	});
	mallSliderContainer.addEventListener('mouseenter', function() {
		stopAutoMallSlide();
	});
	mallSliderContainer.addEventListener('mouseleave', function() {
		startAutoMallSlide();		
	});

	for(var i = 0 ; i < mainSliderBtn.length; i++) {
		mainSliderBtn[i].addEventListener('click', function(event) {
			var pageNum = event.target.innerText;
			goToSlide(pageNum);
		});
	}
	for(var i = 0 ; i < newStoreBtn.length; i++) {
		newStoreBtn[i].addEventListener('click', function(event) {
			var pageNum1 = event.target.innerText;
			newStoreSlide(pageNum1);
		});
	}
	for(var i = 0 ; i < mallStoreBtn.length; i++) {
		mallStoreBtn[i].addEventListener('click', function(event) {
			var pageNum = event.target.innerText;
			mallStoreSlide(pageNum);
		});
	}

