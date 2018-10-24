( function () {
	var login = function (e) {
		var inputEmail = document.querySelector("#email");
		
		var inputPassword = document.querySelector("#password");
		console.log(inputPassword.value);
		var btnLogin = document.querySelector("#btnLogin");
		var back = document	.querySelector("#back");
		var register = document.querySelector("#register");

		back.addEventListener("click", function (e) {
			window.location.assign("/");
		});

		register.addEventListener("click", function	(e) {
			window.location.assign("/register");	
		});

		var validar = function (e) {
			if (inputEmail.value != "" & inputPassword.value != "") {
				return true;
			} else return false;
		}

		btnLogin.addEventListener("click", function(e) {
			e.preventDefault();
			if (validar()) {
				console.log("la validacion salio ok");
			} else {
				console.log("La validacion salio mal");
			}
			

		});
	}
	document.addEventListener("DOMContentLoaded", login);
}) ();