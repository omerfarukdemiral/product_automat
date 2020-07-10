<?php
  $active_menu = "data_tables";
  include_once "../layout/header.php";
?>

<body class="hold-transition skin-blue sidebar-mini">
  <!-- Put Page-level css and javascript libraries here -->

  <!-- ================================================ -->

  <div class="wrapper">

    <?php include_once "../layout/topmenu.php"; ?>
    <?php include_once "../layout/left-sidebar.php"; ?>

      <!-- DataTables -->
    <link rel="stylesheet" href="../../plugins/datatables/dataTables.bootstrap.css">
    <link rel="stylesheet" href="../../plugins/datatables/buttons.dataTables.min.css">
    <link rel="stylesheet" href="../../plugins/datatables/jquery.dataTables.min.css">

    <!-- DataTables -->
     <script src="../../plugins/datatables/jquery.dataTables.min.js"></script>
     <script src="../../plugins/datatables/dataTables.bootstrap.min.js"></script>
    <script src="../../plugins/datatables/dataTables.buttons.min.js"></script>
     <script src="../../plugins/datatables/buttons.flash.min.js"></script>
    <script src="../../plugins/datatables/jszip.min.js"></script>
    <script src="../../plugins/datatables/pdfmake.min.js"></script>
     <script src="../../plugins/datatables/vfs_fonts.js"></script>
     <script src="../../plugins/datatables/buttons.html5.min.js"></script>
     <script src="../../plugins/datatables/buttons.print.min.js"></script>
     <script src="../../plugins/datatables/buttons.colVis.min.js"></script>
     <script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment-with-locales.min.js"></script>

    <!-- ================================================ -->


  <!-- date-range-picker -->
  <script src="../../plugins/daterangepicker/moment.min.js"></script>
  <script src="../../plugins/daterangepicker/daterangepicker.js"></script>
  <script src="sales/script.js"></script>

     <!-- daterange picker -->
     <link rel="stylesheet" href="../../plugins/daterangepicker/daterangepicker.css">
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
    
        <?php include_once("sales/main_header.php") ?>
        
    </div><!-- /.content-wrapper -->
    
    <?php include_once "../layout/copyright.php"; ?>
    <?php include_once "../layout/right-sidebar.php"; ?>

    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div><!-- ./wrapper -->
  <script src="sales/script.js"></script>

  
<?php include_once "../layout/footer.php" ?>
