<?php
$ip = $_SERVER['REMOTE_ADDR'];

// Abre un archivo en modo de escritura al final del archivo
$archivo = fopen("ips.txt", "a");

// Escribe la IP y la fecha en el archivo
fwrite($archivo, "IP: " . $ip . " - Fecha: " . date("Y-m-d H:i:s") . "\n");

// Cierra el archivo
fclose($archivo);

echo "IP guardada correctamente: " . $ip;
?>
