<?php
  $active_menu = "general_elements";
  include_once "../layout/header.php";
  include_once "../layout/functions.php";
  $Shelf_No = $_GET['shelf_no']; 

  $Address = $db->querySingle("SELECT MachineID from Nozzle_WashingMachine where ID ==$ID");
  $db->querySingle("UPDATE WashingMachine set hasNewConf='1' WHERE Address=$Address");
  
?>

<body class="hold-transition skin-blue sidebar-mini">
  <!-- Put Page-level css and javascript libraries here -->


  <!-- ================================================ -->

  <div class="wrapper">

    <?php include_once "../layout/topmenu.php"; ?>
    <?php include_once "../layout/left-sidebar.php"; ?>
    

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <?php include_once("cell_update/main_header.php") ?>
        
    </div><!-- /.content-wrapper -->
    
    <?php include_once "../layout/copyright.php"; ?>
    <?php include_once "../layout/right-sidebar.php"; ?>

    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div><!-- ./wrapper -->

<?php include_once "../layout/footer.php" ?>
<script src="general_elements/script.js"></script>