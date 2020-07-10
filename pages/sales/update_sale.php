 
 <?php
 include_once "../layout/functions.php";
 session_start();


 if($_GET['update']=="true" && !empty($_GET['update']=="true")){

        $data=$_POST['deger'];
        $datas = explode(",", $data);
        $ReceiptNo = $datas[0];
        $Status= $datas[1];
	    $result=$db->query("SELECT Count(*) From SALES WHERE RNO=$ReceiptNo");
        $veri = $result->fetchArray();
        echo $ReceiptNo;
        echo "<br>";
        echo $Status;
        echo "<br>";

	if($veri['Count(*)']>0)
	{
        $query_Status = "UPDATE SALES set STATUS='$Status' WHERE RNO='$ReceiptNo'";
        if ($db->exec($query_Status)) 
        { 
        echo "Success SALES1 ";   
        }
    }
    else
    {
        $query_Status = "UPDATE SALES2 set STATUS='$Status' WHERE RNO='$ReceiptNo'";
        if ($db->exec($query_Status)) 
        { 
        echo "Success SALES2 ";   
        }
    }
   }

   ?>
