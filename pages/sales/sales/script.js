var table;
var currentdate = new Date();
var startdatetime = currentdate.getFullYear() + "-" +
    (currentdate.getMonth() + 1) + "-" +
    currentdate.getDate() + " " +
    "08:00:00";
//var enddatetime = currentdate.getFullYear() + "-" +
//    (currentdate.getMonth() + 1) + "-" +
//    (currentdate.getDate() + 1) + " " +
//    "08:00:00";

var temp_enddatetime = new Date();

temp_enddatetime .setDate(temp_enddatetime .getDate()+1);

var enddatetime = temp_enddatetime.getFullYear() + "-" +
    (temp_enddatetime.getMonth() + 1) + "-" +
    (temp_enddatetime.getDate()) + " " +
    "08:00:00";


console.log("---------End Date Time : "+ enddatetime);
var defaultStart = startdatetime;

var defaultEnd = enddatetime;

var min = new Date(startdatetime);
var max = new Date(startdatetime);

window.onload = function() {


    $(document).ready(function() {

        moment.locale('tr');
        $(function() {
            //Date range picker with time picker
            $('#sale_startdate').daterangepicker({

                "timePicker": true,
                singleDatePicker: true,
                "startDate": startdatetime,
                "timePicker24Hour": true,
                "timePickerSeconds": true,
                "opens": "right",
                timePickerIncrement: 1,
                "locale": {
                    format: 'YYYY-MM-DD HH:mm:ss',
                    ampm: false,
                    "separator": " ",
                    "applyLabel": "Uygula",
                    "cancelLabel": "Vazgeç",
                    "fromLabel": "Dan",
                    "toLabel": "a",
                    "customRangeLabel": "Seç",
                    "daysOfWeek": [
                        "Pt",
                        "Sl",
                        "Çr",
                        "Pr",
                        "Cm",
                        "Ct",
                        "Pz"
                    ],
                    "monthNames": [
                        "Ocak",
                        "Şubat",
                        "Mart",
                        "Nisan",
                        "Mayıs",
                        "Haziran",
                        "Temmuz",
                        "Ağustos",
                        "Eylül",
                        "Ekim",
                        "Kasım",
                        "Aralık"
                    ],
                    "firstDay": 1
                }

            });
        });
        $(function() {
            //Date range picker with time picker
            $('#sale_enddate').daterangepicker({
                "timePicker": true,
                singleDatePicker: true,
                "startDate": enddatetime,
                "timePicker24Hour": true,
                "timePickerSeconds": true,
                "opens": "right",
                timePickerIncrement: 1,
                locale: {
                    format: 'YYYY-MM-DD HH:mm:ss',
                    ampm: false,
                    "separator": " ",
                    "applyLabel": "Uygula",
                    "cancelLabel": "Vazgeç",
                    "fromLabel": "Dan",
                    "toLabel": "a",
                    "customRangeLabel": "Seç",
                    "daysOfWeek": [
                        "Pt",
                        "Sl",
                        "Çr",
                        "Pr",
                        "Cm",
                        "Ct",
                        "Pz"
                    ],
                    "monthNames": [
                        "Ocak",
                        "Şubat",
                        "Mart",
                        "Nisan",
                        "Mayıs",
                        "Haziran",
                        "Temmuz",
                        "Ağustos",
                        "Eylül",
                        "Ekim",
                        "Kasım",
                        "Aralık"
                    ],
                    "firstDay": 1
                }
            });
        });





        table = $('#sales_list').DataTable({
            language: {
                "url": "../../plugins/datatables/extensions/languages/tr.json",
                "emptyTable": "Kayıtlı veri bulunamadı."
            },

            dom: 'Bfrtip',
            buttons: [
                'pageLength',
                'colvis',
                'print',
                {
                    extend: 'copyHtml5',
                    exportOptions: {
                        columns: [0, ':visible']
                    }
                },
                {
                    extend: 'excelHtml5',
                    exportOptions: {
                        columns: ':visible'
                    }
                },
                {
                    extend: 'pdfHtml5',
                    orientation: 'landscape',
                    pageSize: 'LEGAL',
                    customize: function(doc) {
                        doc.defaultStyle.fontSize = 8; //<-- set fontsize to 16 instead of 10 
                        doc.styles.tableHeader.fontSize = 10;
                    }


                }

            ],
            "search": { regex: true },
            "autoWidth": true,

            "paging": true,
            "searching": true,
            "info": true,
            "processing": false,
            "ajax": {
                url: "sales_database.php",
                error: function(cevap) {

                }
            },

            columns: [
                { "data": "SaleID" },
                { "data": "SaleDate" },
                { "data": "SaleTime" },
                { "data": "ShelfNo" },
                { "data": "ProductBarcode" },
                { "data": "ProductName" },
                { "data": "ProductPrice" },

            ]



        });

        $('#shelfNo').on('input propertychange paste', function() {
            if (table.column(3).search() !== this.value) {
                table
                    .column(3)
                    .search(this.value)
                    .draw();
            }

        });

        $('#sale_startdate').on('apply.daterangepicker', function(ev, picker) {
            startdatetime = picker.startDate.format('YYYY-MM-DD HH:mm:ss');
            console.log("StartDateTime Update Button Apply ---------" + startdatetime + "----------------------------")

            table.draw();

        });


        $('#sale_enddate').on('apply.daterangepicker', function(ev, picker) {
            enddatetime = picker.startDate.format('YYYY-MM-DD HH:mm:ss');
            table.draw();
        });

        $.fn.dataTable.ext.search.push(
            function(settings, data, dataIndex) {
                min = new Date(startdatetime);
                max = new Date(enddatetime);
                var DateValue = data[1] + " " + data[2];
                //console.log("DateValue : " + DateValue);

                var salesDate = new Date(DateValue);

                console.log("Min : " + min);
                console.log("Max : " + max);
                console.log("salesDate : " + salesDate);

                if (min == null && max == null) { return true; }
                if (min == null && salesDate <= max) { return true; }
                if (max == null && salesDate >= min) { return true; }
                if (salesDate <= max && salesDate >= min) { return true; }
                return false;
            }
        );

        function resetinputs() {

            alert("reset Filter");
            document.getElementById("shelfNo").value = "";
            //$('#shelfNo').trigger('change');
        }

    });

};
