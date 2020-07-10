<?php 
session_start();
error_reporting(0);
if(isset($_SESSION["authority"]))
{

if($_SESSION["authority"]=="0"){
  $authority="SERVİS";
}
else{
   $authority="YETKİLİ";
}
?>
  <!-- Created by ÖFD - Ömer Faruk DEMİRAL-->

<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>MEPSAN | AVENDA - Sigara Otomatı Web Yapılandırma Arayüzü</title>
  <script> console.log("Created by ÖFD - Ömer Faruk DEMİRAL"); </script>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="../../dist/font-awesome/css/font-awesome.min.css">
  <!-- SweetAlert -->  
  <link rel="stylesheet" href="../../plugins/sweetalert/sweetalert.css">

  <!-- Ionicons -->
  <link rel="stylesheet" href="../../dist/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../../dist/css/AdminLTE.min.css">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="../../dist/css/skins/_all-skins.min.css">
  <link rel="stylesheet" href="../../dist/css/style.min.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- jQuery 2.2.4 -->

  <script src="../../plugins/jQuery/jquery-2.2.4.min.js"></script>
  <script src="../../plugins/jQuery/jquery-2.2.4.js"></script>

   
  <script src="../../bootstrap/js/bootstrap.min.js"></script>
  <!--SweetAlert -->

   <script src="../../plugins/sweetalert/sweetalert-dev.js"></script>
  <script src="../../pages/layout/sweetalerts.js"></script>
  <script src="../../pages/layout/loader.js"></script>



  <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
  <script>
   // $.widget.bridge('uibutton', $.ui.button);
  </script>

  <!-- Bootstrap 3.3.6 -->
  <div id="iframeloading" style="display: none; position: absolute;  left: 0px; width: 100%; height: 100%; z-index:9999;     background-color: rgba(255, 255, 255, 0.8);">
      <div style=" position: absolute; top:  40%; left: 50%; transform: translate(-50%,-50%); color:black;">   
        <img style="max-height:300px;" src="../../dist/img/Blocks-loader2.gif" alt="loading"   />
            <h2 style="text-align:center;"id="loader_messages">Lütfen Bekleyiniz..</h2>
        </div>
       </div>
  <?php 
  
  echo '<script type="text/javascript">',
  'console.log("Proccess : "+'.$_SESSION["islem"].');',
  'loader_control('.$_SESSION["islem"].');',
  '</script>'
;
include_once "functions.php";
   }
  else{
    header('Location: ../../pages/login/login.php');  
  } ?>
</head>