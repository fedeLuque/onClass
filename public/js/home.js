( function () {
    document.querySelector("#apellido").innerHTML = JSON.parse(sessionStorage.getItem("lastName"));
    document.querySelector("#nombre").innerHTML = JSON.parse(sessionStorage.getItem("name"));
    document.querySelector("#dni").innerHTML += " "+ JSON.parse(sessionStorage.getItem("dni"));

    var btnLogout = document.querySelector("#logout");
    btnLogout.addEventListener("click", function (e) {
        window.location.assign("/");
    })
})()
