(function () {
    var profe = JSON.parse(sessionStorage.getItem("user"));
    var lastName = document.querySelector("#lastName");
    var name = document.querySelector("#name")
    var fullNameMessage = document.querySelector("#inputRemitente");
    var btnSend = document.querySelector("#btnSend");
    var btnVerMje = document.querySelector("#btnMessageEnviados");
    var arrayMjes = [];
    var boxMateriaBd = document.querySelector("#bd");
    var boxMateriaGda = document.querySelector("#gda");
    var boxMateriaLab = document.querySelector("#lab");
    var boxMateriaSor = document.querySelector("#sor");
    var arrayMaterias = [];
    var materia;
    var listaMateriasCombo = document.querySelector("#listaMaterias");
    var select = document.querySelector("#listaMaterias");
    var selectedOptionValue = null;
    var txtArea = document.querySelector("#areaMessage");
    var comunicado = {};
    var fecha = new Date();
    var lblNotif = document.querySelector("#notificacion");

    boxMateriaGda.style.display = "none";
    boxMateriaLab.style.display = "none";
    boxMateriaGda.style.display = "none";
    boxMateriaSor.style.display = "none";
    lastName.innerHTML = "Prof. " + profe.lastName + ",";
    name.innerHTML = profe.name;

    var firstName = name.innerHTML.split(" ")[0];
    fullNameMessage.value = lastName.innerHTML + " " + firstName;

    //cargar el combo
    var cargarCombo = function (e) {
        for (var i = 0; i < arrayMaterias.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", i + 1);
            option.setAttribute("label", arrayMaterias[i])
            listaMateriasCombo.appendChild(option);
        }
        if (Object.keys(arrayMaterias).length === 0) {
            console.log("arrayMaterias esta vacio")
        } else {
            var option = document.createElement("option");
            option.setAttribute("value", arrayMaterias.length + 1);
            option.setAttribute("label", "Todos mis cursos")
            listaMateriasCombo.appendChild(option);
        }
    }

    //cargarMaterias
    for (var i = 0; i < profe.materias.length; i++) {
        switch (profe.materias[i].name) {
            case "gda":
                boxMateriaGda.style.display = "inline-block";
                arrayMaterias.push("Gestión de Datos");
                break;
            case "laboratorio":
                boxMateriaLab.style.display = "inline-block";
                arrayMaterias.push("Lab. Hardware");
                break;
            case "sor":
                boxMateriaSor.style.display = "inline-block";
                arrayMaterias.push("Sist. y Org.");
                break;
            case "bd":
                boxMateriaBd.style.display = "inline-block";
                arrayMaterias.push("Base de Datos");
                break;
        }
    }

    cargarCombo();
    select.addEventListener('change', function (e) {
        selectedOptionValue = this.options[select.selectedIndex].value;
        lblNotif.innerHTML = "";
    });

    txtArea.addEventListener("focus", function (e) {
        lblNotif.innerHTML = "";
    })

    btnVerMje.addEventListener("click", function (e) {
        console.log(selectedOptionValue)
        //supongamos que acabo de mandar un mensaje y tengo el array de mensajes en el sessionStorage
        if (Object.keys(arrayMjes).length === 0) {
            if (selectedOptionValue != null) {
                materia = arrayMaterias[selectedOptionValue - 1];
                $.ajax({
                    url: '/verMjes',
                    data: { profe: profe, materia: materia },
                    type: 'POST',
                    success: function (arrayMjes) {
                        sessionStorage.setItem("arrayMjes", JSON.stringify(arrayMjes));
                        window.location.assign("/messages");
                    }
                })
            } else {
                lblNotif.innerHTML = "Selecioná una materia, al menos!";
            }
        } else {
                //irme a otro html para mostrar una tabla con ese array
                console.log(arrayMjes)
                sessionStorage.setItem("arrayMjes", JSON.stringify(arrayMjes));
                window.location.assign("/messages");
            }
        })

    btnSend.addEventListener("click", function (e) {
        if (selectedOptionValue != null) {
            if (txtArea.value != "") {
                comunicado.remitente = profe.email;
                comunicado.destinatario = arrayMaterias[selectedOptionValue - 1];
                comunicado.mensaje = txtArea.value;
                comunicado.fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
                sessionStorage.setItem("destinatario", JSON.stringify(comunicado.destinatario));
                $.ajax({
                    url: '/sendFile',
                    data: { comunicado: comunicado },
                    type: 'POST',
                    success: function (arrayMessage) {
                        arrayMjes = arrayMessage;
                        lblNotif.innerHTML = "¡Tu mensaje se envió con exito!";
                        txtArea.value = "";
                        listaMateriasCombo.value = "0"; // pone el valor por defecto en el combo
                    }
                })
            } else {
                lblNotif.innerHTML = "Te olvidás el mensaje, profe!";
            }
        } else {
            lblNotif.innerHTML = "Selecioná una materia, al menos!"
        }
    })
})();