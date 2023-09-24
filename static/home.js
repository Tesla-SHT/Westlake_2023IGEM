window.addEventListener('scroll', function () {
    var element = document.getElementById('section1');
    var position = element.getBoundingClientRect().top;

    if (position < window.innerHeight) {
        element.classList.add('fade-in-element');
    }
});
window.addEventListener('scroll', function () {
    var element = document.getElementById('section2');
    var position = element.getBoundingClientRect().top;

    if (position < window.innerHeight) {
        element.classList.add('fade-in-element');
    }
}); window.addEventListener('scroll', function () {
    var element = document.getElementById('section3');
    var position = element.getBoundingClientRect().top;

    if (position < window.innerHeight) {
        element.classList.add('fade-in-element');
    }
}); window.addEventListener('scroll', function () {
    var element = document.getElementById('section4');
    var position = element.getBoundingClientRect().top;

    if (position < window.innerHeight) {
        element.classList.add('fade-in-element');
    }
});

var spots = [
    { d: 20, top: 10, left: 30, opacity: .01 },
    { d: 30, top: 50, left: 90, opacity: .1 },
    { d: 50, top: 500, left: 190, opacity: .2 },
    { d: 10, top: 600, left: 270, opacity: .2 }
];

// Set height of spot-container
var $spotsContainer = $(`<div id='spots-container'></div>`);
$spotsContainer.css({
    position: 'absolute',
    left: 0,
    right: 0,
    'z-index': 10
});
$('body').prepend($spotsContainer);
$('#spots-container').height($(document).height());

spots.forEach((spot, i) => {
    var $spotEl = $(`<div class='spot sid${i}'></div>`);
    $spotEl.css({
        width: spot.d + 'px',
        height: spot.d + 'px',
        'border-radius': spot.d / 2 + 'px',
        top: spot.top,
        left: spot.left, op: 0
    });
    // console.log('i', i, $spotEl);
    $('#spots-container').append($spotEl);
});

$(document).scroll(function () {
    $('.spot').each(function () {
        //  number of pixels that are hidden from view above viewport
        const scrollTopHeight = $(document).scrollTop();
        const windowHeight = $(window).height();
        const triggerHeight = scrollTopHeight + .75 * windowHeight;
        // position of div relative to document
        const spotHeight = $(this).offset().top;

        if (triggerHeight > spotHeight) {
            const spotId = $(this).attr("class").split('sid')[1];
            const opacity = spots[spotId].opacity;
            $(this).fadeTo("slow", .15);
        } else {
            // $(this).fadeOut();
        }
    });
    $('.vertical-line').each(function () {
        const scrollTopHeight = $(document).scrollTop();
        const windowHeight = $(window).height();
        const triggerPosition = scrollTopHeight + .75 * windowHeight;
        const linePosition = $(this).offset().top;
        const lineId = $(this).attr("line-id")
        if (triggerPosition > linePosition) {
            $(this).addClass("vertical-line-id-" + lineId);
        } else {
            $(this).removeClass("vertical-line-id-" + lineId);
        }
    });
});

/*HP introduction (two slider with waves)*/
$(document).ready(function() {
	const $app = $('.app');
	const $img = $('.app__img');
	const $pageNav1 = $('.pages__item--1');
	const $pageNav2 = $('.pages__item--2');
	let animation = true;
	let curSlide = 1;
	let scrolledUp, nextSlide;
	
	let pagination = function(slide, target) {
		animation = true;
		if (target === undefined) {
			nextSlide = scrolledUp ? slide - 1 : slide + 1;
		} else {
			nextSlide = target;
		}
		
		$('.pages__item--' + nextSlide).addClass('page__item-active');
		$('.pages__item--' + slide).removeClass('page__item-active');
		
		$app.toggleClass('active');
		setTimeout(function() {
			animation = false;
		}, 3000)
	}
	
	let navigateDown = function() {
		if (curSlide > 1) return;
		scrolledUp = false;
		pagination(curSlide);
		curSlide++;
	}

	let navigateUp = function() {
		if (curSlide === 1) return;
		scrolledUp = true;
		pagination(curSlide);
		curSlide--;
	}

	setTimeout(function() {
		$app.addClass('initial');
	}, 1500);

	setTimeout(function() {
		animation = false;
	}, 4500);
	
	$(document).on('mousewheel DOMMouseScroll', function(e) {
		var delta = e.originalEvent.wheelDelta;
		if (animation) return;
		if (delta > 0 || e.originalEvent.detail < 0) {
			navigateUp();
		} else {
			navigateDown();
		}
	});

	$(document).on("click", ".pages__item:not(.page__item-active)", function() {
		if (animation) return;
		let target = +$(this).attr('data-target');
		pagination(curSlide, target);
		curSlide = target;
	});
});