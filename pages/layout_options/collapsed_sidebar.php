<?php
  $active_menu = "collapsed_sidebar";
  include_once "../layout/header.php";
?>

<body class="hold-transition skin-red sidebar-mini">
  <!-- Put Page-level css and javascript libraries here -->


  <!-- ================================================ -->

  <div class="wrapper">

    <?php include_once "../layout/topmenu.php"; ?>
    <?php include_once "../layout/left-sidebar.php"; ?>
    

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <?php include_once("collapsed_sidebar/main_header.php") ?>
        
    </div><!-- /.content-wrapper -->
    
    <?php include_once "../layout/copyright.php"; ?>
    <?php include_once "../layout/right-sidebar.php"; ?>

    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div><!-- ./wrapper -->

<?php include_once "../layout/footer.php" ?>
<script src="collapsed_sidebar/script.js"></script>