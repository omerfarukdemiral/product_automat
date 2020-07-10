<?php
  $active_menu = "Dashboard";
  include_once "../layout/header.php";

    if($_SESSION["reboot"]=="true")
    {
      $_SESSION["reboot"]="false";
      shell_exec('sudo /sbin/shutdown -r now');

    }
  
?>

        <?php //include_once("../dashboard/dashboard_database.php") ?>
<body class="sidebar-mini skin-blue sidebar-collapse">
  <!-- Put Page-level css and javascript libraries here -->
  <script src="../../plugins/chartjs/Chart.min.js"></script>

  <!-- ================================================ -->

  <div class="wrapper">

    <?php include_once "../layout/topmenu.php"; ?>
    <?php include_once "../layout/left-sidebar.php"; ?>
    

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <script src="../dashboard/script.js"></script>
        <?php include_once("../dashboard/main_header.php") ?>

        
    </div><!-- /.content-wrapper -->
    
    <?php include_once "../layout/copyright.php"; ?>
    <?php include_once "../layout/right-sidebar.php"; ?>

    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div><!-- ./wrapper -->

    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link href='http://fonts.googleapis.com/css?family=Raleway:300,500|Arvo:700' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="js/modernizr.custom.79639.js"></script>

    <script type="text/javascript" src="js/menu.js"></script>
    <script type="text/javascript">
        $(function() {

            Menu.init();

        });
    </script>
<?php include_once "../layout/footer.php" ?>
