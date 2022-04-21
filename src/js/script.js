$(document).ready(function () {
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
					minlength: jQuery.validator.format('введите минимум {0} символа!'),
				},
				email: {
					required: 'Пожалуйста, введите свою почту',
					email: 'Неправильно введен адрес почты',
				},
				comment: {
					required: 'Пожалуйста, введите текст сообщения',
					minlength: jQuery.validator.format('введите минимум {0} символов!'),
				},
			},
		});
	}

	validationForms('#message-form');
});
