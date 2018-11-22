( function () {
    var user = JSON.parse(sessionStorage.getItem("user"));
    var inputName = document.querySelector("#name");
    var inputApellido = document.querySelector("#lastName");
    var inputEmail = document.querySelector("#email");
    var inputDni = document.querySelector("#dni");

    inputName.disabled = true;
    inputApellido.disabled = true;
    inputEmail.disabled = true;
    inputDni.disabled = true;

    inputApellido.value = user.lastName;
    inputName.value = user.name;
    inputDni.value = user.dni;
    inputEmail.value = user.email;

    if (user.isAlumno === false) {
        
    }

})()
