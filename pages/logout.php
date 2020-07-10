<?php
session_start();
echo "Cikis Yapiliyor...";
$_SESSION["login"]="false";

//ob_start();
session_destroy();
header("Refresh: 1; url=../../pages/login/login.php");
?>