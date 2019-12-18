// main slider 변수
var mainSliderContainer = document.querySelector('.main_slider_container'),
	mainSlider = document.getElementsByClassName('main_slider'),
	mainCurrentIdx = 0,
	mainPagerHTML = '',
	maxHeight = 0,
	autoSlide = undefined,
	mainPager = document.querySelector('.pager');
var $mainDiv = $('#main-slider'),
	$sliderContainer = $('.main_slider_container'),
	$slider = $('.main_slider');	
//new store 변수
var newStoreContainer = document.querySelector('.new_store_slider_container'), 
	newStoreSlider = document.getElementsByClassName('new_store_slider'),
	newStoreCurrentIdx = 0,
	newStorePagerHTML = '',
	newStoreautoSlide = undefined,
	newStorePager = document.querySelector('.square-pager');
//mall 변수
var mallSliderContainer = document.querySelector('.tomnmall-container'), 
	mallSlider = document.getElementsByClassName('tomnmall-slider'), 
	mallCurrentIdx = 0,
	mallPagerHTML = '',
	mallautoSlide = undefined,
	mallPager = document.querySelector('.mall-pager');

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
	
	function sliderPosition(slider, left) {
		for(var j = 0; j < slider.length; j++) {
			slider[j].style.left = j*left + '%';
		}
	}
	function makeSpan(slider, pagerHTML, pager, show) {
		for(var i = 0; i < slider.length/show; i++) {
			pagerHTML += "<span>" + i + "</span>"
			pager.innerHTML = pagerHTML;
		}
	}
	sliderPosition(mainSlider, 100);
	makeSpan(mainSlider, mainPagerHTML, mainPager, 1);
	sliderPosition(newStoreSlider, 100);
	makeSpan(newStoreSlider, newStorePagerHTML, newStorePager, 1);
	sliderPosition(mallSlider, 33.5);
	makeSpan(mallSlider, mallPagerHTML, mallPager, 3);

var mainSliderBtn = document.querySelectorAll('.pager span'); //main btn
var newStoreBtn = document.querySelectorAll('.square-pager span');
var mallStoreBtn = document.querySelectorAll('.mall-pager span');

	function goToSlide(container, btn, currentIdx, idx) {
		container.classList.add('animated');
		for(var j = 0; j < btn.length; j++) {
			btn[j].classList.remove('active');
		}
		btn[idx].classList.add('active');
		container.style.left = idx*(-100) + '%';
		assignIdx(currentIdx, idx);	
	}
	function assignIdx(currentIdx, idx) {
		var now = currentIdx;
		if(now == "mainCurrentIdx") {
			mainCurrentIdx = idx;
		}
		else if(now == "newStoreCurrentIdx") {
			newStoreCurrentIdx = idx;
		}
		else if(now == "mallCurrentIdx") {
			mallCurrentIdx = idx;
		}
	}
	goToSlide(mainSliderContainer, mainSliderBtn, 'mainCurrentIdx', 0);
	goToSlide(newStoreContainer, newStoreBtn, 'newStoreCurrentIdx', 0);
	goToSlide(mallSliderContainer, mallStoreBtn, 'mallCurrentIdx', 0);
	
	function startAutoSlide() {
		autoSlide = setInterval(function() {
			var nextIdx = (mainCurrentIdx + 1) % mainSlider.length;
			goToSlide(mainSliderContainer, mainSliderBtn, 'mainCurrentIdx', nextIdx);
		},4000);
	};
	function stopAutoSlide() {
		clearInterval(autoSlide);
	};
	function startAutoNewStoreSlide() {
		newStoreautoSlide = setInterval(function() {	
			var nextIdx = (newStoreCurrentIdx + 1) % newStoreBtn.length;
			goToSlide(newStoreContainer, newStoreBtn, 'newStoreCurrentIdx', nextIdx);
		},4000);
	};
	function stopAutoNewStoreSlide() {
		clearInterval(newStoreautoSlide);
	};
	function startAutoMallSlide() {
		mallautoSlide = setInterval(function() {
			var nextIdx = (mallCurrentIdx + 1) % mallStoreBtn.length;
			goToSlide(mallSliderContainer, mallStoreBtn, 'mallCurrentIdx', nextIdx);
		},4000);
	};
	function stopAutoMallSlide() {
		clearInterval(mallautoSlide);
	};

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

	function btnAddEvent(sliderBtn, sliderContainer, currentIdx) {
		for(var i = 0 ; i < sliderBtn.length; i++) {
			sliderBtn[i].addEventListener('click', function(event) {
				var pageNum = event.target.innerText;
				console.log(pageNum);
				goToSlide(sliderContainer, sliderBtn, currentIdx, pageNum);
			});
		}
	}
	btnAddEvent(mainSliderBtn, mainSliderContainer, 'mainCurrentIdx');
	btnAddEvent(newStoreBtn, newStoreContainer, 'newStoreCurrentIdx');
	btnAddEvent(mallStoreBtn, mallSliderContainer, 'mallCurrentIdx');