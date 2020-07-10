 
 <?php
 include_once "../layout/functions.php";
 session_start();
 if(!$db)
{
	echo $db->lastErrorMsg();
}
    error_reporting(0);
    
    function get_EventName($DescID){
 
        
$db = new MyDB();
$db->busyTimeout(5000);
$db-> exec('PRAGMA journal_mode=wal;');
        $DescInfo = $db->querySingle("Select Info From EventDescription WHERE ID=$DescID");
           
        if($DescInfo =='')
            {
                $DescInfo="asdasds";
                return $DescInfo;     
            }
            else{
               
                return $DescInfo;     
            }
       
    }

        $query_sales = "SELECT * FROM Event";
        $ret = $db->query($query_sales);
        while ($event_row = $ret->fetchArray(SQLITE3_ASSOC))
        {      
           $EventDescriptionInfo=get_EventName($event_row['EventDescriptionID']);
           $new_row = array('EventDescriptionID' =>"$EventDescriptionInfo");
           $row = array_replace($event_row, $new_row);
            $rows[] = $row;
        }

        $data1 =json_encode($rows);
        $yazdir ="\"data\"";
        echo "{".$yazdir.":".$data1."}";


?>
