var mainSliderContainer = document.querySelector('.main_slider_container'), //ul
	mainSlider = document.getElementsByClassName('main_slider'), //li
	mainCurrentIdx = 0,
	mainPagerHTML = '',
	autoSlide = undefined,
	mainPager = document.querySelector('.pager');

var newStoreContainer = document.querySelector('.new_store_slider_container'), //ul
	newStoreSlider = document.getElementsByClassName('new_store_slider'),//li
	newStoreCurrentIdx = 0,
	newStorePagerHTML = '',
	newStoreautoSlide = undefined,
	newStorePager = document.querySelector('.square-pager');


	
	for(var i = 0; i < mainSlider.length; i++) {
		mainSlider[i].style.left = i*100 + '%';
		mainPagerHTML += "<span>" + i + "</span>"
		mainPager.innerHTML = mainPagerHTML;
	}
	for(var i = 0; i < newStoreSlider.length; i++) {
		newStoreSlider[i].style.left = i*100 + '%';
		newStorePagerHTML += "<span>" + i + "</span>"
		newStorePager.innerHTML = newStorePagerHTML;
	}


var mainSliderBtn = document.querySelectorAll('.pager span'); //main btn
var newStoreBtn = document.querySelectorAll('.square-pager span');


	function goToSlide(idx) {
		mainSliderContainer.classList.add('animated');
		mainCurrentIdx = idx;
		for(var j = 0; j < mainSliderBtn.length; j++) {
			mainSliderBtn[j].classList.remove('active');
		}
		mainSliderBtn[idx].classList.add('active');
		mainSliderContainer.style.left = idx*(-100) + '%';
	}
	function newStoreSlide(idx) {
		newStoreContainer.classList.add('animated');
		newStoreCurrentIdx = idx;
		for(var j = 0; j < newStoreBtn.length; j++) {
			newStoreBtn[j].classList.remove('active');
		}
		newStoreBtn[idx].classList.add('active');
		newStoreContainer.style.left = idx*(-100) + '%';
		
	}

	goToSlide(0);
	newStoreSlide(0);

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
			var anextIdx = (newStoreCurrentIdx + 1) % newStoreSlider.length;
			newStoreSlide(anextIdx);
		},4000);
	}
	function stopAutoNewStoreSlide() {
		clearInterval(newStoreautoSlide);
	}

	startAutoSlide();
	startAutoNewStoreSlide();

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

