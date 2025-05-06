<?php
//Scrip de coneccion a mysql

$servidor = "localhost";
$usuario = "root";
$pass = "root";
$bd = "mcstore";

//linea de coneccion de bd
$conexion = new mysqli( $servidor, $usuario, $pass, $bd);

if($conexion->connect_error){
    die("Error de conexion: ". $conexion->connect_error);
}
?>