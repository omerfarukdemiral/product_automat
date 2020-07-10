<?php 
 include_once "../layout/functions.php";

if($_GET['islem']=="test_mode" && !empty($_GET['islem']=="test_mode")){
    
    $tcpStatus = getStatusTCP();
    if($tcpStatus=0)
    {
        echo "2";
    }
    else {
    
        $TestStatus = $db->querySingle("Select TestStatus From Test WHERE ID=1");
        echo $TestStatus;
    
    }
}



if($_GET['islem']=="card_mode" && !empty($_GET['islem']=="card_mode")){
    
    $tcpStatus = getStatusTCP();
    if($tcpStatus=0)
    {
        echo "2";
    }
    else {
    
        $TestStatus = $db->querySingle("Select CardStatus From CardStatus WHERE ID=1");
        echo $TestStatus;
    
    }
}

?>