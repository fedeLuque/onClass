(function () {
	var inputPass = document.querySelector("#password");
	var inputConfPas = document.querySelector("#confPass");
	var btnNewUser = document.querySelector("#btnNewUser");
	var btnBack = document.querySelector("#btnBack");
	var terms = document.querySelector("#terms");
	var userData = {};
	var isTermValid = false;
	var notif = document.querySelector("#lblNotif");

	btnNewUser.addEventListener("click", function (e) {
		e.preventDefault();
		userData.name = (document.querySelector("#name").value).toUpperCase();
		userData.lastName = (document.querySelector("#lastName").value).toUpperCase();
		userData.email = document.querySelector("#email").value;
		userData.password = document.querySelector("#password").value;
		userData.dni = document.querySelector("#dni").value;
		userData.sexo = document.querySelector("#inputSex").value;
		userData.curso = '5C';
		var gda = [];
		var lab = [];
		var sor = [];
		var bd = [];
		userData.materiaGd = gda;
		userData.materiaLab = lab;
		userData.materiaSor = sor;
		userData.materiaBd = bd;
		console.log(userData.email)
		if (userData.email != "" && userData.password != "") { //faltan muchas mas validaciones
			if (inputPass.value === inputConfPas.value) {
				$.ajax({
					data: { user: userData },
					url: '/register',
					type: 'POST',
					success: function (alumno) {
						if (Object.keys(alumno).length === 0) {
							sessionStorage.setItem("user", JSON.stringify(userData))
							// window.location.assign("/home");
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
