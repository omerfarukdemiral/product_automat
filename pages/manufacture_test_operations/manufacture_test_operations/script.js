$(document).ready(function() {
    get_TCP_Status();

    function get_TCP_Status() {
        var status = 3;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "../layout/test_process.php?islem=test_mode",
                type: "POST",
                error: function(error) {
                    reject(error)
                },
                success: function(cevap) {
                    console.log("Test Modu UpdateTopBar CEVAP :  " + cevap);
                    if (cevap == 1) {
                        console.log("Update Top Bar : Test Modu AÇIK..");
                        document.getElementById("test_mode_object").style = "background-color :green;";
                        document.getElementById("test_mode_text").innerHTML = "TCP Bağlantısı : Aktif";
                        document.getElementById("test_status").innerHTML = 1;
                        status = 1;

                    } else if (cevap == 0) {
                        document.getElementById("test_mode_object").style = "background-color :#dd4b39;";
                        document.getElementById("test_mode_text").innerHTML = "TCP Bağlantısı : Aktif";
                        document.getElementById("test_status").innerHTML = 0;
                        console.log("Update Top Bar : Test Modu KAPALI..");
                        status = 0;
                    } else {
                        document.getElementById("test_mode_object").style = "background-color :orange;";
                        document.getElementById("test_mode_text").innerHTML = "TCP Bağlantısı : Aktif";
                        document.getElementById("test_status").innerHTML = 2;
                        console.log("Update Top Bar : TCP  MODU KAPALI..");
                        //JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");
                        status = 2;
                    }
                    resolve(status);
                }
            });
        });
    }

    $("#Single_Cell_Test").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "SingleCellTest" + '"' + "}";
        get_TCP_Status()
            .then(cevap => {
                console.log("Promise : " + cevap);
                console.log(JSON_Data);
                var checkStatus = document.getElementById("test_status").innerHTML;
                if (checkStatus == 1) {
                    $.ajax({
                        url: "test_func.php?islem=operations",
                        type: "POST",
                        data: "deger=" + JSON_Data,
                        error: function() {
                            JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();

                        },
                        success: function(cevap) {
                            console.log(cevap);
                            cevap = cevap.replace('\0', '');
                            cevap = cevap.replace(/\0/g, '');
                            var response = cevap.split(" ");
                            if (response[0] != "TCP") {
                                var myObj = JSON.parse(cevap);
                                if (myObj.Result == 1) {
                                    JSalert_Success_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);

                                }
                                if (myObj.Result == 0) {
                                    JSalert_Error_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                }
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                                console.log("Smart Glass Open : " + myObj.Message);
                            } else {
                                document.getElementById("test_mode_object").style = "background-color :green;";
                                document.getElementById("test_mode_text").innerHTML = "TCP Bağlantısı : Aktif";
                                document.getElementById("test_status").innerHTML = 1;
                                JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                            }
                        }
                    });
                } else {
                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.\n Lütfen Programı Tekrar Çalıştırın..");
                    $("#iframeloading").hide();
                    $("#overlay-loader").hide();
                }
            })
            .catch(error => {
                console.log("Promise Error : " + error)
            })

    });


    $("#Multi_Cell_Test").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "MultiCellTest" + '"' + "}";
        console.log(JSON_Data);
        get_TCP_Status()
            .then(cevap => {
                console.log("Promise : " + cevap);
                var checkStatus = document.getElementById("test_status").innerHTML;
                if (checkStatus == 1) {
                    $.ajax({
                        url: "test_func.php?islem=operations",
                        type: "POST",
                        data: "deger=" + JSON_Data,
                        error: function() {
                            JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();

                        },
                        success: function(cevap) {
                            console.log(cevap);
                            cevap = cevap.replace('\0', '');
                            cevap = cevap.replace(/\0/g, '');
                            var response = cevap.split(" ");
                            if (response[0] != "TCP") {
                                var myObj = JSON.parse(cevap);
                                if (myObj.Result == 1) {
                                    JSalert_Success_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);

                                }
                                if (myObj.Result == 0) {
                                    JSalert_Error_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                }
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                                console.log("MultiCellTest : " + myObj.Message);
                            } else {
                                document.getElementById("test_mode_object").style = "background-color :green;";
                                document.getElementById("test_mode_text").innerHTML = "TCP Bağlantısı : Aktif";
                                document.getElementById("test_status").innerHTML = 1;
                                JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();

                            }
                        }
                    });
                } else {
                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.\n Lütfen Programı Tekrar Çalıştırın..");
                    $("#iframeloading").hide();
                    $("#overlay-loader").hide();
                }
            })
            .catch(error => {
                console.log("Promise Error : " + error)
            })

    });

    $("#NFC_Cell_Test").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Kartı Okutunuz..";

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "NFCCellTest" + '"' + "}";
        console.log(JSON_Data);
        get_TCP_Status()
            .then(cevap => {
                console.log("Promise : " + cevap);
                console.log(JSON_Data);
                var checkStatus = document.getElementById("test_status").innerHTML;
                if (checkStatus == 1) {
                    $.ajax({
                        url: "test_func.php?islem=operations",
                        type: "POST",
                        data: "deger=" + JSON_Data,
                        error: function() {
                            JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();

                        },
                        success: function(cevap) {
                            console.log(cevap);
                            cevap = cevap.replace('\0', '');
                            cevap = cevap.replace(/\0/g, '');

                            var response = cevap.split(" ");
                            if (response[0] != "TCP") {
                                var myObj = JSON.parse(cevap);
                                if (myObj.Result == 1) {
                                    JSalert_Success_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);

                                }
                                if (myObj.Result == 0) {
                                    JSalert_Error_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                }
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                                console.log("NFCCellTest : " + myObj.Message);
                            } else {
                                document.getElementById("test_mode_object").style = "background-color :green;";
                                document.getElementById("test_mode_text").innerHTML = "TCP Bağlantısı : Aktif";
                                document.getElementById("test_status").innerHTML = 1;
                                JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();

                            }
                        }
                    });
                } else if (checkStatus == 2) {
                    console.log("checkStatus : " + checkStatus);

                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.\n Lütfen Programı Tekrar Çalıştırın..");
                    $("#iframeloading").hide();
                    $("#overlay-loader").hide();
                } else {
                    console.log("checkStatus : " + checkStatus);

                    update_test_buttons();
                    $("#iframeloading").hide();
                    $("#overlay-loader").hide();
                    JSalert_Success_Message("Test Modu Açık");
                }
            })
            .catch(error => {
                console.log("Promise Error : " + error)
            })


    });




});