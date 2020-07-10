 
 <?php
 include_once "../layout/functions.php";
 session_start();
 if(!$db)
{
	echo $db->lastErrorMsg();
}
error_reporting(0);
function get_CardName($status){
    $stat ="";
    
    if($status==1)
    {	
        $stat="Aktif"; 
        }	
    else{
        $stat="Pasif";
    }

    return $stat;
    }

    function get_CardType($type){
        $stat ="";
        
        if($type==1)
        {	
            $stat="Master"; 
        }	
        else{
            $stat="Slave";
        }
    
        return $stat;
        }
    
    
$query_sales = "SELECT * FROM Cards Where Status !=2 ";
$ret = $db->query($query_sales);
$count = 1;
while ($card_row = $ret->fetchArray(SQLITE3_ASSOC))
{      
    $Status =get_CardName($card_row['Status']);
    $CardType =get_CardType($card_row['count']);
    $new_row = array('ID' =>"$count", 'Status' =>"$Status" ,'CardType' =>"$CardType");
    $row = array_replace($card_row, $new_row);
    $rows[] = $row;
    $count = $count+1;
}
$data1 =json_encode($rows);

if($_GET['islem']=="getData" && !empty($_GET['islem']=="getData")){
    
if($data1!="null")
{
    $yazdir ="\"data\"";
    echo "{".$yazdir.":".$data1."}";
}

}
if($_GET['islem']=="getCount" && !empty($_GET['islem']=="getCount")){
         
    $query_sales2 = "SELECT Count(*) FROM Cards Where CardType=1";
    $query_sales3 = "SELECT Count(*) FROM Cards Where CardType=0";

    $countMaster = $db->querySingle($query_sales2);
    $countSlave = $db->querySingle($query_sales3);

    if($countMaster<6 && $countSlave<21)
    {
        echo "true";
    }
    else
    {
        echo "false"; 
    }

  }
?>
