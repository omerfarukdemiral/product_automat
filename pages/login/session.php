<?php
 include_once "../layout/functions.php";
 session_start();


$_SESSION["login"]="false";

if($_GET['login']=="true" && !empty($_GET['login']=="true")){

  $JSON_Data=$_POST['deger'];
  $data=json_decode($JSON_Data);

  $UserName = $data->UserName;
  $UserPass =$data->UserPass;
  $_SESSION["login"]="true";
  $_SESSION["reboot"]="false";
  $_SESSION["UserID"]=0;
  $_SESSION["UserName"]="";
  $_SESSION["test"]="false";
  $_SESSION["islem"]="false";
  $count = $db->querySingle('SELECT Count(*) From User where UserName="'.$UserName.'" AND UserPass="'.$UserPass.'"');
if($count>0)
{
  $sql_query = 'SELECT * From User where UserName="'.$UserName.'" AND UserPass="'.$UserPass.'"';
  $result = $db->query($sql_query);
  while($row = $result->fetchArray()) {
    $_SESSION["authority"]=$row['Authority'];
    $_SESSION["UserID"]=$row['UserID'];
    $_SESSION["UserName"]=$row['UserName'];
    echo $count;
  }
}
else
{
  echo $count;
}
  
  //$count = $db->querySingle('SELECT Count(*) From User where UserName='.$UserName.' AND UserPass='.$UserPass.'');


 //echo $count['Count(*)'];
 
  
  $db->close();
    }
     

?>
