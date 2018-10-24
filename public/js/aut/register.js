( function () {
	var getUserData = function () {
		var btnNewUser = document.querySelector("#btnNewUser");
		var btnBack = document.querySelector("#btnBack");
		var terms = document.querySelector("#terms");
		var userData = {};
		var isTermValid = false;

		btnNewUser.addEventListener("click", function (e) {
			e.preventDefault();
			userData.firstName = document.querySelector("#firstName").value;
			userData.lastName = document	.querySelector("#lastName").value;
			userData.email = document.querySelector("#email").value;
			userData.pass = document.querySelector("#password").value;
			userData.address = document.querySelector("#addres").value;
			userData.sexo = document.querySelector("#inputSex").value;
			// btnNewUser.disabled = true;
			console.log(userData);
		});
		
		btnBack.addEventListener("click", function (e) {
			window.location.assign("/");
		});

		terms.addEventListener("change", function(e) {
			isTermValid = e.target.checked;
			btnNewUser.disabled = !isTermValid;
		});

	}

	document.addEventListener("DOMContentLoaded", getUserData);
}) ();