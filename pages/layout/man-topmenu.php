<div id="testMode" hidden ></div>
<header class="main-header">
  <!-- Created by ÖFD - Ömer Faruk DEMİRAL-->

    <!-- Logo -->
    <a href="../dashboard" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><img src="../../dist/img/logo.png"  alt="User Image"></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><img src="../../dist/img/logo.png"  alt="User Image">
</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->

        <li id="test_mode_object" style="background-color :orange;">
        <div id="test_status" hidden ></div>
            <a id="test_mode_text"   <?php if($_SESSION["authority"]!="9"){?>  href="../../pages/test_operations/test_operations.php" <?php }?> ><i class="fa fa-gears"></i>  TCP Bağlantısını Kontrol Edin.</a>
          </li>
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <?php if($_SESSION["authority"]=="1"){ ?>
            <img src="../../dist/img/user1-25x25.jpg" class="img-circle" alt="User Image">
 <?php  }
else{ ?>
            <img src="../../dist/img/user2-25x25.jpg" class="img-circle" alt="User Image">
<?php 
}
       ?>           
          <span class="hidden-xs"><?php echo $authority;?></span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
              <?php if($_SESSION["authority"]=="1"){ ?>
          <img src="../../dist/img/user1.png" class="img-circle" alt="User Image">
          <?php
            }
           else{ ?>
            <img src="../../dist/img/user2.png" class="img-circle" alt="User Image">
      <?php 
}
       ?>
                <p>
                 <?php echo $authority; ?>
                  <small><?php echo $_SESSION["UserID"]?> : <?php echo $_SESSION["UserName"]?></small>
                </p>
              </li>
              <!-- Menu Body -->
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-success btn-flat">Profil</a>
                </div>
                <div class="pull-right">
                  <a href="../logout.php" class="btn btn-danger btn-flat">Çıkış Yap</a>
                </div>
              </li>
            </ul>
          </li>
          <!--
          <li>
            <a href="../../#" data-toggle="control-sidebar">asdasdasds<i class="fa fa-gears"></i></a>
          </li>-->
        </ul>
      </div>
    </nav>
  </header>


       <div id="overlay-loader"></div>