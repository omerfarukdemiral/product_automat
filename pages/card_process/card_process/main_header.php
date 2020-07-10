<!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Kart İşlemleri
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Anasayfa</a></li>
        <li class="active">Kart İşlemleri</li>
      </ol>
    </section>

    <section class="content">
      <div class="row">

        <!-- left column -->
      <div class="col-md-12">
        <!-- general form elements -->
          <div class="box box-primary">      
          <div class="box-header">
              <i class="fa fa-edit"></i>

              <h3 class="box-title">Kart Listesi</h3>
              <div class="box-title" style=float:right;>
              
              <form class="form-horizontal">
                <div class="form-group">
                  <label for="" style ="font-size:16px; font-weight:400; float:left;" class="col-sm-4 control-label">Durum </label>

                  <div class="col-sm-8">
                  <select id="status" name="status" class="form-control">
                    <option value="">Hepsi</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Pasif">Pasif</option>
                  </select>
                  </div>
                </div>              
			      </div>              
                        <!-- /.form group -->
          </div>
         
             
              <div class="box-body table-responsive">
              <table name="card_list" id="card_list" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th style="max-width:60px">No</th>
                  <th style="width:75px">Kart ID</th>
                  <th style="width:75px">Kart Adı</th>
                  <th style="width:75px">Kart Tipi</th>          
                  <th style="width:75px">Durumu</th>          
                <!--  <th style="max-width:90px">İşlem</th>   -->       
                       
                </tr>
                </thead>
              </table>
            </div>
			</form>
          </div>
		  </div>
              <!-- /.box-body -->
          <!-- /.box -->
        <!--/.col (left) -->
      </div>
      <!-- /.row -->
      <!-- /.row -->
    </section>
    <section class="content">
      <div class="row">

        <!-- left column -->
      <div class="col-md-12">
        <!-- general form elements -->
          <div class="box box-primary">      
          <div class="box-header">
              <i class="fa fa-edit"></i>

              <h3 class="box-title">Test İşlemleri</h3>
              <div class="box-title" style=float:right;>
              
              </div>
                
              <div class="box-body">
              <div class="row">
                  <div class="col-sm-4 col-md-2">
                    <button class="btn btn-app" id="Card_Update">
                     <i class="fa fa-refresh" style="color:#000;"></i>
                        Kart Güncelle
                    </button>
                  </div>
              </div>
		      </div>
              <!-- /.box-body -->
          <!-- /.box -->
        <!--/.col (left) -->
      </div>
      <!-- /.row -->
      <!-- /.row -->
    </section>
    <!-- /.content -->