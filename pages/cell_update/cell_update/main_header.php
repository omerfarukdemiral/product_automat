<!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
      Sigara Otomatı Konfigürasyon İşlemleri
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Anasayfa</a></li>
        <li class="active"><a href="#">Hücre Bilgileri</a></li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <!-- left column -->
        <div class="col-md-6">
          <!-- Horizontal Form -->
          <div class="box box-info">
           <div class="box-header with-border">
              <h3 class="box-title"><?php echo $Shelf_No?>. Hücre Bilgilerini Güncelle</h3>
            </div>
             <!-- /.box-header -->
            <!-- form start -->
            <form class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label for="shelfno" class="col-sm-3 control-label">Hücre No :</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="shelfno" name="shelfno" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="status" class="col-sm-3 control-label">Ürün Durumu :</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="status" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="productbarcode" class="col-sm-3 control-label">Ürün Barkodu :</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="productbarcode" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="productname" class="col-sm-3 control-label">Ürün Adı :</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="productname" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="productprice" class="col-sm-3 control-label">Ürün Fiyat :</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="productprice" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="workingtotal" class="col-sm-3 control-label">Kullanım Sayısı :</label>

                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="workingtotal" placeholder="">
                  </div>
                </div>
           
              
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button id="submit_cell_update" type="submit" class="btn btn-success pull-right">Güncelle</button>
              </div>
              <!-- /.box-footer -->
            </form>
          </div>
          <!-- /.box -->
        </div>
        <!--/.col (right) -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->