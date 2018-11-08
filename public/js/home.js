( function () {
    var user = JSON.parse(sessionStorage.getItem("user"));
    document.querySelector("#apellido").innerHTML = user.lastName;
    document.querySelector("#nombre").innerHTML = user.name;
    document.querySelector("#dni").innerHTML += " "+ user.dni;

    var btnLogout = document.querySelector("#logout");
    btnLogout.addEventListener("click", function (e) {
        window.location.assign("/");
    })
})()
