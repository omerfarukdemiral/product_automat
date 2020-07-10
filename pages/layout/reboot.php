<?php 
 session_start();
 $_SESSION["reboot"]="true";

 header("Location: ../../pages/dashboard");

?>

