<?php
  include_once "../layout/header.php";
?>
<script src="automat_logs/script.js"></script>
<body class="hold-transition skin-blue sidebar-mini">
  <!-- Put Page-level css and javascript libraries here -->
  <style>

.box-body {
  padding: 10px 40%;
}


.onoffswitch {
    position: relative; width: 130px;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
}
.onoffswitch-checkbox {
    display: none;
}
.onoffswitch-label {
    display: block; overflow: hidden; cursor: pointer;
    border: 2px solid #FFFFFF; border-radius: 50px;
}
.onoffswitch-inner {
    display: block; width: 200%; margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
}
.onoffswitch-inner:before, .onoffswitch-inner:after {
    display: block; float: left; width: 50%; height: 50px; padding: 0; line-height: 50px;
    font-size: 16px; color: white; font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold;
    box-sizing: border-box;
}
.onoffswitch-inner:before {
    content: "AÇIK";
    font-family: monospace; font-weight: bold;
    padding-left: 13px;
    background-color: #3c763d; color: #FFFFFF;
}
.onoffswitch-inner:after {
    content: "KAPALI";
    font-family: monospace; font-weight: bold; 
    padding-right: 13px;
    background-color: #b22222; color: #FFFFFF;
    text-align: right;
}
.onoffswitch-switch {
    display: block; width: 35px; margin: 7.5px;
    background: #FFFFFF;
    position: absolute; top: 0; bottom: 0;
    right: 76px;
    border: 2px solid #FFFFFF; border-radius: 30px;
    transition: all 0.3s ease-in 0s; 
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
    right: 0px; 
}



</style>

  <!-- ================================================ -->

  <div class="wrapper">

    <?php include_once "../layout/topmenu.php"; ?>
    <?php include_once "../layout/left-sidebar.php"; ?>
    

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <?php include_once("automat_logs/main_header.php") ?>
        
    </div><!-- /.content-wrapper -->

    <?php include_once "../layout/copyright.php"; ?>
    <?php include_once "../layout/right-sidebar.php"; ?>

    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div><!-- ./wrapper -->

<?php include_once "../layout/footer.php" ?>

