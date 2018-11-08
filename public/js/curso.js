(function () {
    document.querySelector("#apellido").innerHTML = JSON.parse(sessionStorage.getItem("lastName"));
    document.querySelector("#nombre").innerHTML = JSON.parse(sessionStorage.getItem("name"));
    document.querySelector("#dni").innerHTML += " " + JSON.parse(sessionStorage.getItem("dni"));
    
    var materiaPath = window.location.pathname.split("/").pop();
    var btnSendFile = document.querySelector("#sendFile");
    var fileContainer = document.querySelector("#inputFileSend");
    var notif = document.querySelector("#notificacion");
    var nameFile = document.querySelector("#inputFileSend");
    var fileTp = {};
    var fecha = new Date();
    var id = 0;

    var cargarTabla = function (materia) {
        document.querySelector("#materia").textContent = materia.titulo;
            var tbody = $('#tbody');

            tbody.html("");
            materia.files.forEach(file => {
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

    nameFile.addEventListener("change", function (e) {
        notif.innerHTML = "";
    })

    btnSendFile.addEventListener("click", function(e) {
        
        if(nameFile.value)
        { 
            
            fileTp.id = id + 1;
            fileTp.nombreArchivo = nameFile.files[0].name;
            fileTp.fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
            fileTp.estado = 'Pendiente';
            fileTp.dniAlumno = sessionStorage.getItem("dni");
            
            $.ajax ({
                url: '/addFile',
                data: {fileTp: fileTp, materia: materiaPath.toString()},
                type: 'POST',
                success: function (materia) {
                    id = materia.files.length;
                    cargarTabla(materia);
                }
            })
        }
        else {
            notif.innerHTML = "*Por favor, seleccione un archivo antes de enviar";
            console.log(notif);
        }
    })
  
    
    $.ajax({
        url: '/getInfo',
        type: 'POST',
        data: {materia: materiaPath.toString(), dni: JSON.parse(sessionStorage.getItem("dni"))},
        success: function (materia) {
            if(materia) {
                console.log(materia)
                // id = materia.files.length;
                id= '6';
                cargarTabla(materia);
            }
          
        }
    })
    
})()