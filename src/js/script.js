//!menu

const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	closeOverlay = document.querySelector('.menu__overlay'),
	closeLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});
closeOverlay.addEventListener('click', () => {
	menu.classList.remove('active');
});

closeLink.forEach((item) => {
	item.addEventListener('click', () => {
		menu.classList.remove('active');
	});
});

$(document).ready(function () {
	//!validation
	function validationForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				email: {
					required: true,
					email: true,
				},
				comment: {
					required: true,
					minlength: 20,
				},
			},
			messages: {
				name: {
					required: 'Пожалуйста, введите свое имя',
					minlength: jQuery.validator.format('Введите минимум {0} символа!'),
				},
				email: {
					required: 'Пожалуйста, введите свою почту',
					email: 'Неправильно введен адрес почты',
				},
				comment: {
					required: 'Пожалуйста, введите текст сообщения',
					minlength: jQuery.validator.format('Введите минимум {0} символов!'),
				},
			},
		});
	}

	validationForms('#message-form');

	//!cart

	function toggleActive(item) {
		$(item).each(function (i) {
			$(this).on('mouseover', function (e) {
				e.preventDefault();
				$('.square__cart-bottom')
					.eq(i)
					.toggleClass('square__cart-bottom_active');
				$('.square__cart-top').eq(i).toggleClass('square__cart-top_active');
			});
		});
	}
	toggleActive('.works__item');

	function toggleBack(item) {
		$(item).each(function (i) {
			$(this).on('mouseout', function (e) {
				e.preventDefault();
				$('.square__cart-bottom_active')
					.removeClass('square__cart-bottom_active')
					.addClass('square__cart-bottom');

				$('.square__cart-top_active')
					.removeClass('square__cart-top_active')
					.addClass('square__cart-top');
			});
		});
	}
	toggleBack('.works__item');
});

//!theme-dark
function theme() {
	const toggleTheme = document.querySelector('.dark-theme'),
		bodyTheme = document.querySelector('body');

	toggleTheme.addEventListener('click', () => {
		document.documentElement.setAttribute('data-theme', 'dark');
	});
}
theme();
