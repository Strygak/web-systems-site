$('#myForm').validate({
	rules: {
		first_name: {
			required:true,
			rangelength: [5, 20]
		},
		last_name: {
			required: true,
			rangelength: [5, 20]
		},
		email: {
    		required: true,
    		email: true
  		},
  		comments: {
  			required: true,
  			rangelength: [10, 500]
  		}
	}
});

$('#logForm').validate({
	rules: {
		email: {
			required: true,
			email: true
		},
		password: {
			minlength: 8
		}
	}
});

$('#auth').validate({
	rules: {
		email:{
			required: true,
			email: true
		},
		password: {
			required: true,
			minlength: 8
		},
		repeat_password: {
			required: true,
			equalTo: '#password'
		},
		ansver: {
			required: true,
			rangelength: [5, 20]
		}
	}
});

$(function () {
	$("#myForm").submit(function (event) {
		event.preventDefault();
		$.post("/handler", $(this).serialize());
		$('.msg').val('');
		});
});