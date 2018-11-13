(function () {
    var profe = JSON.parse(sessionStorage.getItem("user"));
    var messages = JSON.parse(sessionStorage.getItem("arrayMjes"));
    var destinatario = JSON.parse(sessionStorage.getItem("destinatario"));

    var tbody = $('#tbody');
    var userEmail = document.querySelector("#userEmail");
    var id = 1;

    userEmail.innerHTML = profe.email;
    document.querySelector("#message").innerHTML += destinatario;
    //cargo la tabla con los mensajes
    tbody.html("");
    messages.forEach(file => {
        tbody.append(` 
                    <tr>
                        <th scope="row"> ` + id + `</td>
                        <td>` + file.fecha + `</td>
                        <td>` + file.contenido + ` </td>
                    </tr>
                    `)
        id = id + 1;
    })

})()