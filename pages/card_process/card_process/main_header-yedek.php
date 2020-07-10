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
      <div class="col-md-8">
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
         
             
               
          <form class="form-horizontal">
              <div class="box-body table-responsive">
              <table name="card_list" id="card_list" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th style="max-width:60px">No</th>
                  <th style="width:75px">Kart ID</th>
                  <th style="width:75px">Kart Adı</th>
                  <th style="width:75px">Kart Tipi</th>          
                  <th style="width:75px">Durumu</th>          
                <!--  <th style="max-width:90px">İşlem</th>          
                       
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

        <div class="col-md-4">
    
        <!-- general form elements -->
          <div class="box box-primary">    
          <div class="box-header">
              <i class="fa fa-edit"></i>

              <h3 class="box-title">Kart Ekle</h3>
              <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Kapat">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Küçült">
              <i class="fa fa-times"></i></button>
          </div>
            </div>      
              <div class="box-body" style="height:auto;">
              
                <div id="card_name_group" class="form-group">
                  <label for="CardName">Kart Adı</label>
                  <input type="text" class="form-control" id="CardName" name="CardName" value="" placeholder="">
                </div>
                <div class="form-group">
                  <label>Kart Tipi</label>
                  <select id="card_type" name="card_type" class="form-control">
                    <option value="0">Custom</option>
                    <option value="1">Master</option>
                  </select>
                </div>
              <div class="form-group">
                <button type="button" class="btn btn-primary" name="send_card_tcp" id="send_card_tcp">Kartı Okut</button>
              </div>
             
              <div id="card_id_group" class="form-group ">
                  <label for="cardID">Kart ID</label>
                  <input type="text" class="form-control" id="cardID" value="" placeholder="">
                </div>
              </div>
              <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!--/.col (right) -->
      </div>
      <!-- /.row -->
      <div class="row">

        <!-- left column -->
      <div class="col-md-8">
      <div class="box box-primary">    
          <div class="box-header">
              <i class="fa fa-edit"></i>

              <h3 class="box-title">Kart Güncelle</h3>
              <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Kapat">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Küçült">
              <i class="fa fa-times"></i></button>
          </div>
            </div>      
              <div class="box-body" style="height:auto;">
              <div class="row">
                <div class="col-md-2">
                <div class="form-group">
                  <label for="CardNo">No</label>
                  <input disabled type="number" class="form-control" id="CardNo" name="CardNo">
                </div>
                </div>
                <div class="col-md-2">
                <div class="form-group">
                  <label for="CardID">Kart ID</label>
                  <input type="text" class="form-control" id="CardID" name="CardID">
                </div>
                </div>  
                <div class="col-md-2">
                <div class="form-group">
                  <label for="CardName_Update">Kart Adı</label>
                  <input type="text" class="form-control" id="CardName_Update" name="CardName_Update">
                </div>
                </div>  
                <div class="col-md-2">
                <div class="form-group">
                  <label for="CardType">Kart Tipi</label>
                  <select id="CardType" name="CardType" class="form-control">
                    <option value="1">Master</option>
                    <option value="0">Slave</option>
                  </select>
                  </div>
                </div>  
                <div class="col-md-2">
                <div class="form-group">
                  <label for="UpdateStatus">Durumu</label>
                  <select id="UpdateStatus" name="UpdateStatus" class="form-control">
                    <option value="1">Aktif</option>
                    <option value="0">Pasif</option>
                  </select>    
                  </div>
                </div>        
                <div class="col-md-2">
                <div class="form-group">
                <label for="CardNo">İşlem</label>

                  <div class="form-group">
                    <button disabled type="button" class="btn btn-block" name="update_card" id="update_card">Kartı Güncelle</button>
                  </div>
                </div>


              </div>      

  </div>
        <!--/.col (left) -->
      </div>
      <!-- /.row -->
      
    </section>
    <!-- /.content -->