(function () {
	var inputPass = document.querySelector("#password");
	var inputConfPas = document.querySelector("#confPass");
	var btnNewUser = document.querySelector("#btnNewUser");
	var btnBack = document.querySelector("#btnBack");
	var terms = document.querySelector("#terms");
	var name = document.querySelector("#name");
	var lastName = document.querySelector("#lastName");
	var email = document.querySelector("#email");
	var password = document.querySelector("#password");
	var confPass = document.querySelector("#confPass");
	var dni = document.querySelector("#dni");
	var sex = document.querySelector("#inputSex");
	var userData = {};
	var isTermValid = false;
	var notif = document.querySelector("#lblNotif");

	var validacion = function (e) {
		console.log(name.value, lastName.value, email.value, password.value, confPass.value, dni.value, sex.value)
		if (name.value != "" && lastName.value != "" && email.value != "" && password.value != "" && confPass.value != "" && dni.value != "" && sex.value != "") {
			return true;
		} else {
			return false;
		}
	}

	btnNewUser.addEventListener("click", function (e) {
		e.preventDefault();
		if (validacion() === true) {
			console.log("todo ok la validacion");
			userData.name = (name.value).toUpperCase();
			userData.lastName = (lastName.value).toUpperCase();
			userData.email = email.value;
			userData.password = password.value;
			userData.dni = dni.value;
			userData.sexo = sex.value;
			userData.isAlumno = true;
			userData.curso = '5C';
			userData.materiaGda = [];
			userData.materiaLab = [];
			userData.materiaSor = [];
			userData.materiaBd = [];
			console.log(userData)
			if (inputPass.value === inputConfPas.value) {
				$.ajax({
					data: { user: JSON.stringify(userData) },
					url: '/register',
					type: 'POST',
					success: function (response) {
						if (response.status === 200	) {
							sessionStorage.setItem("user", JSON.stringify(userData))
							sessionStorage.setItem("isNewUser", true)
							window.location.assign("/home");
						} else {
							notif.innerHTML = "UPS! Alguien con ese mismo email, ya se registró antes.";
							document.querySelector("#email").focus();
						}
					}
				})
			} else {
				notif.innerHTML = "UPS! Las contraseñas no coinciden, va de nuevo.";
				inputPass.value = "";
				inputConfPas.value = "";
			}
		} else {
			notif.innerHTML = "Te olvidas de completar tus datos!";
		}
	});

	terms.addEventListener("change", function (e) {
		isTermValid = e.target.checked;
		btnNewUser.disabled = !isTermValid;
	});

	btnBack.addEventListener("click", function (e) {
		window.location.assign("/");
	});

})();
