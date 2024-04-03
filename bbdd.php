<?php 

$servername = "localhost";
$username = "usuario";
$password = "contraseña";
$dbname = "mibasededatos";

// Input
$nombre = $_POST["miEmail"]

//consulta SQL
$sql = "INSERT INTO usuarios (email) VALUES ('$email')";

// Conectar a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Ejecutar la consulta
$conn->query($sql);

// Cerrar la conexión
$conn->close(); 

?>