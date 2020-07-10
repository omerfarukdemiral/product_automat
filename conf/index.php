<?php 

error_reporting(0);

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



function isStaticIP() {

        $dosyaismi="/etc/network/interfaces";
        $okunan=file($dosyaismi);
		$dosya= fopen('/etc/network/interfaces', 'r');	
		$durum=false;
		foreach($okunan as $sira => $satir)
		{
		   if(strstr($satir, "#iface") && strstr($satir, "eth0") && strstr($satir, "inet") && strstr($satir, "dhcp")) {    
					$durum=true;  				  
               }       
        }
    
        
	   fclose($dosya);
	   return $durum;

}


if( isset($_POST['submit_data']) ){

	$ID = isset($_POST['ID']);    
    $Local_IP =$_POST['Local_IP'];
    $App_Port = $_POST['ERP_PortNo'];
    $App_URL = $_POST[''];
    $Controller_Status = $_POST['Status'];
    $MacAddress =$_POST['MacAddress'];
    $Version = $_POST['Version'];
  
    
	// Makes query with post data
	//$query = "UPDATE Controller set Local_IP='$Local_IP', MacAddress='$MacAddress',ERP_PortNo='$App_Port'  WHERE ID=$ID";
	
	
	if( $db->exec($query) ){
		$message = $dil["ControllerUpdate"];
	}else{
		$message = $dil["Error"];
	}
}


//please another address
$dosyaismi="/etc/network/interfaces";
$IP_type=isStaticIP();
$interfaces[0]="";
$interfaces[1]="";
$interfaces[2]="";

$ipAddress=$_SERVER['REMOTE_ADDR'];
$arp='arp -a $ipAddress';
$output = shell_exec($arp);

$mac = shell_exec("ifconfig -a | grep -Po 'HWaddr \K.*$'");
$Mac = explode(" ",$mac);
$dates = shell_exec('date +"%Y-%m-%d"');
$times = shell_exec('date +"%H:%M"');
$date= str_replace("\n", "",$dates);
$time= str_replace("\n", "",$times);
$MacAddress = $Mac[0];

if($IP_type==true)
{
        $okunan=file($dosyaismi);
		$dosya= fopen('/etc/network/interfaces', 'r');	
		
		foreach($okunan as $satir)
		{
		 	if(strstr($satir, "address")) {
			 $satir = explode(' ', $satir);
			 $interfaces[0]=$satir[1];
			 }
			if(strstr($satir, "netmask")) {
			 $satir = explode(' ', $satir);
			 $interfaces[1]=$satir[1];
			 }
            
            if(strstr($satir, "gateway")) {
			 $satir = explode(' ', $satir);
			 $interfaces[2]=$satir[1];
			 }      
        }
}


?>
<!doctype html>
<html lang="en">
<style>
body {font-family: Arial;}

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Cihaz Ayarları">
    <meta name="author" content="Ömer Faruk DEMİRAL">

    <title><?php echo trim($interfaces[0]);?></title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/common.css" rel="stylesheet">
    <script src="js/jquery.min.js"></script>

    
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet">
<link href="css/theme-02.css" rel="stylesheet">

</head>

<body>
    <div class="forny-container">
        
<div class="forny-inner">
    <div class="mb-6 text-center forny-logo">
        <img src="img/logo.png">
    </div>
    <div class="forny-form">
        <div class="text-center">
		<div class="tab">
  <button class="tablinks" onclick="openSettings(event, 'Cihaz')"style="color:#1a91d1;">Cihaz Ayarları</button>
  <button class="tablinks" onclick="openSettings(event, 'Time')" style="color:#1a91d1;">Tarih Saat</button>
</div>

        </div>
		<br>
		<div id="Cihaz" class="tabcontent">
 <form>
    <div class="form-group">
        <div class="input-group">   
		<label for="dhcp" class="form-control">
Mac Adresi : </label>
             <input disabled required  class="form-control" id="macAddress" name="macAddress" type="text" value="<?php echo $MacAddress;?>" placeholder="IP Adresi">
        </div>
    </div>

    <div class="form-group">
        <div class="input-group">
            <div class="form-check-inline form-check">
                <label for="" class="form-control">
                        <input  onclick="getStaticField()" type="radio" id="static" name="inline-radios" value="" class="form-check-input" <?php if($IP_type==true) echo 'checked'; ?>>Static
						&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<input  onclick="getDHCPField()" type="radio" id="dhcp" name="inline-radios" value="" class="form-check-input" <?php if($IP_type==false) echo 'checked'; ?>>DHCP
                </label>
            </div>    
        </div>
    </div>
    <div class="form-group">
        <div class="input-group">   
		<label for="dhcp" class="form-control"> IP Adresi : </label>
             <input required  class="form-control" id="Local_IP" name="Local_IP" type="text" value="<?php echo trim($interfaces[0]);?>" placeholder="IP Adresi">
        </div>
    </div>

            
    <div class="form-group">
	
	    <div class="input-group">  
		<label for="dhcp" class="form-control"> Gateway : </label>
    <input required  class="form-control" id="Controller_Gateway" name="Controller_Gateway" type="text" value="<?php echo trim($interfaces[2]);?>" placeholder="GateWay">
        </div>
    </div>            
    <div class="form-group password-field">
        <div class="input-group">  
		<label for="dhcp" class="form-control"> Subnet Mask : </label>
            <input required  class="form-control" id="Controller_SubnetMask" name="Controller_SubnetMask" type="text" placeholder="Subnet Mask" value="<?php echo trim($interfaces[1]); ?>">
        </div>
    </div> 
	<div>
        <button class="btn btn-primary btn-block" id="Controller_Update" name="Controller_Update">Güncelle</button>
    </div>
     </form>
    </div>
	<div id="Time" class="tabcontent">
 <form>
    
	<div class="form-group password-field">
        <div class="input-group">  
		<label for="dhcp" class="form-control"> Tarih : </label>
            <input required  class="form-control" id="Controller_Date" name="Controller_Date" type="date" placeholder="Subnet Mask" value="<?php echo $date;?>">
        </div>
    </div>  
	<div class="form-group password-field">
        <div class="input-group">  
		<label for="dhcp" class="form-control">Saat : </label>
            <input required  class="form-control" id="Controller_Time" name="Controller_Time" type="time" placeholder="Subnet Mask" value="<?php echo $time; ?>">
        </div>
    </div>       
    <div>
        <button class="btn btn-primary btn-block" id="datetimeUpdate" name="datetimeUpdate">Güncelle</button>
    </div>
     </form>
    </div>
    </div>
</div>

    </div>

    <script>
		
		
        function getStaticField() {
          document.getElementById("Controller_Gateway").disabled = false;
          document.getElementById("Controller_SubnetMask").disabled = false;
          document.getElementById("Local_IP").disabled = false;

          document.getElementById("Controller_Gateway").style.color = "#000";
          document.getElementById("Controller_SubnetMask").style.color = "#000";
          document.getElementById("Local_IP").style.color = "#000";

        }
                
                function getDHCPField() {
          document.getElementById("Controller_Gateway").disabled = true;
          document.getElementById("Controller_SubnetMask").disabled = true;
          document.getElementById("Local_IP").disabled = true;

          document.getElementById("Controller_Gateway").style.color = "#c1c1c1";
          document.getElementById("Controller_SubnetMask").style.color = "#c1c1c1";
          document.getElementById("Local_IP").style.color = "#c1c1c1";
        }
                function maxValue(val){
                    if(val>32768)
                        {
                            JSalert_Warning_Message("Application max value is: 32768 ");
                             document.getElementById("App_Port").value = 32768;
        
                        }
                }
        </script>
           <script>
function openSettings(evt, settingName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(settingName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>                 
            <script src="./ipaddress-validation.js"></script>
            
            <script type="text/javascript">
        if($("input[name='inline-radios']:checked").attr('id')=='static'){
        getStaticField();
        }
        else
        {
                getDHCPField();
        }
        
        function isNumberKey(evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        }
        
           
        
                    </script>
                                            
                            
        <script type="text/javascript">
        
                $("#Controller_Update").on("click", function (event) {
                
                event.preventDefault();
               var ID =$('#ID').val();
                    if(ID==null)
                        {
                            ID=1;
                        }		
                        $stat ="0";
                        if($("input[name='inline-radios']:checked").attr('id')=='static'){
                          if(ValidateIPaddress($('input[name="Local_IP"]').val()) && ValidateIPaddress($('input[name="Controller_Gateway"]').val())&& ValidateIPaddress($('input[name="Controller_SubnetMask"]').val()) )
                                {
                                    
                                    $stat="1";
                                }
                        }
                        else{
                             
                        $stat="1";
                        }
                                        
                                
                                        
                             if($stat=="1")
                             {
                                var Local_IP  = $('input[name="Local_IP"]').val();
                                var Controller_Gateway = $('input[name="Controller_Gateway"]').val();
                                var Controller_SubnetMask = $('input[name="Controller_SubnetMask"]').val();
                                var App_Port = $('input[name="App_Port"]').val();
                                var App_URL = $('input[name="App_URL"]').val();
                                var App_Username = $('input[name="App_username"]').val();
                                var App_Password = $('input[name="App_pass"]').val();
                                var IP_type = $("input[name='inline-radios']:checked").attr('id');
                                var e = document.getElementById("Controller_Status");
                                var Controller_Status = 1;
                                var redirectTime = "1500";
                                var JSON_Data = "{"+'"'+"App_Username"+'"'+":"+'"'+App_Username+'"'+","+'"'+"App_Password"+'"'+":"+'"'+App_Password+'"'+","+'"'+"IP_type"+'"'+":"+'"'+IP_type+'"'+","+'"'+"ID"+'"'+":"+'"'+ID+'"'+","+'"'+"Local_IP"+'"'+":"+'"'+Local_IP+'"'+","+'"'+"Controller_Gateway"+'"'+":"+'"'+Controller_Gateway+'"'+","+'"'+"Controller_SubnetMask"+'"'+":"+'"'+Controller_SubnetMask+'"'+","+'"'+"App_Port"+'"'+":"+'"'+App_Port+'"'+","+'"'+"App_URL"+'"'+":"+'"'+App_URL+'"'+","+'"'+"Controller_Status"+'"'+":"+'"'+Controller_Status+'"'+"}";
                            
                                    $.ajax({
                                       url: "operation.php?islem=controller_update",
                                       type: "POST",
                                       data: "deger="+JSON_Data,
                                       success: function (cevap) {
                                         $.ajax({
                                            url: "reboot.php",
                                            success: function (cevap) {
                                          //  alert("Controller reboot edildi. Cihaz yeniden başlatılıyor. Bekleyiniz..");
                                       }
                                   });
                                  }
                                         
                                });
                             }
                                else{
                                    alert("Invalid Address Entered. Please Try again");
                                    }
                                
                                
				});
				
				$("#datetimeUpdate").on("click", function (event) {
	       
		   event.preventDefault();
		   var setDateValue = $('input[name="Controller_Date"]').val();
		   var setTimeValue = $('input[name="Controller_Time"]').val();
			   
			   
		   var JSON_Data = "{"+'"'+"setDateValue"+'"'+":"+'"'+setDateValue+'"'+","+'"'+"setTimeValue"+'"'+":"+'"'+setTimeValue+'"'+"}";
		   $.ajax({
				  url: "operation.php?islem=datetime_set",
				  type: "POST",
				  data: "deger="+JSON_Data,
				  success: function (cevap) {
					$.ajax({
                            url: "reboot.php",
                            success: function (cevap) {
						alert("ifconfig : "+cevap);
                           alert("Controller reboot edildi. Cihaz yeniden başlatılıyor. Bekleyiniz..");
                                       }
                                   });
					 
				  }
			  });
		   });
        
        </script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/demo.js"></script>
    
</body>

</html>