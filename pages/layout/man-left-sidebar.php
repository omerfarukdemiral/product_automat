
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
