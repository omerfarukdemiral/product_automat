<style>
    .example-modal .modal {
      position: relative;
      top: auto;
      bottom: auto;
      right: auto;
      left: auto;
      display: block;
      z-index: 1;
    }

    .example-modal .modal {
      background: transparent !important;
    }  
    </style>
<!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Satışlar
        <small>Filtreleme ve Raporlama Ekranı</small>
      </h1>
      <ol class="breadcrumb">
        <li><a ><i class="fa fa-dashboard"></i> Anasayfa</a></li>
        <li class="active">Satışlar</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            
            <div class="box-body">
              
            <div class="row">
		        	<div class="col-md-3">
              <!-- Date and time range -->
              <div class="form-group">
                <label>Başlangıç Tarih-Saat</label>

                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa  fa-calendar"></i>
                  </div>
                  <input name="sale_startdate" type="text" class="form-control pull-right" id="sale_startdate" autocomplete="off">
                </div>
                <!-- /.input group -->
              </div>
              <!-- /.form group -->
                <!-- /.input group -->
              </div>
              <!-- /.form group -->
           
              <div class="col-md-3">
              <!-- Date and time range -->
              <div class="form-group">
                <label>Bitiş Tarih-Saat</label>

                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa  fa-calendar"></i>
                  </div>
                  <input name="sale_enddate" type="text" class="form-control pull-right" id="sale_enddate" autocomplete="off">
                </div>
                <!-- /.input group -->
              </div>
              <!-- /.form group -->
              </div>

              <div class="col-md-2">
              <!-- Date and time range -->
              <div class="form-group">
                <label>Hücre No</label>
                
             
                <div class="input-group">
                <div class="input-group-addon">
                    <i class="fa  fa-info-circle"></i>
                  </div>
                  <input type="number" class="form-control pull-right" id="shelfNo">
                </div>
                <!-- /.input group -->
              </div>
              <!-- /.form group -->
              </div>
             
              <div class="col-md-1 ">
              <!-- Date and time range -->
              <div class="form-group">
                <label>Filtre</label>

                <button id="resetFilter" type="button" class="btn btn-block btn-success" onclick="resetinputs();">Sıfırla</button>

                <!-- /.input group -->
              </div>
          <!-- /.form group -->
              </div>
             
              </div>
           </div>
             

     
            <!-- /.box-body -->
            <!-- /.box-header -->
            <div class="box-body table-responsive ">
              <table name="sales_list" id="sales_list" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Satış No</th>
                  <th>Satış Tarihi</th>
                  <th>Satış Saati</th>          
                  <th>Hücre No</th>          
                  <th>Ürün Barkodu</th>          
                  <th>Ürün Adı</th>          
                  <th>Ürün Fiyatı</th>          
                </tr>
                </thead>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

        
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
    
<script> 

function resetinputs() {

//alert("reset Filter");
document.getElementById("shelfNo").value = "";
$('#shelfNo').trigger('propertychange');
}
</script>