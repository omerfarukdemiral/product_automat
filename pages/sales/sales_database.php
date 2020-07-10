 
 <?php
 include_once "../layout/functions.php";
 session_start();

 if(!$db)
{
	echo $db->lastErrorMsg();
}

function getTransferred($ID){
    $stat ="";
    
    if($ID==1)
    {	
        $stat="Online"; 
        }	
    else{
        $stat="Offline";
            }
    return $stat;
    }
function getSaleTime($time){

    $times = explode(":",$time);

    $newTime = $times[0].":".$times[1].":".$times[2];

    return $newTime;
}

function get_Volume_Values($value,$dot)
{
    $splitter = strlen($value) - $dot;
  //  echo $splitter;
    $newValue = substr_replace($value,".",$splitter,0);
    $newValue = (float)$newValue;
    return $newValue;
}

$query_sales = "SELECT Sales.SaleID, Sales.SaleDate,Sales.SaleTime, Cell.ShelfNo, Cell.ProductBarcode, Product.ProductName,Product.ProductPrice FROM SALES INNER JOIN Cell on SALES.ShelfNo=Cell.ShelfNo INNER JOIN Product on Product.ProductBarcode = Cell.ProductBarcode ";

//$query_sales= "SELECT * From SALES";
//$query_sales2 = "SELECT * From SALES2";
   
$ret = $db->query($query_sales);


while ($sale_row = $ret->fetchArray(SQLITE3_ASSOC))
{       
    $sale_time =getSaleTime($sale_row['SaleTime']);
    $new_row = array('SaleTime' =>"$sale_time");
    $row = array_replace($sale_row, $new_row);

    $rows[] = $row;
}



$data1 =json_encode($rows);
if($data1!="null")
{

    $yazdir ="\"data\"";
    
    echo "{".$yazdir.":".$data1."}";
}
?>
