(function () {
    var profe = JSON.parse(sessionStorage.getItem("user"));
    var lastName = document.querySelector("#lastName");
    var name = document.querySelector("#name");
    var nameMateriaSpan = document.querySelector("#nameMateria");
    var userEmail = document.querySelector("#userEmail");
    var salir = document.querySelector("#salir");

    lastName.innerHTML = "Prof. " + profe.lastName + ",";
    name.innerHTML = profe.name;

    userEmail.innerHTML = profe.email;
    nameMateriaUrl = window.location.pathname.split("/").pop();

    salir.addEventListener("click", function (e) {
        sessionStorage.removeItem("user");
    })

    //cargarTPs
    var cargarTps = function (nameMateriaUrl) {
        $.ajax({
            url: '/tpsFind',
            data: { nameMateria: nameMateriaUrl.toString() },
            type: 'POST',
            success: function (arrayTps) {
                console.log(arrayTps)
                if (Object.keys(arrayTps).length === 0) {
                    console.log("no hay tps de ninguno de los alumnos")
                } else {
                    var tbody = $('#tbody');
                    var id = 1;
                    
                    tbody.html("");
                    arrayTps.forEach(file => {
                        tbody.append(` 
                        <tr>
                            <th scope="row"> ` + id + `</td>
                            <td>` + file.nombreArchivo + `</td>
                            <td>` + file.fecha + ` </td>
                            <td>` + file.user + ` </td>
                            <td>` + file.estado + `</td>
                        </tr>
                    `)
                    id+= 1; 
                    })
                }
            }
        })
    }

    switch (nameMateriaUrl) {

        case "gda":
            nameMateriaSpan.innerHTML = "Gestión de Datos";
            cargarTps(nameMateriaUrl);
            break;
        case "laboratorio":
            nameMateriaSpan.innerHTML = "Laboratorio de Hardware";
            cargarTps(nameMateriaUrl);
            break;
        case "sor":
            nameMateriaSpan.innerHTML = "Sistemas y Organizaciones";
            cargarTps(nameMateriaUrl);
            break;
        case "bd":
            nameMateriaSpan.innerHTML = "Base de Datos";
            cargarTps(nameMateriaUrl);
            break;
    }



})()