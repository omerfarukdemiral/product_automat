<?php 

$port = 1234;
$message = "";
//g++ tcpdeneme.cpp -o tcpdeneme -std=c++11
error_reporting(0);
session_start();
function Send_TCP_Messages($message)
{
    $fp = fsockopen("127.0.0.1", 32768, $errno, $errstr, 30);
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
         
  $Data=$_POST['deger'];
  Send_TCP_Messages($Data);
}
         
?>
