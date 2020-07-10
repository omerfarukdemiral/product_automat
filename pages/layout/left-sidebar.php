<?php
include_once "functions.php";
error_reporting(0);
  function isActive($menu, $mode="full"){
    global $active_menu;
    if ($mode == "partial")
      echo ($active_menu == $menu? "active": "");
    else
      echo ($active_menu == $menu? "class='active'": "");
  }


  
  $tcpStatus = getStatusTCP();

?>
<script>
   var res = (document.getElementById("test_status").innerHTML).substring(0,1);

</script>
<?php
   $status ="<script>document.write(res);</script>";
?>
<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
        <?php if($_SESSION["authority"]=="1"){ ?>
          <img src="../../dist/img/user1.png" class="img-circle" alt="User Image">
 <?php
}
else{ ?>
            <img src="../../dist/img/user2.png" class="img-circle" alt="User Image">
<?php 
}
       ?>
        </div>
        <div class="pull-left info">
        <p><?php echo $authority;?></p>
        </div>
      </div>
      <!--
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form> search form -->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <?php if($_SESSION["authority"]!="9"){ ?>
      <ul class="sidebar-menu">
        <li class="header">Ana Menü</li>

        <li class="">
          <a href="../../pages/dashboard">
            <i class="fa fa-dashboard"></i> <span>Kontrol Paneli</span>      
          </a>
        </li>

        <li class="">
            <a href="../../pages/sales/sales.php">
            <i class="fa fa-usd"></i> <span>Satışlar</span>      
          </a>
        </li>
        <?php if($tcpStatus=="1")
        { 
        ?>
          <li class="">
          <a href="../../pages/test_operations/test_operations.php">
          <i class="fa fa-toggle-on"></i> <span>Test İşlemleri</span>      
          </a>
          </li>
          
          <li class="">
          <a href="../../pages/card_process/card_process.php">
          <i class="fa fa-credit-card"></i> <span>Kart İşlemleri</span>      
          </a>
          </li>
          <li class="">
          <a href="../../pages/events_logs/event_logs.php">
          <i class="fa fa-expeditedssl"></i> <span>Kapı İşlemleri</span>      
          </a>
          </li>
          <li class="">
          <a href="../../pages/automat_logs/automat_logs.php">
          <i class="fa fa-align-left"></i> <span>Log Listeleri</span>      
          </a>
          </li>
        <?php }
                ?>
        <li class="">
          <a href="../../pages/logout.php">
            <i class="fa fa-sign-out"></i> <span>Çıkış Yap</span>      
          </a>
        </li>
        <li class="header">Cihaz İşlemleri</li>
        <li >
         <a href="javascript:JSalert_reboot()">
                   <i class="fa fa-refresh"></i> <span>Reboot</span>      
          </a>
        </li>

      </ul>
        <?php }?>
        <?php if($_SESSION["authority"]=="9"){ ?>
      <ul class="sidebar-menu">
        <li class="header">Ana Menü</li>

        <li class="">
          <a href="../../pages/manufacture_test_operations/manufacture_test_operations.php">
            <i class="fa fa-toggle-on"></i> <span>Üretim Test İşlemleri</span>      
          </a>
        </li>

        <li class="header">Cihaz İşlemleri</li>
        <li >
         <a href="javascript:JSalert_reboot()">
                   <i class="fa fa-refresh"></i> <span>Reboot</span>      
          </a>
        </li>

      </ul>
        <?php }?>
    </section>
    <!-- /.sidebar -->
  </aside>
<script>
  var parent = $("ul.sidebar-menu li.active").closest("ul").closest("li");
  if (parent[0] != undefined)
    $(parent[0]).addClass("active");
</script>