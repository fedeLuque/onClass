( function () {
	var btnIngresar = document.querySelector("#btnIngresar");
	var notifPass = document.querySelector("#lblNotifPass");
	var inputPassword = document.querySelector("#password");
	var user = JSON.parse(sessionStorage.getItem("user"));

	btnIngresar.addEventListener("click", function (e) {
		if(user.password === inputPassword.value) {
			window.location.assign("/home");
			// sessionStorage.setItem("name", JSON.stringify(alumno.name))
			// sessionStorage.setItem("lastName", JSON.stringify(alumno.lastName))
			// sessionStorage.setItem("dni", JSON.stringify(alumno.dni))
		} else {
			notifPass.innerHTML = "* Contraseña Incorrecta";
			inputPassword.value = "";
			inputPassword.focus();
		
		}
	})

}) ();
// 	var forgotPassword = function (e) {
// 		var btnSend = document.querySelector("#btnSend");
// 		var btnLogin = document.querySelector("#btnLogin");
// 		var inputPassword = document.querySelector("#password");
// 		var forgot = document.querySelector("#forgot");
// 		var back = document	.querySelector("#back");

// 		forgot.addEventListener("click", function (e){
// 			btnLogin.style.display = "none";
// 			inputPassword.style.display = "none";
// 			btnSend.style.display = "block";
// 			back.style.display = "inline-block";
// 			forgot.style.display = "none";
// 		});


// 		btnSend.addEventListener("click", function	(e) {
// 				alert("se envio la contraseña al mail");
// 		})
// 	}
// 	document.addEventListener("DOMContentLoaded", forgotPassword);
// }) ();