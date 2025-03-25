<?php
$archivo = "descargas.txt";

// Leer descargas actuales
$descargas = file_exists($archivo) ? (int) file_get_contents($archivo) : 0;

// Incrementar contador
$descargas++;
file_put_contents($archivo, $descargas);

// Devolver el número de descargas
echo $descargas;
?>
