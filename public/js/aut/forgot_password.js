( function () {
	var forgotPassword = function (e) {
		var btnSend = document.querySelector("#btnSend");
		var btnLogin = document.querySelector("#btnLogin");
		var inputPassword = document.querySelector("#password");
		var forgot = document.querySelector("#forgot");
		var back = document	.querySelector("#back");

		forgot.addEventListener("click", function (e){
			btnLogin.style.display = "none";
			inputPassword.style.display = "none";
			btnSend.style.display = "block";
			back.style.display = "inline-block";
			forgot.style.display = "none";
		});


		btnSend.addEventListener("click", function	(e) {
				alert("se envio la contraseña al mail");
		})
	}
	document.addEventListener("DOMContentLoaded", forgotPassword);
}) ();