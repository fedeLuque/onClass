( function () {
	var getUserData = function () {
		var btnNewUser = document.querySelector("#btnNewUser");
		var btnBack = document.querySelector("#btnBack");
		var terms = document.querySelector("#terms");
		var userData = {};
		var isTermValid = false;

		btnNewUser.addEventListener("click", function (e) {
			e.preventDefault();
			userData.name = (document.querySelector("#name").value).toUpperCase();
			userData.lastName = (document.querySelector("#lastName").value).toUpperCase();
			userData.email = document.querySelector("#email").value;
			userData.password = document.querySelector("#password").value;
			userData.dni = document.querySelector("#dni").value;
			userData.sexo = document.querySelector("#inputSex").value;
			userData.curso = '5C';
			$.ajax ({
				data: {user: JSON.stringify(userData)},
				url: '/register',
				type: 'POST',
				success: function(response) {
					console.log(response)
					localStorage.setItem("user",JSON.stringify(userData))
					localStorage.setItem("name",JSON.stringify(userData.name))
					localStorage.setItem("lastName",JSON.stringify(userData.lastName))
					localStorage.setItem("dni",JSON.stringify(userData.dni))


				}
			});
		window.location.assign("/home");
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