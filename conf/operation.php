<?php

 
function getMacAddress(){
exec("sudo /sbin/ifconfig eth0 | grep HWaddr", $Mac);
$MacAddress=str_replace(':','',$Mac);
	
$MacAdd =$MacAddress[0];
$MacAdd =explode(' ', $MacAdd);
$MacAddress = strtoupper($MacAdd[10]);
return $MacAddress;
}

function GetInterfacesAddress(){

		$dosyaismi="/etc/network/interfaces";
        $okunan=file($dosyaismi);
        $dosya= fopen($dosyaismi, 'r');
		$Ip_Address="";
		
		foreach($okunan as $sira => $satir)
        {
		 
			
			  if(strstr($satir, "address")) {
			 
			 $satir = explode(' ', $satir);
			 $IP_Address=$satir[1];
			 
            
			 }
			  
		}
		
	   
	   return $IP_Address;
}

function CheckInterfaces(){

        $dosyaismi="/etc/network/interfaces";
        $okunan=file($dosyaismi);
		$dosya= fopen('/etc/network/interfaces', 'r');	
		$durum=false;
		foreach($okunan as $sira => $satir)
		{
		   if(strstr($satir, "static") && strstr($satir, "#iface")) {    
					$durum=true;  				  
               }       
        }
	fclose($dosya);
	return $durum;

}
  
function SetInterfacesStatic($Address, $Gateway, $SubnetMask){

		$dosyaismi="/etc/network/interfaces";
        $okunan=file($dosyaismi);
        $checked= CheckInterfaces();
        $dosya= fopen($dosyaismi, 'w');
	    var_dump($checked); 	
		
		if($checked==true)
		{
		foreach($okunan as $sira => $satir)
        {
		   if(strstr($satir, "dhcp")) {
			   
			$satir = explode(' ', $satir);
			$replaced = array_search('iface', $satir);
			$satir[$replaced] = '#iface';
			$satir=implode(" ",$satir);
			$okunan[$sira]=$satir;
			}
			 if(strstr($satir, "static")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('iface', $satir);
			 $satir[$replaced] = 'iface';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
			  if(strstr($satir, "address")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('address', $satir);
			 $satir[$replaced+1] = $Address;
			 $satir[$replaced] = 'address';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir."\n";
            
			 }
			  if(strstr($satir, "netmask")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('netmask', $satir);
			 $satir[$replaced+1] = $SubnetMask;
			 $satir[$replaced] = 'netmask';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir."\n";
			 }
			  if(strstr($satir, "gateway")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('gateway', $satir);
			 $satir[$replaced+1] = $Gateway;
			 $satir[$replaced] = 'gateway';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir."\n";
			 }
		}
		}
	   
	   foreach ($okunan as $line_num => $line) {
		   $value="$line";
		$blah = fwrite($dosya,$value);
		}
		fclose($dosya);
}

function UpdateInterfacesStatic($Address, $Gateway, $SubnetMask){

		$dosyaismi="/etc/network/interfaces";
        $okunan=file($dosyaismi);
        $dosya= fopen($dosyaismi, 'w');
		
		
		foreach($okunan as $sira => $satir)
        {
		   if(strstr($satir, "dhcp")) {
			   
			$satir = explode(' ', $satir);
			$replaced = array_search('iface', $satir);
			$satir[$replaced] = '#iface';
			$satir=implode(" ",$satir);
			$okunan[$sira]=$satir;
			}
			 if(strstr($satir, "static")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('iface', $satir);
			 $satir[$replaced] = 'iface';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
			  if(strstr($satir, "address")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('address', $satir);
			 $satir[$replaced+1] = $Address;
			 $satir[$replaced] = 'address';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir."\n";
            
			 }
			  if(strstr($satir, "netmask")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('netmask', $satir);
			 $satir[$replaced+1] = $SubnetMask;
			 $satir[$replaced] = 'netmask';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir."\n";
			 }
			  if(strstr($satir, "gateway")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('gateway', $satir);
			 $satir[$replaced+1] = $Gateway;
			 $satir[$replaced] = 'gateway';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir."\n";
			 }
		}
		
	   
	   foreach ($okunan as $line_num => $line) {
		   $value="$line";
		$blah = fwrite($dosya,$value);
		}
		fclose($dosya);
}

function SetInterfacesDHCP() {

       $dosyaismi="/etc/network/interfaces";
        $okunan=file($dosyaismi);
        $checked= CheckInterfaces();
	    var_dump($checked); 	
		$dosya= fopen($dosyaismi, 'w');
		if($checked==false)
		{
		foreach($okunan as $sira => $satir)
        {
		   if(strstr($satir, "dhcp") && strstr($satir, "eth0")) {
			   
			$satir = explode(' ', $satir);
			$satir[0] = 'iface';
			$satir=implode(" ",$satir);
			$okunan[$sira]=$satir;
			}
			 if(strstr($satir, "static")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('iface', $satir);
			 $satir[$replaced] = '#iface';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
			  if(strstr($satir, "address")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('address', $satir);
			 $satir[$replaced] = '#address';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
			  if(strstr($satir, "netmask")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('netmask', $satir);
			 $satir[$replaced] = '#netmask';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
			  if(strstr($satir, "gateway")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('gateway', $satir);
			 $satir[$replaced] = '#gateway';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
		}
		}
	   
	   foreach ($okunan as $line_num => $line) {
		   $value="$line";
		$blah = fwrite($dosya,$value);
		}
		fclose($dosya);
}

function GetInterfacesStatic() {
    	$dosyaismi="/etc/network/interfaces";
        $okunan=file($dosyaismi);
	  //  var_dump($checked); 	
		$dosya= fopen($dosyaismi, 'r');
		
		foreach($okunan as $sira => $satir)
        {
		  
			 if(strstr($satir, "static")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('iface', $satir);
			 $satir[$replaced] = '#iface';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
			  if(strstr($satir, "address")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('address', $satir);
			 $satir[$replaced] = '#address';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
			  if(strstr($satir, "netmask")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('netmask', $satir);
			 $satir[$replaced] = '#netmask';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
			  if(strstr($satir, "gateway")) {
			 
			 $satir = explode(' ', $satir);
			 $replaced = array_search('gateway', $satir);
			 $satir[$replaced] = '#gateway';
			 $satir=implode(" ",$satir);
			 $okunan[$sira]=$satir;
			 }
		}
}


    

function setAddress()
{
	$output = shell_exec('reboot');
	echo "<pre>$output</pre>";
	
}

    if($_GET['islem']=="controller_update" && !empty($_GET['islem']=="controller_update")){
         
          $JSON_Data=$_POST['deger'];
          $data=json_decode($JSON_Data);
          $IP_type = $data->IP_type;
        if($IP_type=='static'){
          $ID =$data->ID;
          $Local_IP =$data->Local_IP;
          $Controller_Gateway = $data->Controller_Gateway;
          $Controller_SubnetMask = $data->Controller_SubnetMask;
          $App_Port = $data->App_Port;
          $App_URL = $data->App_URL;
          $App_Username = $data->App_Username;
          $App_Password = $data->App_Password;
          $Controller_Status = $data->Controller_Status;
       	  $MacAddress = getMacAddress();
         
         $newURL =$Local_IP;
        // $query = "UPDATE Controller set Local_IP='$Local_IP', MacAddress='$MacAddress',ERP_PortNo='$App_Port', Status='$Controller_Status', ApplicationURL='$App_URL',ApplicationUserName='$App_Username', ApplicationUserPassword='$App_Password'  WHERE ID=$ID";

	       var_dump($Local_IP);
		              
              UpdateInterfacesStatic($Local_IP,$Controller_Gateway,$Controller_SubnetMask);
			 // setAddress(); 
			  //echo "Update Tamamlandı...";
		  
     }
        else
        {        
          $ID =$data->ID;
          $Local_IP =$data->Local_IP;
          $App_Port = $data->App_Port;
          $App_URL = $data->App_URL;
		   $App_Username = $data->App_Username;
          $App_Password = $data->App_Password;
          $Controller_Status = $data->Controller_Status;
          $MacAddress = getMacAddress();
                   
           
            SetInterfacesDHCP();
           	 echo "Güncelleme Tamamlandı.";
        
         
        }  
}


if($_GET['islem']=="datetime_set" && !empty($_GET['islem']=="datetime_set")){
         
	$JSON_Data=$_POST['deger'];
	$data=json_decode($JSON_Data);
	$setDateValue = $data->setDateValue;
	//echo $setDateValue;
	$setTimeValue =$data->setTimeValue;
	$setDates = explode("-",$setDateValue);
	$dateValue = $setDates[2]."/".$setDates[1]."/".$setDates[0];
	//echo $dateValue;
	$commandLine = 'sudo date -s "'.$dateValue.' '.$setTimeValue.'"';
	echo $commandLine;
	shell_exec($commandLine);
	shell_exec("sudo hwclock -w");
	//echo shell_exec("sudo hwclock --show");


  } 
   
?>