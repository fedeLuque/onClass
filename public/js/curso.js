(function () {
    var user = JSON.parse(sessionStorage.getItem("user"));
    var inputName = document.querySelector("#name");
    var inputApellido = document.querySelector("#lastName");
    var email = document.querySelector("#userEmail");
    var inputMateria = document.querySelector("#nameMateria");
    var txtMssProfe = document.querySelector("#txtMje");
    var btnSendFile = document.querySelector("#btnEnviar");
    var nameFile = document.querySelector("#inputFileSend");
    var notif = document.querySelector("#lblNotif");
    var fileTp = {};
    var idFile = 0;
    var fecha = new Date();

    inputName.disabled = true;
    inputApellido.disabled = true;
    inputMateria.disabled = true;
    

    inputApellido.value = user.lastName;
    inputName.value = user.name;
    email.textContent = user.email;
    var cargarTabla = function (arrayTps) {
        var tbody = $('#tbody');

        tbody.html("");
        arrayTps.forEach(file => {
            tbody.append(` 
                        <tr>
                            <th scope="row"> ` + file.id + `</td>
                            <td>` + file.nombreArchivo + `</td>
                            <td>` + file.fecha + ` </td>
                            <td>` + file.estado + `</td>
                        </tr>
                    `)
        })
    }

    //cargamos el ultimo mje del profe
    $.ajax({
        url: '/verMjesAlumno',
        data: { materia: window.location.pathname.split("/").pop().toString() },
        type: 'POST',
        success: function (arrayMjes) {
            txtMssProfe.innerHTML = arrayMjes[arrayMjes.length-1].fecha + "<br/>" + arrayMjes[arrayMjes.length-1].contenido
            console.log(arrayMjes[arrayMjes.length-1]);
        }
    })

    nameFile.addEventListener("change", function (e) {
        notif.innerHTML = "";
    })

    switch (window.location.pathname.split("/").pop()) {
        case "gda":
            inputMateria.value = "Gestión de Datos";
            break;
        case "laboratorio":
            inputMateria.value = "Laboratorio de Hardware";
            break;
        case "sor":
            inputMateria.value = "Sistemas y Organizaciones";
            break;
        case "bd":
            inputMateria.value = "Base de Datos";
            break;
    }

    btnSendFile.addEventListener("click", function (e) {
        if (nameFile.value) {
            console.log(nameFile.value)
            fileTp.id = idFile + 1;
            fileTp.nombreArchivo = nameFile.files[0].name;
            fileTp.fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
            fileTp.estado = 'Pendiente';
            fileTp.email = user.email;

            $.ajax({
                url: '/addFile',
                data: { fileTp: fileTp, nameMateria: window.location.pathname.split("/").pop().toString() },
                type: 'POST',
                success: function (arrayTps) {
                    idFile = arrayTps.length;
                    console.log(idFile)
                    console.log(arrayTps)
                    cargarTabla(arrayTps);  
                }
            })
        } else {
            notif.innerHTML = "*Por favor, seleccione un archivo antes de enviar";
        } nameFile.value = "";
    })

    $.ajax({
        url: '/getTable',
        type: 'POST',
        data: { nameMateria: window.location.pathname.split("/").pop().toString(), user: user },
        success: function (arrayTps) {
            idFile = arrayTps.length;
            cargarTabla(arrayTps);
        }
    })
})()