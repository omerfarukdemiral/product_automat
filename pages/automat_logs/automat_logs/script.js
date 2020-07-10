$(document).ready(function() {

    var log_lines_marwiz = new Array();
    var log_lines_tcp = new Array();
    var log_lines_nfc = new Array();
    var log_lines_uart1 = new Array();
    var log_lines_uart2 = new Array();
    var log_lines_uart3 = new Array();
    var log_lines_uart4 = new Array();
    var log_lines2_uart1 = new Array();
    var log_lines2_uart2 = new Array();
    var log_lines2_uart3 = new Array();
    var log_lines2_uart4 = new Array();


    /*function Get_Uart1_Log3() {

        return new Promise((resolve, reject) => {

            jQuery.get('../../logger_port3.txt', function(data) {

                //alert(data);
                lines = data.split("\n");

                $.each(lines, function(n, elem) {
                    log_lines_uart1[n] = elem;
                });
            });
            resolve(1);

        });
    }*/


    function getLogStatus() {
        $("#overlay-loader").show();
        $("#iframeloading").show();
        console.log("getLogs    --------------------->");

        /*  Get_Uart1_Log3()
            .then(cevap => {
                console.log("Promise Success : " + cevap)

            })
            .catch(error => {
                console.log("Promise Error : " + error)
            })
        */

        Get_Uart1_Log1();
        Get_Uart1_Log2();
        Get_Uart1_Log3();
        Get_Uart1_Log4();
        Get_Marwiz_Log();
        Get_NFC_Log();
        Get_TCP_Log();

        console.log("getLogs   <---------------------");


        $("#iframeloading").hide();
        $("#overlay-loader").hide();

    }
    getLogStatus();

    function Get_NFC_Log() {
        jQuery.get('../../logger_nfc.txt', function(data) {

            //alert(data);
            lines = data.split("\n");

            $.each(lines, function(n, elem) {
                var x = n % 2;
                if (x == 0) {
                    log_lines_nfc[n] = elem;
                } else {
                    log_lines_nfc[n] = '<span style="color :#E74C3C; background-color: #f4f4f4;">' + elem + '</span>';

                }
            });
        });
    }

    function Get_TCP_Log() {
        jQuery.get('../../logger_tcp.txt', function(data) {

            //alert(data);
            lines = data.split("\n");

            $.each(lines, function(n, elem) {
                var x = n % 2;
                if (x == 0) {
                    log_lines_tcp[n] = elem;
                } else {
                    log_lines_tcp[n] = '<span style="color :#E74C3C; background-color: #f4f4f4;">' + elem + '</span>';

                }
            });
        });
    }

    function Get_Marwiz_Log() {
        jQuery.get('../../logger.txt', function(data) {

            //alert(data);
            lines = data.split("\n");

            $.each(lines, function(n, elem) {
                var x = n % 2;
                if (x == 0) {
                    log_lines_marwiz[n] = elem;
                } else {
                    log_lines_marwiz[n] = '<span style="color :#E74C3C; background-color: #f4f4f4;">' + elem + '</span>';

                }
            });
        });
    }

    function Get_Uart1_Log1() {
        jQuery.get('../../logger_port1.txt', function(data) {

            //alert(data);
            lines = data.split("\n");

            var line_index = 0;
            $.each(lines, function(n, elem) {
                var x = line_index % 2;
                var communication_check = elem.includes("HABERLEŞME GELDİ");
                var write_check = elem.includes("WRİTE DATA");
                var read_check = elem.includes("READ DATA");
                var sensor_check = elem.includes("SEND SENSOR COUNT DATA");
                if (communication_check == false && write_check == false && read_check == false && sensor_check == false) {
                    if (x == 0) {
                        line_index++;
                        log_lines_uart1[line_index] = elem;
                    } else {
                        line_index++;
                        log_lines_uart1[line_index] = '<span style="color :#E74C3C; background-color: #f4f4f4;">' + elem + '</span>';
                    }
                }
            });
        });
    }

    function Get_Uart1_Log2() {
        jQuery.get('../../logger_port2.txt', function(data) {

            //alert(data);
            lines = data.split("\n");

            var line_index = 0;
            $.each(lines, function(n, elem) {
                var x = line_index % 2;
                var communication_check = elem.includes("HABERLEŞME GELDİ");
                var write_check = elem.includes("WRİTE DATA");
                var read_check = elem.includes("READ DATA");
                var sensor_check = elem.includes("SEND SENSOR COUNT DATA");
                if (communication_check == false && write_check == false && read_check == false && sensor_check == false) {
                    if (x == 0) {
                        line_index++;
                        log_lines_uart1[line_index] = elem;
                    } else {
                        line_index++;
                        log_lines_uart1[line_index] = '<span style="color :#E74C3C; background-color: #f4f4f4;">' + elem + '</span>';
                    }
                }
            });
        });
    }

    function Get_Uart1_Log3() {
        jQuery.get('../../logger_port3.txt', function(data) {


            //alert(data);
            lines = data.split("\n");

            var line_index = 0;
            $.each(lines, function(n, elem) {
                var x = line_index % 2;
                var communication_check = elem.includes("HABERLEŞME GELDİ");
                var write_check = elem.includes("WRİTE DATA");
                var read_check = elem.includes("READ DATA");
                var sensor_check = elem.includes("SEND SENSOR COUNT DATA");
                if (communication_check == false && write_check == false && read_check == false && sensor_check == false) {
                    if (x == 0) {
                        line_index++;
                        log_lines_uart1[line_index] = elem;
                    } else {
                        line_index++;
                        log_lines_uart1[line_index] = '<span style="color :#E74C3C; background-color: #f4f4f4;">' + elem + '</span>';
                    }
                }
            });
        });
    }

    function Get_Uart1_Log4() {
        jQuery.get('../../logger_port4.txt', function(data) {

            //alert(data);
            lines = data.split("\n");

            var line_index = 0;
            $.each(lines, function(n, elem) {
                var x = line_index % 2;
                var communication_check = elem.includes("HABERLEŞME GELDİ");
                var write_check = elem.includes("WRİTE DATA");
                var read_check = elem.includes("READ DATA");
                var sensor_check = elem.includes("SEND SENSOR COUNT DATA");
                if (communication_check == false && write_check == false && read_check == false && sensor_check == false) {
                    if (x == 0) {
                        line_index++;
                        log_lines_uart1[line_index] = elem;
                    } else {
                        line_index++;
                        log_lines_uart1[line_index] = '<span style="color :#E74C3C; background-color: #f4f4f4;">' + elem + '</span>';
                    }
                }
            });
        });
    }



    /*
        function readTextFile(file) {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, false);
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status == 0) {
                        var allText = rawFile.responseText;
                        console.log(allText);
                        //elem.includes("\n");
                        console.log(typeof rawFile);
                        var allText = allText.replace('\n', "<br>");
                        document.getElementById("loadInfo").innerHTML = allText;
                    }
                }
            }
            rawFile.send(null);
        }
         LOG GÖRÜNTÜLEME BUTONLARI AJAX FONKSİYONLARI  */

    /* #region LOG GÖRÜNTÜLEME */


    $('#marwiz_View').click(function() {
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("log_title").innerHTML = "MARWİZ LOGGER";
        console.log("marwiz_View View Clicked..");
        var i = 0;
        document.getElementById("loadInfo").innerHTML = log_lines_marwiz.join("<br>");
        document.getElementById("bottomElement").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        console.log("marwiz_View LOGGER Ekrana basıldı.");

        var delayInMilliseconds = 3000; //3 second
        setTimeout(function() {

            $("#iframeloading").hide();
            $("#overlay-loader").hide();

        }, delayInMilliseconds);


    });

    $('#NFC_View').click(function() {
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("log_title").innerHTML = "NFC LOGGER";
        console.log("NFC_View View Clicked..");
        var i = 0;
        Get_NFC_Log();
        document.getElementById("loadInfo").innerHTML = log_lines_nfc.join("<br>");
        document.getElementById("bottomElement").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        console.log("NFC_View LOGGER Ekrana basıldı.");
        var delayInMilliseconds = 3000; //3 second
        setTimeout(function() {

            $("#iframeloading").hide();
            $("#overlay-loader").hide();

        }, delayInMilliseconds);


    });

    $('#TCP_View').click(function() {
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("log_title").innerHTML = "TCP LOGGER";
        console.log("TCP_View View Clicked..");
        Get_TCP_Log();
        document.getElementById("loadInfo").innerHTML = log_lines_tcp.join("<br>");
        document.getElementById("bottomElement").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        console.log("TCP_View LOGGER Ekrana basıldı.");

        var delayInMilliseconds = 3000; //3 second
        setTimeout(function() {

            $("#iframeloading").hide();
            $("#overlay-loader").hide();

        }, delayInMilliseconds);


    });


    $('#Uart1_log1_View').click(function() {
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("log_title").innerHTML = "Uart1 LOGGER";
        console.log("Uart1_log1_switch View Clicked..");
        Get_Uart1_Log1();
        document.getElementById("loadInfo").innerHTML = log_lines_uart1.join("<br>");
        //console.log("log_lines_uart1 : " + log_lines_uart1);
        document.getElementById("bottomElement").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        console.log("Uart1_log1_switch LOGGER Ekrana basıldı.");

        var delayInMilliseconds = 3000; //3 second
        setTimeout(function() {

            $("#iframeloading").hide();
            $("#overlay-loader").hide();

        }, delayInMilliseconds);
        //document.getElementById("loadInfo").innerHTML = log_lines_uart1.join("<br>");


    });




    $('#Uart1_log2_View').click(function() {
        $("#overlay-loader").show();
        $("#iframeloading").show();
        document.getElementById("log_title").innerHTML = "Uart2 LOGGER";
        console.log("Uart2 View Clicked..");
        Get_Uart1_Log2();

        document.getElementById("loadInfo").innerHTML = log_lines_uart2.join("<br>");
        console.log("Uart2 LOGGER Ekrana basıldı.");
        document.getElementById("bottomElement").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        var delayInMilliseconds = 3000; //3 second
        setTimeout(function() {
            $("#iframeloading").hide();
            $("#overlay-loader").hide();

        }, delayInMilliseconds);

    });


    $('#Uart1_log3_View').click(function() {
        document.getElementById("log_title").innerHTML = "Uart3 LOGGER";
        console.log("Uart3 View Clicked..");
        $("#overlay-loader").show();
        $("#iframeloading").show();
        Get_Uart1_Log3();

        document.getElementById("loadInfo").innerHTML = log_lines_uart3.join("<br>");
        console.log("Uart3 LOGGER Ekrana basıldı.");
        document.getElementById("bottomElement").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        var delayInMilliseconds = 3000; //3 second
        setTimeout(function() {
            $("#iframeloading").hide();
            $("#overlay-loader").hide();

        }, delayInMilliseconds);

    });

    $('#Uart1_log4_View').click(function() {
        document.getElementById("log_title").innerHTML = "Uart4 LOGGER";
        console.log("Uart4 View Clicked..");
        $("#overlay-loader").show();
        $("#iframeloading").show();
        Get_Uart1_Log4();

        document.getElementById("loadInfo").innerHTML = log_lines_uart4.join("<br>");
        console.log("Uart4 LOGGER Ekrana basıldı.");
        document.getElementById("bottomElement").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        var delayInMilliseconds = 3000; //3 second
        setTimeout(function() {
            $("#iframeloading").hide();
            $("#overlay-loader").hide();

        }, delayInMilliseconds);

    });
    /* ---------------------------------------------------------  */

    //#region
    /* LOG SİLME BUTONLARI AJAX FONKSİYONLARI  */
    $('#marwiz_Delete').click(function() {
        $.ajax({
            type: "POST",
            url: "automat_logs/log_delete.php?LOG=5",
            success: function(cevap) {
                console.log("marwiz_Delete Butonu : " + cevap);
                if (cevap == 1) {

                    JSalert_Message();
                } else {
                    JSalert_Error_Messages();
                }
            }
        });
    });

    $('#NFC_Delete').click(function() {
        $.ajax({
            type: "POST",
            url: "automat_logs/log_delete.php?LOG=6",
            success: function(cevap) {
                console.log("NFC_Delete Butonu : " + cevap);
                if (cevap == 1) {

                    JSalert_Message();
                } else {
                    JSalert_Error_Messages();
                }
            }
        });
    });


    $('#TCP_Delete').click(function() {
        $.ajax({
            type: "POST",
            url: "automat_logs/log_delete.php?LOG=7",
            success: function(cevap) {
                console.log("TCP_Delete Butonu : " + cevap);
                if (cevap == 1) {

                    JSalert_Message();
                } else {
                    JSalert_Error_Messages();
                }
            }
        });
    });


    $('#Uart1_log1_Delete').click(function() {
        $.ajax({
            type: "POST",
            url: "automat_logs/log_delete.php?LOG=1",
            success: function(cevap) {
                console.log("Uart1_log1_Delete Butonu : " + cevap);
                if (cevap == 1) {
                    // document.getElementById("Uart1_log1_Save").style.visibility = "hidden";
                    // document.getElementById("Uart1_log1_Delete").style.visibility = "hidden";

                    JSalert_Message();
                } else {
                    JSalert_Error_Messages();
                }
            }
        });
    });

    $('#Uart1_log2_Delete').click(function() {
        $.ajax({
            type: "POST",
            url: "automat_logs/log_delete.php?LOG=2",
            success: function(cevap) {
                console.log("Uart1_log2_Delete Butonu : " + cevap);

                if (cevap == 1) {
                    // document.getElementById("TCP_Save").style.visibility = "hidden";
                    // document.getElementById("TCP_Delete").style.visibility = "hidden";
                    JSalert_Message();
                } else {
                    JSalert_Error_Messages();
                }
            }
        });
    });

    $('#Uart1_log3_Delete').click(function() {
        $.ajax({
            type: "POST",
            url: "automat_logs/log_delete.php?LOG=3",
            success: function(cevap) {
                console.log("Uart1_log3_Delete Butonu : " + cevap);

                if (cevap == 1) {

                    JSalert_Message();
                    // document.getElementById("PUMP_Save").style.visibility = "hidden";
                    // document.getElementById("PUMP_Delete").style.visibility = "hidden";

                } else {
                    JSalert_Error_Messages();
                }
            }
        });
    });

    $('#Uart1_log4_Delete').click(function() {
        $.ajax({
            type: "POST",
            url: "automat_logs/log_delete.php?LOG=4",
            success: function(cevap) {
                console.log("Uart1_log4_Delete Butonu : " + cevap);

                if (cevap == 1) {
                    //  document.getElementById("DB_Save").style.visibility = "hidden";
                    //  document.getElementById("DB_Delete").style.visibility = "hidden";
                    JSalert_Message();
                } else {
                    JSalert_Error_Messages();
                }
            }
        });
    });

    /* -------------------------------------------- */



    /*   $('#usc_switch').change(function() {
           event.preventDefault();
           $("#overlay-loader").show();
           $("#iframeloading").show();
           //   document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";
           if ($(this).prop('checked')) {
               var Data = "Log_Open_USC";
           } else {
               var Data = "Log_Close_USC";
           }
           //showArray();

           console.log("Data : " + Data);
           $.ajax({
               url: "test_func.php?islem=operations",
               type: "POST",
               data: "deger=" + Data,
               success: function(cevap) {
                   console.log("USC LOG CEVAP : " + cevap);
                   $("#iframeloading").hide();
                   $("#overlay-loader").hide();
                   var usc_switch = document.getElementById("usc_switch");
                   if (usc_switch.checked == true) {
                       document.getElementById("USC_View").style.visibility = "visible";
                       document.getElementById("USC_Save").style.visibility = "hidden";
                       document.getElementById("USC_Delete").style.visibility = "hidden";
                       console.log("USC LOG Açıldı.");
                       Get_Uart1_Log1();

                   } else {
                       console.log("USC LOG Kapatıldı.");
                       document.getElementById("USC_View").style.visibility = "hidden";
                       document.getElementById("USC_Save").style.visibility = "visible";
                       document.getElementById("USC_Delete").style.visibility = "visible";
                       document.getElementById("loadInfo").innerHTML = "";

                   }

                   JSalert_Message();
               }
           });
       });

    $('#tcp_switch').change(function() {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        //   document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";
        if ($(this).prop('checked')) {
            var Data = "Log_Open_TCP";
        } else {
            var Data = "Log_Close_TCP";
        }

        console.log("Data : " + Data);
        $.ajax({
            url: "test_func.php?islem=operations",
            type: "POST",
            data: "deger=" + Data,
            success: function(cevap) {
                console.log("TCP LOG CEVAP : " + cevap);

                $("#iframeloading").hide();
                $("#overlay-loader").hide();
                var tcp_switch = document.getElementById("tcp_switch");
                if (tcp_switch.checked == true) {
                    console.log("TCP LOG Açıldı.");
                    document.getElementById("TCP_View").style.visibility = "visible";
                    document.getElementById("TCP_Delete").style.visibility = "hidden";
                    document.getElementById("TCP_Save").style.visibility = "hidden";
                    Get_Uart1_Log2();

                } else {
                    console.log("TCP LOG Kapatıldı.");
                    document.getElementById("TCP_View").style.visibility = "hidden";
                    document.getElementById("TCP_Save").style.visibility = "visible";
                    document.getElementById("TCP_Delete").style.visibility = "visible";


                }

                JSalert_Message();
            }
        });
    });

    $('#pump_switch').change(function() {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        //   document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";
        if ($(this).prop('checked')) {
            var Data = "Log_Open_PUMP";
        } else {
            var Data = "Log_Close_PUMP";
        }

        console.log("Data : " + Data);
        $.ajax({
            url: "test_func.php?islem=operations",
            type: "POST",
            data: "deger=" + Data,
            success: function(cevap) {
                console.log("PUMP LOG CEVAP : " + cevap);
                $("#iframeloading").hide();
                $("#overlay-loader").hide();
                var pump_switch = document.getElementById("pump_switch");
                if (pump_switch.checked == true) {
                    console.log("Pompa LOG Açıldı.");
                    document.getElementById("PUMP_View").style.visibility = "visible";
                    document.getElementById("PUMP_Delete").style.visibility = "hidden";
                    document.getElementById("PUMP_Save").style.visibility = "hidden";
                    Get_PUMP_Log();

                } else {
                    console.log("Pompa LOG Kapatıldı.");
                    document.getElementById("PUMP_View").style.visibility = "hidden";
                    document.getElementById("PUMP_Delete").style.visibility = "visible";
                    document.getElementById("PUMP_Save").style.visibility = "visible";
                }

                JSalert_Message();
            }
        });
    });

    $('#db_switch').change(function() {
        event.preventDefault();
        $("#overlay-loader").show();
        $("#iframeloading").show();
        //   document.getElementById("loader_messages").innerHTML = "Lütfen Bekleyiniz..";
        if ($(this).prop('checked')) {
            var Data = "Log_Open_DB";
        } else {
            var Data = "Log_Close_DB";
        }

        console.log("Data : " + Data);
        $.ajax({
            url: "test_func.php?islem=operations",
            type: "POST",
            data: "deger=" + Data,
            success: function(cevap) {
                console.log("DB LOG CEVAP : " + cevap);
                $("#iframeloading").hide();
                $("#overlay-loader").hide();
                var db_switch = document.getElementById("db_switch");
                if (db_switch.checked == true) {
                    console.log("Database LOG Açıldı.");
                    document.getElementById("DB_View").style.visibility = "visible";
                    document.getElementById("DB_Delete").style.visibility = "hidden";
                    document.getElementById("DB_Save").style.visibility = "hidden";
                    Get_DB_Log();

                } else {
                    console.log("Database LOG Kapatıldı.");
                    document.getElementById("DB_View").style.visibility = "hidden";
                    document.getElementById("DB_Delete").style.visibility = "visible";
                    document.getElementById("DB_Save").style.visibility = "visible";

                }

                JSalert_Message();
            }
        });
    });*/


})