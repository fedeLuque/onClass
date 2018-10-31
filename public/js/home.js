( function () {
    document.querySelector("#apellido").innerHTML = JSON.parse(localStorage.getItem("lastName"));
    document.querySelector("#nombre").innerHTML = JSON.parse(localStorage.getItem("name"));
    document.querySelector("#dni").innerHTML += " "+ JSON.parse(localStorage.getItem("dni"));
    
})()
