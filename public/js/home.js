( function () {
    document.querySelector("#apellido").innerHTML = JSON.parse(localStorage.getItem("lastName"));
    document.querySelector("#nombre").innerHTML = JSON.parse(localStorage.getItem("name"));
    document.querySelector("#dni").innerHTML += " "+ JSON.parse(localStorage.getItem("dni"));

    var btnLogout = document.querySelector("#logout");
    btnLogout.addEventListener("click", function (e) {
        window.location.assign("/");
    })
})()
