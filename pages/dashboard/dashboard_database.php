<?php
 include_once "../layout/functions.php";

$query_cells ="SELECT Cell.ShelfNo , Cell.Address, Cell.Status , Cell.ProductBarcode, Cell.WorkingTotal, ErrorCodes.ErrorDescription From Cell INNER JOIN ErrorCodes on Cell.Status = ErrorCodes.ErrorCode Where Cell.ShelfNo >0 ORDER BY Cell.ShelfNo ASC ";
 
    $ret = $db->query($query_cells);
    $rows ="";
    while ($row = $ret->fetchArray(SQLITE3_ASSOC))
    { 
    if($row["ProductBarcode"]=="")
    {
        $info = array('ProductName' =>"Ürün Bulunamadı.",'ProductPrice' =>"0 ");
    }
    else
    {
        $ProductName = $db->querySingle('SELECT ProductName From Product where ProductBarcode="'.$row["ProductBarcode"].'"');
        $ProductPrice = $db->querySingle('SELECT ProductPrice From Product where ProductBarcode="'.$row["ProductBarcode"].'"');

        $info = array('ProductName' =>$ProductName,'ProductPrice' =>$ProductPrice);
    }
    $new_row = array_replace($row, $info);
        $rows[] = $new_row;
    }
    $data1 =json_encode($rows);
if($data1!="null")
{

    $yazdir ="\"data\"";
    
    echo "{".$yazdir.":".$data1."}";
}

?>