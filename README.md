# onClass
<b>Nombre del Proyecto Final:</b> "onClass"

<b>Objetivo:</b><br>
<p>Permitir el intercambio de información, de los alumnos con sus respectivos docentes</p>

<b>Descripción:</b><br>
<p>Integrar todos los conocimientos adquiridos en el curso para realizar una plataforma virtual que permite fortalecer las actividades de intercambio de información, comunicación y administración de recursos entre distintos actores, incentivando la participación activa y creativa en la reestructuración e interpretación de los entornos de información y comunicación por parte de la comunidad educativa de la institución.</p>
<b>Secciones:</b>

* <b>Autentificación</b> 
  + Register
    + name
    + lastName
    + email
    + dni
    + password
    + confPass
    + sex
  + Login
    + user
    + password
  + Forgot password
    + email
  
* <b>Home</b>
  + UserData
    + foto de perfil
    + name
    + lastName
    + email
    + dni
    + curso

* <b>HomeDocente</b>
  + lastName
  + name
  + listado de las materias que el docente tiene a cargo.
  + remitente
  + destinatario
  + mensaje


* <b>Curso</b>
  + enlace a HOME
  + email
  + txtMje: donde tendrá el mensaje que su profesor le deje.
  + user
    + lastName
    + name  
  + nameMateria

* <b>CursoDocente</b>
  + enlace a HOMEDOCENTE
  + email
  + lastName
  + name
  + nameMateria
  + table 
      + id
      + nombre_TP
      + fecha
      + alumno
      + estado
