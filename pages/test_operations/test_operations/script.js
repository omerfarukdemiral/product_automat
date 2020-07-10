$(document).ready(function() {
    get_TestStatus();
    update_test_buttons();


    $("#Test_Mode_Open").on("click", function(event) {
        event.preventDefault();
        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "TestOpen" + '"' + "}";
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Test Modu Açılıyor..";
        get_TestStatus()
            .then(cevap => {
                console.log("Promise : " + cevap);
                var checkStatus = document.getElementById("test_status").innerHTML;
                if (checkStatus == 0) {

                    $.ajax({
                        url: "test_func.php?islem=operations",
                        type: "POST",
                        data: "deger=" + JSON_Data,
                        timeout: 10000,
                        error: function() {
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();
                            JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");

                        },
                        success: function(cevap) {
                            /*DÖNEN RESPONSE'DAKİ GEREKSİZ VERİLER TEMİZLENDİ.*/
                            cevap = cevap.replace('\0', '');
                            cevap = cevap.replace(/\0/g, '');
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();
                            console.log(cevap);
                            var response = cevap.split(" ");
                            if (response[0] != "TCP") {
                                var myObj = JSON.parse(cevap);
                                if (myObj.Result == 1) {
                                    document.getElementById("test_status").innerHTML = 1;
                                    console.log("Test Modu Açıldı..");
                                    JSalert_Success_Message(myObj.Message + "\n" + "Type : " + myObj.Type);
                                    var JSON_Data2 = "{" + '"' + "TestMode" + '"' + ":" + 1 + "}";
                                    console.log(JSON_Data2);

                                    $.ajax({
                                        url: "test_func.php?islem=test_db_process",
                                        type: "POST",
                                        data: "deger=" + JSON_Data2,
                                        success: function(cevap) {
                                            console.log("Test Modu Açma Database CEVAP :  " + cevap);
                                            if (cevap == 1) {
                                                console.log("Test Modu Update Başarılı..");
                                                document.getElementById("test_status").innerHTML = 1;
                                                update_test_buttons();
                                                JSalert_Success_Message("Test Modu Update Başarılı..");
                                            } else {
                                                console.log("Hata : Test Modu Update Hatası..");
                                                JSalert_Error_Message("Veritabanına kaydetme işleminde bir hata oluştu.")
                                            }

                                        }
                                    });
                                }
                                if (myObj.Result == 0) {
                                    document.getElementById("test_status").innerHTML = 0;
                                    console.log("Hata : Test Modu Açılamadı..");
                                    JSalert_Error_Message(myObj.Message + "\n" + "Type : " + myObj.Type);
                                }

                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                            } else {
                                document.getElementById("test_mode_object").style = "background-color :orange;";
                                document.getElementById("test_mode_text").innerHTML = cevap;
                                document.getElementById("test_status").innerHTML = 2;
                                JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

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


    $("#Test_Mode_Close").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Test Modu Kapatılıyor..";
        console.log("Test_Mode_Close Click");
        get_TestStatus()
            .then(cevap => {
                console.log("Promise : " + cevap);
                var checkStatus = document.getElementById("test_status").innerHTML;
                if (checkStatus == 1) {

                    var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "TestClose" + '"' + "}";
                    $.ajax({
                        url: "test_func.php?islem=operations",
                        type: "POST",
                        data: "deger=" + JSON_Data,
                        timeout: 10000,
                        error: function() {
                            JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();
                            console.log("Test Mode Close iframeloading Close");

                        },
                        success: function(cevap) {
                            cevap = cevap.replace('\0', '');
                            cevap = cevap.replace(/\0/g, '');
                            console.log(cevap);
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();
                            var response = cevap.split(" ");
                            if (response[0] != "TCP") {

                                var myObj = JSON.parse(cevap);
                                if (myObj.Result == 1) {
                                    document.getElementById("test_status").innerHTML = 0;
                                    console.log("Test Modu Kapatıldı..");
                                    var JSON_Data2 = "{" + '"' + "TestMode" + '"' + ":" + 0 + "}";
                                    console.log(JSON_Data2);

                                    $.ajax({
                                        url: "test_func.php?islem=test_db_process",
                                        type: "POST",
                                        data: "deger=" + JSON_Data2,
                                        success: function(cevap) {
                                            console.log("Test Modu Kapatma Database CEVAP :  " + cevap);
                                            if (cevap == 1) {
                                                console.log("Test Modu Update Başarılı..");
                                                //JSalert_Success_Message("Test Modu Kapatıldı..");
                                                document.getElementById("test_status").innerHTML = 0;
                                                update_test_buttons();
                                                JSalert_Success_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                            } else {
                                                console.log("Hata : Test Modu Update Hatası..");
                                                JSalert_Error_Message("Veritabanına kaydetme işleminde bir hata oluştu.");
                                            }

                                        }
                                    });

                                }
                                if (myObj.Result == 0) {
                                    document.getElementById("test_status").innerHTML = 1;
                                    console.log("Hata : Test Modu Kapatılamadı..");
                                    JSalert_Error_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);

                                }
                            } else {
                                document.getElementById("test_mode_object").style = "background-color :orange;";
                                document.getElementById("test_mode_text").innerHTML = cevap;
                                document.getElementById("test_status").innerHTML = 2;
                                JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

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


    function update_test_buttons() {
        var stat = document.getElementById("test_status").innerHTML;
        console.log("update_test_buttons :  " + stat);
        if (stat == "1") {

            document.getElementById("Test_Mode_Open").disabled = true;
            document.getElementById("Get_Global_Address").disabled = false;
            document.getElementById("Open_Close").disabled = false;
            document.getElementById("Global_Reset").disabled = false;
            document.getElementById("Test_Mode_Close").disabled = false;
            document.getElementById("test_mode_object").style = "background-color :green;";
            document.getElementById("test_mode_text").innerHTML = "Test Modu : Açık";
            document.getElementById("test_status").innerHTML = 1;


        } else {

            document.getElementById("Test_Mode_Open").disabled = false;
            document.getElementById("Get_Global_Address").disabled = true;

            document.getElementById("Open_Close").disabled = true;
            document.getElementById("Global_Reset").disabled = true;
            document.getElementById("Test_Mode_Close").disabled = true;
            document.getElementById("test_mode_object").style = "background-color :#dd4b39;";
            document.getElementById("test_mode_text").innerHTML = "Test Modu : Kapalı";
            document.getElementById("test_status").innerHTML = 0;

        }
    }

    $("#Get_Global_Address").on("click", function(event) {
        event.preventDefault();

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "GlobalAddressSend" + '"' + "}";
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Global Adres Alınıyor..";

        get_TestStatus()
            .then(cevap => {
                console.log("Promise : " + cevap);
                var checkStatus = document.getElementById("test_status").innerHTML;
                console.log("checkStatus : " + checkStatus);
                if (checkStatus == 1) {
                    $.ajax({
                        url: "test_func.php?islem=operations",
                        type: "POST",
                        data: "deger=" + JSON_Data,
                        timeout: 300000,
                        error: function() {
                            $("#iframeloading").hide();
                            $("#overlay-loader").hide();
                            JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                        },
                        success: function(cevap) {
                            console.log("Global Adres Al CEVAP  : " + cevap);
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
                                console.log("Global Adres Al : " + myObj.Message);
                            } else {
                                document.getElementById("test_mode_object").style = "background-color :orange;";
                                document.getElementById("test_mode_text").innerHTML = cevap;
                                document.getElementById("test_status").innerHTML = 2;
                                JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

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

    $("#Get_Address").on("click", function(event) {
        event.preventDefault();

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "GlobalAddressTell" + '"' + "}";
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Adres Alınıyor..";
        get_TestStatus()
            .then(cevap => {
                console.log("Promise : " + cevap);
                var checkStatus = document.getElementById("test_status").innerHTML;
                if (checkStatus == 1) {
                    $.ajax({
                        url: "test_func.php?islem=operations",
                        type: "POST",
                        data: "deger=" + JSON_Data,
                        timeout: 10000,
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
                                    JSalert_Success_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);

                                }
                                if (myObj.Result == 0) {
                                    JSalert_Error_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                }
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                                console.log("Adres Al : " + myObj.Message);

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


    $("#Open_Close").on("click", function(event) {
        event.preventDefault();


        var Open_Close_Count = document.getElementById("Open_Close_Count").value;
        if (Open_Close_Count != "") {
            $("#overlay-loader").show();
            $("#iframeloading").show();

            document.getElementById("loader_messages").innerHTML = "İşlem Devam Ediyor..";
            var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "GlobalOpenClose" + '"' + "}";
            var i = 0;
            Recursive_Open_Close();

            function Recursive_Open_Close() {
                get_TestStatus()
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
                                    cevap = cevap.replace('\0', '');
                                    cevap = cevap.replace(/\0/g, '');
                                    var response = cevap.split(" ");
                                    if (response[0] != "TCP") {
                                        var myObj = JSON.parse(cevap);
                                        if (myObj.Result == 1) {
                                            i++;
                                            if (i < Open_Close_Count) {
                                                Recursive_Open_Close();
                                                document.getElementById("loader_messages").innerHTML = " Açma Kapama İşlem Sayısı : " + i;
                                                console.log("Open_Close_Count : " + Open_Close_Count);
                                            } else {
                                                $("#iframeloading").hide();
                                                $("#overlay-loader").hide();
                                                JSalert_Success_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                            }
                                        }
                                        if (myObj.Result == 0) {
                                            JSalert_Error_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
   						$("#iframeloading").hide();
                                	        $("#overlay-loader").hide();
                                        }
                                     
                                        console.log("Aç Kapa : " + myObj.Message);
                                    } else {
                                        document.getElementById("test_mode_object").style = "background-color :orange;";
                                        document.getElementById("test_mode_text").innerHTML = cevap;
                                        document.getElementById("test_status").innerHTML = 2;
                                        JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

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
            }
        } else {
            $("#iframeloading").hide();
            $("#overlay-loader").hide();
            JSalert_Error_Message("Tekrar Sayısını Giriniz..");

        }

    });

    $("#Single_Cell_Test").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "SingleCellTest" + '"' + "}";
        $.ajax({
            url: "test_func.php?islem=operations",
            type: "POST",
            data: "deger=" + JSON_Data,
            timeout: 10000,
            error: function() {
                JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                $("#iframeloading").hide();
                $("#overlay-loader").hide();

            },
            success: function(cevap) {
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
                    document.getElementById("test_mode_object").style = "background-color :orange;";
                    document.getElementById("test_mode_text").innerHTML = cevap;
                    document.getElementById("test_status").innerHTML = 2;
                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

                }
            }
        });

    });


    $("#Multi_Cell_Test").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "SingleCellTest" + '"' + "}";
        $.ajax({
            url: "test_func.php?islem=operations",
            type: "POST",
            data: "deger=" + JSON_Data,
            timeout: 10000,
            error: function() {
                JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                $("#iframeloading").hide();
                $("#overlay-loader").hide();

            },
            success: function(cevap) {
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
                    document.getElementById("test_mode_object").style = "background-color :orange;";
                    document.getElementById("test_mode_text").innerHTML = cevap;
                    document.getElementById("test_status").innerHTML = 2;
                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

                }
            }
        });

    });

    $("#NFC_Cell_Test").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Kartı Okutunuz..";

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "SingleCellTest" + '"' + "}";
        $.ajax({
            url: "test_func.php?islem=operations",
            type: "POST",
            data: "deger=" + JSON_Data,
            timeout: 10000,
            error: function() {
                JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                $("#iframeloading").hide();
                $("#overlay-loader").hide();

            },
            success: function(cevap) {
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
                    document.getElementById("test_mode_object").style = "background-color :orange;";
                    document.getElementById("test_mode_text").innerHTML = cevap;
                    document.getElementById("test_status").innerHTML = 2;
                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

                }
            }
        });

    });


    $("#SmartGlass_Open").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";

        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "OpenSmartGlass" + '"' + "}";
        $.ajax({
            url: "test_func.php?islem=operations",
            type: "POST",
            data: "deger=" + JSON_Data,
            timeout: 10000,
            error: function() {
                JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");
                $("#iframeloading").hide();
                $("#overlay-loader").hide();

            },
            success: function(cevap) {
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
                    document.getElementById("test_mode_object").style = "background-color :orange;";
                    document.getElementById("test_mode_text").innerHTML = cevap;
                    document.getElementById("test_status").innerHTML = 2;
                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

                }
            }
        });

    });

    $("#SmartGlass_Close").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        var checkStatus = document.getElementById("test_status").innerHTML;
        var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "CloseSmartGlass" + '"' + "}";
        $.ajax({
            url: "test_func.php?islem=operations",
            type: "POST",
            data: "deger=" + JSON_Data,
            timeout: 10000,
            error: function() {
                $("#iframeloading").hide();
                $("#overlay-loader").hide();
                JSalert_Error_Message("TCP Bağlantısı Zaman Aşımına Uğradı.");

            },
            success: function(cevap) {
                console.log("Promise : " + cevap);
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
                    console.log("Smart Glass Close : " + myObj.Message);

                } else {
                    document.getElementById("test_mode_object").style = "background-color :orange;";
                    document.getElementById("test_mode_text").innerHTML = cevap;
                    document.getElementById("test_status").innerHTML = 2;
                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");
                }
            }

        });

    });


    $("#Global_Reset").on("click", function(event) {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";
        get_TestStatus()
            .then(cevap => {
                console.log("Promise : " + cevap);
                var checkStatus = document.getElementById("test_status").innerHTML;
                if (checkStatus == 1) {
                    var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"' + "GlobalReset" + '"' + "}";
                    $.ajax({
                        url: "test_func.php?islem=operations",
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
                            var myObj = JSON.parse(cevap);
                            var response = cevap.split(" ");
                            if (response[0] != "TCP") {

                                if (myObj.Result == 1) {
                                    JSalert_Success_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);

                                }
                                if (myObj.Result == 0) {
                                    JSalert_Error_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                }
                                $("#iframeloading").hide();
                                $("#overlay-loader").hide();
                                console.log("Global Reset : " + myObj.Message);
                            } else {
                                document.getElementById("test_mode_object").style = "background-color :orange;";
                                document.getElementById("test_mode_text").innerHTML = cevap;
                                document.getElementById("test_status").innerHTML = 2;
                                JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");

                            }

                        }
                    });
                } else {
                    $("#iframeloading").hide();
                    $("#overlay-loader").hide();
                    JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.\n Lütfen Programı Tekrar Çalıştırın..");
                }
            })
            .catch(error => {
                console.log("Promise Error : " + error)
            })
    });



})