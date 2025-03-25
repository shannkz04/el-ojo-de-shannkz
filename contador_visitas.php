<?php
$archivo = "visitas.txt";

// Leer visitas actuales
$visitas = file_exists($archivo) ? (int) file_get_contents($archivo) : 0;

// Incrementar contador
$visitas++;
file_put_contents($archivo, $visitas);

// Devolver el número de visitas
echo $visitas;
?>
