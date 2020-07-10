<?php 
 include_once "../layout/functions.php";
  $licence="";
  $JSON_Data=$_POST['deger'];
  $data=json_decode($JSON_Data);
  $offlineCount = $data->offlineCount;
  Set_Offline_Day_Count($offlineCount);
  
  $db_LicenceNumber = $db2->querySingle("Select LICENCE FROM SETTINGS LIMIT 1");
//echo $db_LicenceNumber;
function write_licence($licenceNo)
{ 
   exec('netstat -ie', $result);
    if(is_array($result)) {
       $iface = array();
    foreach($result as $key => $line) {
      if($key > 0) {
        $tmp = str_replace(" ", "", substr($line, 0, 10));
        if($tmp <> "") {
          $macpos = strpos($line, "HWaddr");
          if($macpos !== false) {
            $iface[] = array('iface' => $tmp, 'mac' => strtolower(substr($line, $macpos+7, 18)));
          }
        }
      }
    }
      $mac = mb_strtoupper($iface[0]['mac']);
      $licence = hash('sha256', $mac );
      if($licenceNo == $licence  && $licence == Get_licence_number())
      {
      echo "1";
      }
      else
      {
        Set_licence_number($licence);
        $db2->querySingle("INSERT INTO SETTINGS (LICENCE) VALUES ('$licence')");
      }
    } 
    else 
    {
      //echo "notfound";
    }
}
write_licence($db_LicenceNumber);


?>