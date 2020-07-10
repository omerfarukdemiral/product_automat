$(document).ready(function() {

    table = $('#card_list').DataTable({
        language: {
            "url": "../../plugins/datatables/extensions/languages/tr.json",
            "emptyTable": "Kayıtlı veri bulunamadı."
        },

        dom: 'Bfrtip',
        buttons: [
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
        "paging": true,
        "pageLength": 5,
        "searching": true,
        "info": true,
        "processing": false,
        "ordering": false,
        "ajax": {
            url: "card_database.php?islem=getData",
            error: function(cevap) {

            }
        },

        columns: [
            { "data": "ID" },
            { "data": "CardID" },
            { "data": "CardName" },
            { "data": "CardType" },
            { "data": "Status" },
            //{ "data": "myDummyData" }


        ],
        /*
        "columnDefs": [{
            "targets": -1,
            "data": "myDummyData",
            "defaultContent": '<div class = "table-data-feature"><button type="button" class="btn btn-success" title ="Edit" id="card_edit" name="card_edit">Düzenle</button> <button type="button" class="btn btn-danger" title ="Delete" id="card_delete" name="card_delete">Sil</button></div>'
        }]*/



    });
    var count = 0;

    $.ajax({
        url: "card_database.php?islem=getCount",
        type: "POST",
        success: function(cevap) {
            cevap = cevap.replace('\n', '');
            cevap = cevap.trimLeft()
            console.log("Kart Limiti : " + cevap);
            if (cevap == "false") {
                JSalert_Error_Message("Kart Limiti Doldu.");
                document.getElementById("send_card_tcp").disabled = true;
            }
        }
    });


    $('#card_list tbody').on('click', 'button', function() {
        event.preventDefault();
        var tempData = table.row($(this).parents('tr')).data();
        var actionName = $(this).attr('name');

        if (actionName == 'card_delete') {


            var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "DeleteCard" + '"' + "," + '"' + "CardNo" + '"' + ":" + '"' + tempData["CardID"] + '"' + "}";
            console.log(JSON_Data);


            $("#overlay-loader").show();
            $("#iframeloading").show();
            document.getElementById("loader_messages").innerHTML = "Kart Siliniyor..";
            get_TestStatus()
                .then(cevap => {
                    console.log("Promise : " + cevap);
                    var checkStatus = document.getElementById("test_status").innerHTML;
                    if (checkStatus == 1) {
                        $.ajax({
                            url: "card_tcp.php?islem=operations",
                            type: "POST",
                            data: "deger=" + JSON_Data,
                            timeout: 10000,
                            error: function() {
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                                JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");

                            },
                            success: function(cevap) {
                                cevap = cevap.replace('\0', '');
                                cevap = cevap.replace(/\0/g, '');
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                                console.log("delete_card_tcp cevap :" + cevap);
                                var myObj = JSON.parse(cevap);
                                if (myObj.Result == 1) {
                                    document.getElementById("cardID").value = "";
                                    console.log("Kart Silme Başarılı");
                                    JSalert_Success_Message(myObj.Message + "\n" + "Type : " + myObj.Type);
                                    table.ajax.reload();
                                }
                                if (myObj.Result == 0) {
                                    document.getElementById("cardID").value = "";
                                    console.log("Hata : Kart Silme Başarısız");
                                    JSalert_Error_Message(myObj.Message + "\n" + "Type : " + myObj.Type);
                                }

                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();

                            }
                        });
                    } else if (checkStatus == 2) {
                        console.log("checkStatus : " + checkStatus);

                        JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.\n Lütfen Programı Tekrar Çalıştırın..");
                        $("#iframeloading").hide();
                        $("#overlay-loader").hide();
                    } else {
                        console.log("checkStatus : " + checkStatus);

                        $("#iframeloading").hide();
                        $("#overlay-loader").hide();
                        JSalert_Error_Message("Test Modu KAPALI");
                    }
                })
                .catch(error => {
                    console.log("Promise Error : " + error)
                })
        } else if (actionName == "card_edit") {
            var tempData = table.row($(this).parents('tr')).data();
            document.getElementById("CardNo").value = tempData["ID"];
            document.getElementById("CardID").value = tempData["CardID"];
            document.getElementById("CardName_Update").value = tempData["CardName"];

            if (tempData["CardType"] == "Slave") {
                document.getElementById("CardType").selectedIndex = "1";
            } else {
                document.getElementById("CardType").selectedIndex = "0";
            }
            if (tempData["Status"] == "Pasif") {
                console.log(tempData["Status"]);
                document.getElementById("UpdateStatus").selectedIndex = "1";
            } else {
                console.log(tempData["Status"]);
                document.getElementById("UpdateStatus").selectedIndex = "0";
            }

            document.getElementById("update_card").disabled = false;
            var element = document.getElementById("update_card");
            element.classList.add("btn-warning");

        }


    });

    $("#send_card_tcp").on("click", function(event) {
        event.preventDefault();
        var e = document.getElementById("card_type");
        var card_type = e.options[e.selectedIndex].value;
        var CardName = document.getElementById("CardName").value;

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "ReadCard" + '"' + "," + '"' + "CardType" + '"' + ":" + card_type + "," + '"' + "CardName" + '"' + ":" + '"' + CardName + '"' + "}";
        console.log(JSON_Data);
        if (CardName != "") {

            var i = 0;

            $("#overlay-loader").show();
            $("#iframeloading").show();
            $("loader_messages").html = "Lütfen Kartı Okutunuz..";
            console.log(i);
            get_TestStatus()
                .then(cevap => {
                    console.log("Promise : " + cevap);
                    var checkStatus = document.getElementById("test_status").innerHTML;
                    if (checkStatus == 1) {
                        $.ajax({
                            url: "card_tcp.php?islem=operations",
                            type: "POST",
                            data: "deger=" + JSON_Data,
                            error: function() {
                                JSalert_Error_Message("Beklenmeyen bir hata oluştu SENA..");
                                var count = 50;

                                var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

                                function timer() {
                                    count = count - 1;
                                    if (count <= 0) {
                                        clearInterval(counter);
                                        $("#iframeloading").hide();
                                        $("#overlay-loader").hide();
                                        return;
                                    }

                                    $("loader_messages").html = count + " saniye"; // watch for spelling
                                }
                            },
                            success: function(cevap) {

                                cevap = cevap.replace('\0', '');
                                cevap = cevap.replace(/\0/g, '');
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                                var resultCardNo = cevap.includes("CardNo");
                                if (resultCardNo) {

                                    console.log("send_card_tcp cevap :" + cevap);
                                    var myObj = JSON.parse(cevap);
                                    if (myObj.Result == 1) {
                                        document.getElementById("cardID").value = myObj.CardNo;
                                        console.log("Kart Okutma Başarılı");
                                        var element = document.getElementById("card_id_group");
                                        var x = document.getElementById("card_id_group").classList.contains("has-error");
                                        if (x) {
                                            document.getElementById("card_id_group").classList.remove("has-error");
                                        }
                                        element.classList.add("has-success");
                                        var element2 = document.getElementById("card_name_group");
                                        var x = document.getElementById("card_name_group").classList.contains("has-error");
                                        if (x) {
                                            document.getElementById("card_name_group").classList.remove("has-error");
                                        }
                                        element2.classList.add("has-success");

                                        JSalert_Success_Message(myObj.Message + "\n" + "CardNo : " + myObj.CardNo);
                                        table.ajax.reload();
                                    }
                                    if (myObj.Result == 0) {
                                        document.getElementById("cardID").value = myObj.CardNo;
                                        console.log("Hata :Kart Okutma Başarısız..");
                                        var element = document.getElementById("card_id_group");
                                        element.classList.add("has-error");
                                        JSalert_Error_Message(myObj.Message + "\n" + "CardNo : " + myObj.CardNo);
                                        table.ajax.reload();

                                    }


                                    $("#iframeloading").hide();
                                    $("#overlay-loader").hide();

                                } else {

                                    console.log("send_card_tcp  cevap :" + cevap);
                                    console.log("AYNI KART OKUTULDU. KART SİLİNDİ.");
                                    var myObj = JSON.parse(cevap);
                                    if (myObj.Result == 1) {
                                        document.getElementById("cardID").value = "";
                                        console.log("Kart Silme Başarılı");
                                        JSalert_Success_Message(myObj.Message + "\n" + "Type : " + myObj.Type);
                                        table.ajax.reload();
                                    }
                                    if (myObj.Result == 0) {
                                        document.getElementById("cardID").value = "";
                                        console.log("Hata : Kart Silme Başarısız");
                                        JSalert_Error_Message(myObj.Message + "\n" + "Type : " + myObj.Type);
                                    }

                                    $("#iframeloading").hide();
                                    $("#overlay-loader").hide();

                                }

                            },
                            timeout: 10000
                        });
                    } else if (checkStatus == 2) {
                        console.log("checkStatus : " + checkStatus);

                        JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.\n Lütfen Programı Tekrar Çalıştırın..");
                        $("#iframeloading").hide();
                        $("#overlay-loader").hide();
                    } else {
                        console.log("checkStatus : " + checkStatus);

                        $("#iframeloading").hide();
                        $("#overlay-loader").hide();
                        JSalert_Error_Message("Test Modu KAPALI");
                    }
                })
                .catch(error => {
                    console.log("Promise Error : " + error)
                })
        } else {
            JSalert_Error_Message("Lütfen Kart Adını Giriniz.");
            var element = document.getElementById("card_name_group");
            element.classList.add("has-error");
            document.getElementById("CardName").focus();

        }

    });

    $("#update_card").on("click", function(event) {
        var CardName = document.getElementById("CardName_Update").value;
        var CardID = document.getElementById("CardID").value;
        if (CardID != "") {
            if (CardName != "") {
                var ID = document.getElementById("CardNo").value;
                /*CardID = document.getElementById("CardID").value;
                CardName = document.getElementById("CardName_Update").value;*/
                var CardType = document.getElementById("CardType").value;
                var Status = document.getElementById("UpdateStatus").value;

                var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "AddCard" + '"' + "," + '"' + "ID" + '"' + ":" + '"' + ID + '"' + "," + '"' + "CardNo" + '"' + ":" + '"' + CardID + '"' + "," + '"' + "CardName" + '"' + ":" + '"' + CardName + '"' + "," + '"' + "CardType" + '"' + ":" + CardType + "," + '"' + "Status" + '"' + ":" + Status + "}";
                console.log(JSON_Data);
                $("#overlay-loader").show();
                $("#iframeloading").show();
                document.getElementById("loader_messages").innerHTML = "Kartı Güncelleniyor..";
                get_TestStatus()
                    .then(cevap => {
                        console.log("Promise : " + cevap);
                        var checkStatus = document.getElementById("test_status").innerHTML;
                        if (checkStatus == 1) {

                            $.ajax({
                                url: "card_tcp.php?islem=operations",
                                type: "POST",
                                data: "deger=" + JSON_Data,
                                success: function(cevap) {
                                    cevap = cevap.replace('\0', '');
                                    cevap = cevap.replace(/\0/g, '');
                                    $("#iframeloading").hide();
                                    $("#overlay-loader").hide();
                                    console.log("update_card_tcp cevap :" + cevap);
                                    var myObj = JSON.parse(cevap);
                                    if (myObj.Result == 1) {
                                        console.log("Kart Update Başarılı");
                                        table.ajax.reload();
                                        JSalert_Success_Message(myObj.Message + "\n" + "CardNo : " + myObj.CardNo);

                                    }
                                    if (myObj.Result == 0) {
                                        console.log("Hata : Kart Update Başarısız");
                                        JSalert_Error_Message(myObj.Message + "\n" + "CardNo : " + myObj.CardNo);
                                    }

                                    $("#iframeloading").hide();
                                    $("#overlay-loader").hide();

                                }
                            });
                        } else if (checkStatus == 2) {
                            console.log("checkStatus : " + checkStatus);

                            JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.\n Lütfen Programı Tekrar Çalıştırın..");
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();
                        } else {
                            console.log("checkStatus : " + checkStatus);

                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();
                            JSalert_Error_Message("Test Modu KAPALI");
                        }
                    })
                    .catch(error => {
                        console.log("Promise Error : " + error)
                    })

            } else {
                JSalert_Error_Message("Lütfen Kart Adını Giriniz.");
                document.getElementById("CardName_Update").focus();

            }

        } else {
            JSalert_Error_Message("Lütfen Kart ID Giriniz.");
            document.getElementById("CardID").focus();


        }


    });


    $("#Card_Update").on("click", function(event) {
        event.preventDefault();

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "CardUpdate" + '"' + "}";
        $("#overlay-loader").show();
        $("#iframeloading").show();
        console.log(JSON_Data);
        document.getElementById("loader_messages").innerHTML = "Kart Güncelleniyor.";
        get_TestStatus()
            .then(cevap => {
                console.log("Promise : " + cevap);
                var checkStatus = document.getElementById("test_status").innerHTML;
                if (checkStatus == 1) {
                    $.ajax({
                        url: "card_tcp.php?islem=operations",
                        type: "POST",
                        data: "deger=" + JSON_Data,
                        error: function() {
                            JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();

                        },
                        success: function(cevap) {
                            cevap = cevap.replace('\0', '');
                            cevap = cevap.replace(/\0/g, '');
                            console.log(cevap);
                            var response = cevap.split(" ");
                            if (response[0] != "TCP") {
                                var myObj = JSON.parse(cevap);
                                if (myObj.Result == 1) {
                                    table.ajax.reload();
                                    JSalert_Success_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);

                                }
                                if (myObj.Result == 0) {
                                    JSalert_Error_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                }
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                                console.log("Card Update  myObj.Message  : " + myObj.Message);

                            } else {
                                document.getElementById("test_mode_object").style = "background-color :orange;";
                                document.getElementById("test_mode_text").innerHTML = cevap;
                                document.getElementById("test_status").innerHTML = 2;
                                JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

                            }
                        }

                    });
                } else {
                    console.log("checkStatus : " + checkStatus);
                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.\n Lütfen Programı Tekrar Çalıştırın..");
                    $("#iframeloading").hide();
                    $("#overlay-loader").hide();
                }
            })
            .catch(error => {
                console.log("Promise Error : " + error)
            })

    });


    $('#status').change(function() {
        if (table.column(4).search() !== this.value) {
            table
                .column(4)
                .search(this.value)
                .draw();
        }
    });


});