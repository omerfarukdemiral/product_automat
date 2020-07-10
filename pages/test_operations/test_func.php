<?php 
 include_once "../layout/functions.php";

$port = 1234;
$message = "";
//g++ tcpdeneme.cpp -o tcpdeneme -std=c++11
error_reporting(0);
function Send_TCP_Messages($message)
{
    $fp = fsockopen("127.0.0.1", 1234, $errno, $errstr, 30);
    if (!$fp) {
        echo "TCP Bağlantı Hatası.  Lütfen Bağlantınızı Kontrol Edin.<br />\n";
    } else {
        fwrite($fp, $message);
        while (!feof($fp)) {
            echo fgets($fp,128);
        }
        fclose($fp);
    }
}

/* Global işlemlerin parametreler ile Send_TCP_Messages fonksiyonuna gönderilmesi .*/ 
if($_GET['islem']=="operations" && !empty($_GET['islem']=="operations")){
         
  $JSON_Data=$_POST['deger'];
  //echo $JSON_Data;
  $_SESSION["islem"]="true";

  $data=json_decode($JSON_Data);


  Send_TCP_Messages($JSON_Data);
  $_SESSION["islem"]="false";
}
         


/* Hücre ile ilgili işlemlerin parametreler ile Send_TCP_Messages fonksiyonuna gönderilmesi .*/ 

if($_GET['islem']=="operations_cell" && !empty($_GET['islem']=="operations_cell")){
         
    $JSON_Data=$_POST['deger'];
    //echo $JSON_Data;
    $_SESSION["islem"]="true";
    Send_TCP_Messages($JSON_Data);  
    $_SESSION["islem"]="false";
}



if($_GET['islem']=="test_db_process" && !empty($_GET['islem']=="test_db_process")){
    
    session_start();
    $JSON_Data=$_POST['deger'];
    $data=json_decode($JSON_Data);
    $TestMode= $data->TestMode;
    $UserID = $_SESSION["UserID"];
    //echo "UserID : " .$UserID;

    $query = "UPDATE Test set TestStatus='$TestMode', TestUserID='$UserID' WHERE ID=1";
    if ($db->exec($query)) 
    {        
        if($TestMode ==1)
        {   
            $_SESSION["TestMode"]="true";
        }
        else
        {        
            $_SESSION["TestMode"]="false";
        }
       // echo $query;
        echo "1";
    }
    else//ekleme hata
        { 
            echo "0";  
        }   

    $db->close();

}


if($_GET['islem']=="test_mode" && !empty($_GET['islem']=="test_mode")){

    $Status = "1";
   /* $fp = fsockopen("127.0.0.1", 1234, $errno, $errstr, 30);
    if (!$fp) {
      $Status ="0";
    } else {
      $Status ="1";
        fclose($fp);
    }*/

    if($Status =="1")
    {   $TestStatus = $db->querySingle("Select TestStatus From Test WHERE ID=1");
        echo $TestStatus;
    }
    else
    {
        echo $Status;
    }
}
?>
