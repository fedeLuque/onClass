(function () {
	var divPass = document.querySelector("#divPass");
	var divEmail = document.querySelector("#divEmail");
	var title = document.querySelector("#header");
	var inputEmail = document.querySelector("#email");
	var inputPassword = document.querySelector("#password");
	var btnContinuar = document.querySelector("#btnContinuar");
	var btningresar = document.querySelector("#btnIngresar");
	var notifEmail = document.querySelector("#lblNotifEmail");
	var notifPass = document.querySelector("#lblNotifPass");
	var usuario = {};

	inputEmail.addEventListener("change", function (e) {
		notifEmail.innerHTML = "";
	})

	inputPassword.addEventListener("change", function (e) {
		notifPass.innerHTML = "";
	})

	btnContinuar.addEventListener("click", function (e) {
		if (inputEmail.value != "") {
			$.ajax({
				url: '/login',
				data: { userName: inputEmail.value },
				type: 'POST',
				success: function (userBd) {
					if (Object.keys(userBd).length === 0) {
						notifEmail.innerHTML = "*El Email que ingresaste no existe";
						inputEmail.value = "";
						inputEmail.focus();
					} else {
						usuario = userBd;
						divEmail.style.display = "none";
						divPass.style.display = "inline-block";
						title.innerHTML = "Ahora, tu clave";
						console.log("existe el usuario");
					}
				}
			})
		} else {
			notifEmail.innerHTML = "*Te olvidaste de ingresar un Email";
		}

	})

	btningresar.addEventListener("click", function (e) {
		if (inputPassword.value != "") {
			if (usuario.password === inputPassword.value) {
				if (usuario.isAlumno === false) {
					window.location.assign("/homeDocente");
				} else {
					window.location.assign("/home");
				}
				sessionStorage.setItem("user", JSON.stringify(usuario))
			} else {
				notifPass.innerHTML = "* Contraseña Incorrecta";
				inputPassword.value = "";
				inputPassword.focus();
			}
		} else {
			notifPass.innerHTML = "* Te olvidaste de la contraseña!"

		}

	})

})();
