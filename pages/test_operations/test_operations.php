<?php
  $active_menu = "buttons";
  include_once "../layout/header.php";
  $UserID_test = $_SESSION['UserID'];

?>

<body class="hold-transition skin-blue sidebar-mini">
  <!-- Put Page-level css and javascript libraries here -->


  <!-- ================================================ -->

  <div class="wrapper">

    <?php include_once "../layout/topmenu.php"; ?>
    <?php include_once "../layout/left-sidebar.php"; ?>
    

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
    <?php include_once("test_func.php") ?>
    <?php include_once("test_operations/main_header.php") ?>
        
    </div><!-- /.content-wrapper -->
    
    <?php include_once "../layout/copyright.php"; ?>
    <?php include_once "../layout/right-sidebar.php"; ?>

    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div><!-- ./wrapper -->
  <script src="test_operations/script.js"></script>
<?php include_once "../layout/footer.php" ?>
