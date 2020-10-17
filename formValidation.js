function validate () {
	var name = document.querySelector('#firstName');
	var lastName = document.querySelector('#lastName');
	var email = document.querySelector('#email');

	if (name.value =="" || lastName.value =="" || email.value == "") {


		if (name.value =="") {
			name.placeholder ="Fillout this field !!";
			name.style.color ="red";

		}

		if (lastName.value == ""){
			lastName.placeholder ="Fillout this field !!";
			lastName.style.color ="red";

		}

		if (email.value == ""){
			email.placeholder ="Fillout this field !!";
			email.style.color ="red";
		} else {

		}
		return false;

	}else {
		true;
	}
}
