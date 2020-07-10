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
        <?php if($_SESSION["authority"]!="9"){ ?>
        <li id="card_mode_object" style="background-color :orange; margin-right:10px;">
        <div id="card_status" hidden ></div>
            <a id="card_mode_text"         href="../../pages/test_operations/test_operations.php"><i class="fa fa-gears"></i>  NFC Bağlantısı Sağlanamadı.</a>
          </li>  
        <li id="test_mode_object" style="background-color :orange;">
        <div id="test_status" hidden ></div>
            <a id="test_mode_text"   href="../../pages/test_operations/test_operations.php" ><i class="fa fa-gears"></i>  TCP Bağlantısını Kontrol Edin.</a>
          </li>
          <?php }?>
       

          <!-- User Account: style can be found in dropdown.less -->
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



  
  <div class="modal fade" id="modal-default">
          <div class="modal-dialog">
              <form class="form-horizontal">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 id="modalTitle" class="modal-title"></h4>
              </div>
              <div class="modal-body">
				<div class="row">
					<div class="col-md-6">
          <div class="box-body">
                      <div class="form-group">
                        <label for="ReceiptNo">Fiş No</label>
                        <input type="text" disabled class="form-control" id="ReceiptNo"  placeholder="">
                      </div> 

                      <div class="form-group">
                        <label for="SaleDate">Satış Zamanı</label>
                        <input type="text" disabled class="form-control" id="SaleDate" value="" placeholder="">
                      </div>

                      <div class="form-group">
                        <label for="UnitPrice">Birim Fiyat</label>
                        <input type="text" disabled class="form-control" id="UnitPrice" value="" placeholder="">
                      </div>

                      <div class="form-group">
                        <label for="SalesLiter">Satış Litresi</label>
                        <input type="text" disabled class="form-control" id="SalesLiter" value="" placeholder="">
                      </div>

                      <div class="form-group">
                        <label for="SalesAmount">Satış Tutarı</label>
                        <input type="text" disabled class="form-control" id="SalesAmount" value="" placeholder="">
                      </div>

                      <div class="form-group">
                        <label for="Plate">Plaka</label>
                        <input type="text" disabled class="form-control" id="Plate" value="" placeholder="">
                      </div>
                        
                </div>   
                </div>
                <div class="col-md-6">
          <div class="box-body">
                      <div class="form-group">
                        <label for="BeginTotalVolume">Başlangıç Toplam Süresi</label>
                        <input type="text" disabled class="form-control" id="BeginTotalVolume" value="" placeholder="">
                      </div> 

                      <div class="form-group">
                        <label for="EndTotalVolume">Bitiş Toplam Süresi</label>
                        <input type="text" disabled class="form-control" id="EndTotalVolume" value="" placeholder="">
                      </div>

                      <div class="form-group">
                        <label for="CustomerID">Müşteri ID</label>
                        <input type="text" disabled class="form-control" id="CustomerID" value="" placeholder="">
                      </div>

                      <div class="form-group">
                        <label for="PersonID">Pompacı ID</label>
                        <input type="text" disabled class="form-control" id="PersonID" value="" placeholder="">
                      </div>

                      <div class="form-group">
                        <label for="Status">Durum</label>
                        <select  <?php if($_SESSION["authority"]=="1"){ ?> enabled <?php } else{ ?> disabled <?php  }?> id="Status" name="Status" class="form-control">
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                      </div>
                        
                </div>   
                </div>
				</div>
      <!-- /.modal row-->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Kapat</button>
                <?php if($_SESSION["authority"]=="1"){ ?> <button id="update" type="button" class="btn btn-primary">Güncelle</button><?php }?> 
              </div>
            </div>
            </form>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

     
       <div id="overlay-loader"></div>