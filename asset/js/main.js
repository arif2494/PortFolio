//*============ preloder============
$(window).on('load', function() {
	$('.loader-wrapper').fadeOut('slow');
});
// *============Progress bar===========
// ?Circle - 1
const numb1 = document.querySelector('.numb1');
let counter = 0;
setInterval(() => {
	if (counter == 100) {
		clearInterval();
	} else {
		counter += 1;
		numb1.textContent = counter + '%';
	}
}, 20);

// ?Circle - 2
const numb2 = document.querySelector('.numb2');
let counter2 = 0;
setInterval(() => {
	if (counter2 == 90) {
		clearInterval();
	} else {
		counter2 += 1;
		numb2.textContent = counter2 + '%';
	}
}, 18);
// ?Circle - 3
const numb3 = document.querySelector('.numb3');
let counter3 = 0;
setInterval(() => {
	if (counter3 == 85) {
		clearInterval();
	} else {
		counter3 += 1;
		numb3.textContent = counter3 + '%';
	}
}, 17);

// *==========Owl CArousel==========
$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: [
			'<i class="fa fa-chevron-left" aria-hidden="true"></i>',
			'<i class="fa fa-chevron-right" aria-hidden="true"></i>'
		],
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: true,
				loop: false
			}
		}
	});
});

// *=======isotope js=============
// init Isotope
var $grid = $('.grid').isotope(
	{
		// options
	}
);
// filter items on button click
$('.filter-button-group').on('click', 'a', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
});

// change is-active class on buttons
$('.button-group').each(function(i, buttonGroup) {
	var $buttonGroup = $(buttonGroup);
	$buttonGroup.on('click', 'a', function() {
		$buttonGroup.find('.active').removeClass('active');
		$(this).addClass('active');
	});
});

// *============Typed js ===========
var typed = new Typed('#typed', {
	// stringsElement: null,
	strings: [
		'I am a Full-stack Web Developer',
		'I have been working since 2019',
		'Web Development is my passion',
		'I work with Dedication and Honestly'
	],
	// smartBackspace: true,
	typeSpeed: 80,
	startDelay: 300,
	backDelay: 700,
	loop: true,
	loopCount: Infinity
});
