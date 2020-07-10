var Menu = (function() {

    var $container = $('#rm-container'),
        $cover = $container.find('div.rm-cover'),
        $middle = $container.find('div.rm-middle'),
        $right = $container.find('div.rm-cover-right'),
        $open = $cover.find('a.rm-button-open'),
        $close = $right.find('span.rm-close'),
        $details = $container.find('a.rm-viewdetails'),

        init = function() {

            initEvents();

        },
        initEvents = function() {

            $open.on('click', function(event) {

                openMenu();
                return false;

            });

            $close.on('click', function(event) {

                closeMenu();
                return false;

            });

            $details.on('click', function(event) {

                $container.removeClass('rm-in').children('div.rm-modal').remove();
                viewDetails($(this));
                return false;

            });

        },
        openMenu = function() {

            $container.addClass('rm-open');
            document.getElementById("rm-botton-open").style.visibility = "hidden";

        },
        closeMenu = function() {

            $container.removeClass('rm-open rm-nodelay rm-in');

            function myFunction() {
                document.getElementById("rm-botton-open").style.visibility = "visible";
            }
            setTimeout(myFunction, 800)

        },
        viewDetails = function(recipe) {

            var title = recipe.text(),
                ID = recipe.data('id'),
                Address = recipe.data('address'),
                Status = recipe.data('status'),
                ErrorDescription = recipe.data('errordescription'),
                ProductBarcode = recipe.data('productbarcode'),
                ProductName = recipe.data('productname'),
                ProductPrice = recipe.data('productprice'),
                WorkingTotal = recipe.data('workingtotal'),
                description = recipe.parent().next().text();

            //alert("Status" + Status);
            if (Status == 0) {
                type = "success";
            } else if (Status == 2) {
                type = "warning";
            } else if (Status == 17) {
                type = "secondary";
            } else {
                type = "danger";
            }
            var stat = document.getElementById("test_status").innerHTML;
            if (stat == 1) {

                var $modal = $('<div class="rm-modal rm-modal-' + type + '"><h5 class="pull-left">Hücre No : ' + ID + ' - ' + Address + '</h5> <button id="Cell_CheckStatus" data-name="' + ID + '" type="submit" class="btn btn-primary pull-right">Durum Kontrol</button><br><p> Ürün Durumu : ' + ErrorDescription + '</p><p> Ürün Barkodu : ' + ProductBarcode + '</p><p> Ürün Adı : ' + ProductName + '</p><p> Ürün Fiyat : ' + ProductPrice + ' TL</p><p> Kullanım Sayısı : <strong>' + WorkingTotal + '</strong></p><input class="pull-left" value="1"; style="margin-right:3px; font-size:23px;" type="number" id="Cell_Open_Close_Count" name="Cell_Open_Close_Count" min="1" max="20"> <button  id="Cell_Open_Close" data-name="' + ID + '"  type="submit" class="btn btn-danger pull-left">Hücreyi Aç Kapat</button><button id="Cell_Reset" data-name="' + ID + '" type="submit" class="btn btn-success pull-right">Hücreyi Resetle</button><span class="rm-close-modal">x</span></div>');
            }
            if (stat == 0) {
                var $modal = $('<div class="rm-modal rm-modal-' + type + '"><h5>Hücre No : ' + ID + ' - ' + Address + '</h5><p> Ürün Durumu : ' + ErrorDescription + '</p><p> Ürün Barkodu : ' + ProductBarcode + '</p><p> Ürün Adı : ' + ProductName + '</p><p> Ürün Fiyat : ' + ProductPrice + ' TL</p><p> Kullanım Sayısı : ' + WorkingTotal + '</p><span class="rm-close-modal">x</span></div>');

            }

            $modal.appendTo($container);

            var h = $modal.outerHeight(true);
            $modal.css('margin-top', -h / 2);

            setTimeout(function() {

                $container.addClass('rm-in rm-nodelay');

                $modal.find('span.rm-close-modal').on('click', function() {

                    $container.removeClass('rm-in');

                });

            }, 0);

            $("#Cell_Reset").on("click", function(event) {
                event.preventDefault();

                var ShelfNo = $(this).attr('data-name');
                console.log("Hücre No  : " + ShelfNo + "- Command : " + "CellReset");
                $("#overlay-loader").show();
                $("#iframeloading").show();
                var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"CellReset"' + "," + '"' + "ShelfNo" + '"' + ":" + '"' + ShelfNo + '"' + "}";
                $.ajax({
                    url: "../test_operations/test_func.php?islem=operations_cell",
                    type: "POST",
                    data: "deger=" + JSON_Data,
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
                            console.log("Hücre Reset Cevap : " + cevap);

                        } else {
                            document.getElementById("test_mode_object").style = "background-color :orange;";
                            document.getElementById("test_mode_text").innerHTML = cevap;
                            document.getElementById("test_status").innerHTML = 2;
                            JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");
                        }

                    }
                });

            });
            $("#Cell_Open_Close").on("click", function(event) {

                event.preventDefault();


                var ShelfNo = $(this).attr('data-name');
                var Cell_Open_Close_Count = document.getElementById("Cell_Open_Close_Count").value;

                console.log("Hücre No  : " + ShelfNo + "-Command : " + "CellOpenClose");
                console.log("Cell Count :" + Cell_Open_Close_Count);
                $("#overlay-loader").show();
                $("#iframeloading").show();
                var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"CellOpenClose"' + "," + '"' + "ShelfNo" + '"' + ":" + '"' + ShelfNo + '"' + "}";
                var i = 0;

                Cell_Recursive_Open_Close();

                function Cell_Recursive_Open_Close() {
                    $.ajax({
                        url: "../test_operations/test_func.php?islem=operations_cell",
                        type: "POST",
                        data: "deger=" + JSON_Data,
                        success: function(cevap) {
                            cevap = cevap.replace('\0', '');
                            cevap = cevap.replace(/\0/g, '');
                            console.log("Cevap : " + cevap);
                            var response = cevap.split(" ");
                            if (response[0] != "TCP") {
                                var myObj = JSON.parse(cevap);
                                if (myObj.Result == 1) {
                                    console.log("myObj.Message : " + myObj.Message);
                                    i++;
                                    if (i < Cell_Open_Close_Count) {
                                        Cell_Recursive_Open_Close();
                                        console.log("Cell Count : " + i);
                                        document.getElementById("loader_messages").innerHTML = " Hücre İşlem Sayısı : " + i;

                                    } else {
                                        $("#iframeloading").hide();
                                        $("#overlay-loader").hide();
                                        JSalert_Success_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                    }
                                }
                                if (myObj.Result == 0) {
                                    console.log("myObj.Message : " + myObj.Message);

                                    JSalert_Error_Message("Message : " + myObj.Message + "\n" + "Type : " + myObj.Type);
                                }

                                console.log("Hücre Aç Kapat Cevap : " + cevap);

                            } else {
                                document.getElementById("test_mode_object").style = "background-color :orange;";
                                document.getElementById("test_mode_text").innerHTML = cevap;
                                document.getElementById("test_status").innerHTML = 2;
                                JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");
                            }

                        }
                    });
                }


            });

            $("#Cell_CheckStatus").on("click", function(event) {
                event.preventDefault();


                var ShelfNo = $(this).attr('data-name');
                console.log("Hücre No  : " + ShelfNo + "-Command : " + "Cell_CheckStatus");
                $("#overlay-loader").show();
                $("#iframeloading").show();
                var JSON_Data = "{" + '"' + "Command" + '"' + ":" + '"CellCheckStatus"' + "," + '"' + "ShelfNo" + '"' + ":" + '"' + ShelfNo + '"' + "}";
                console.log(JSON_Data);
                $.ajax({
                    url: "../test_operations/test_func.php?islem=operations_cell",
                    type: "POST",
                    data: "deger=" + JSON_Data,
                    success: function(cevap) {
                        JSalert_Success_Message("Cell_CheckStatus Mesajı Gönderildi..." + cevap);


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
                            console.log("Hücre Aç Kapat Cevap : " + cevap);

                        } else {
                            document.getElementById("test_mode_object").style = "background-color :orange;";
                            document.getElementById("test_mode_text").innerHTML = cevap;
                            document.getElementById("test_status").innerHTML = 2;
                            JSalert_Error_Message("TCP Bağlantısı Sağlanamadı.");
                        }

                    }
                });

            });

        };

    return { init: init };

})();