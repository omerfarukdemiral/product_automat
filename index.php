<?php
session_start();
echo $_SESSION["login"];

if($_SESSION["login"]=='true'){
  header("Location: pages/login/login.php");
}
else{
  echo  $_SESSION["login"];
	
	echo "Kullanıcı Girişi yapınız.";
	header('Location: ../../pages/login/login.php');  
}
?>