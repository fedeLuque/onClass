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
	var alumnoBD = {};


	btnContinuar.addEventListener("click", function (e) {
		$.ajax({
			url: '/login',
			data: { userName: inputEmail.value },
			type: 'POST',
			success: function (alumno) {
				if (Object.keys(alumno).length === 0) {
					notifEmail.innerHTML = "*El Email que ingresaste no existe";
					inputEmail.value = "";
					inputEmail.focus();
				} else {
					alumnoBD = alumno;
					sessionStorage.setItem("user", JSON.stringify(alumno))
					divEmail.style.display = "none";
					divPass.style.display = "inline-block";
					title.innerHTML = "Ahora, tu clave";
					console.log("entró");
				}
			}
		})
	})

	btningresar.addEventListener("click", function (e) {
		if (alumnoBD.password === inputPassword.value) {
			window.location.assign("/home");
			sessionStorage.setItem("user", JSON.stringify(alumno))
			sessionStorage.setItem("name", JSON.stringify(alumno.name))
			sessionStorage.setItem("lastName", JSON.stringify(alumno.lastName))
			sessionStorage.setItem("dni", JSON.stringify(alumno.dni))
		} else {
			notifPass.innerHTML = "* Contraseña Incorrecta";
			inputPassword.value = "";
			inputPassword.focus();
		}
	})

})();
// 	var login = function (e) {
// 		var divPass = document.querySelector("#divPass");
// 		var inputEmail = document.querySelector("#email");
// 		var inputPassword = document.querySelector("#password");
// 		var btnContinuar= document.querySelector("#btnContinuar");
// 		var back = document.querySelector("#back");
// 		var register = document.querySelector("#register");
// 		var notif = document.querySelector(".notificacion");

// 		back.addEventListener("click", function (e) {
// 			window.location.assign("/");
// 		});

// 		register.addEventListener("click", function (e) {
// 			window.location.assign("/register");
// 		});

// 		btnContinuar.addEventListener("click", function (e) {
// 			divPass.disabled
// 		})

// 		btnLogin.addEventListener("click", function (e) {
// 			$.ajax({
// 				url: '/login',
// 				data: { userName: inputEmail.value },
// 				type: 'POST',
// 				success: function (alumno) {
// 					if (Object.keys(alumno).length === 0) {
// 						notif.innerHTML = "*Email o Password INCORRECTOS, vuelva a intentarlo";
// 						inputEmail.value = "";
// 						inputPassword.value = "";
// 					} else {
// 						if (alumno.password === inputPassword.value) {
// 							window.location.assign("/home");
// 							sessionStorage.setItem("user", JSON.stringify(alumno))
// 							sessionStorage.setItem("name", JSON.stringify(alumno.name))
// 							sessionStorage.setItem("lastName", JSON.stringify(alumno.lastName))
// 							sessionStorage.setItem("dni", JSON.stringify(alumno.dni))
// 						} else {
// 							inputEmail.disabled = true;
// 							inputPassword.value = "";
// 							inputPassword.focus();
// 							notif.innerHTML = "ingrese nuevamente su contraseña";

// 						}

// 					}
// 				}
// 			})
// 		});
// 	}
// 	document.addEventListener("DOMContentLoaded", login);
// })();