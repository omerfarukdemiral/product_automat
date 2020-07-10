function get_TestStatus() {
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
                    document.getElementById("test_mode_text").innerHTML = "Test Modu : Açık";
                    document.getElementById("test_status").innerHTML = 1;
                    status = 1;

                } else if (cevap == 0) {
                    document.getElementById("test_mode_object").style = "background-color :#dd4b39;";
                    document.getElementById("test_mode_text").innerHTML = "Test Modu : Kapalı";
                    document.getElementById("test_status").innerHTML = 0;
                    console.log("Update Top Bar : Test Modu KAPALI..");
                    status = 0;
                } else {
                    document.getElementById("test_mode_object").style = "background-color :orange;";
                    document.getElementById("test_mode_text").innerHTML = "TCP Bağlantı Hatası. Tekrar Kontrol Ediniz.";
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
get_TestStatus()
    .then(cevap => {
        console.log("Promise : " + cevap)
    })
    .catch(error => {
        console.log("Promise Error : " + error)
    })



function get_CardStatus() {
    var status = 3;
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "../layout/test_process.php?islem=card_mode",
            type: "POST",
            error: function(error) {
                reject(error)
            },
            success: function(cevap) {
                console.log("Card Modu UpdateTopBar CEVAP :  " + cevap);
                if (cevap == 1) {
                    console.log("Update Top Bar : Kart Aktif");
                    document.getElementById("card_mode_object").style = "background-color :green;  margin-right:10px;";
                    document.getElementById("card_mode_text").innerHTML = "Kart Aktif";
                    document.getElementById("card_status").innerHTML = 1;
                    status = 1;

                } else {
                    document.getElementById("card_mode_object").style = "background-color :#dd4b39;  margin-right:10px;";
                    document.getElementById("card_mode_text").innerHTML = "NFC Bağlantısı Sağlanamadı.";
                    document.getElementById("card_status").innerHTML = 0;
                    console.log("Update Top Bar : CARD Modu KAPALI..");
                    status = 0;
                }
                resolve(status);
            }
        });
    });
}
get_CardStatus()
    .then(cevap => {
        console.log("Card Promise  : " + cevap)
    })
    .catch(error => {
        console.log("Card Promise Error : " + error)
    })

function loader_control(status) {
    //alert("loader alert");
    console.log("Loader Control  Session : " + status);
    if (status == true) {

        $("#overlay-loader").show();
        $("#iframeloading").show();

        var delayInMilliseconds = 5000; //10 second
        setTimeout(function() {
            $("#iframeloading").hide();
            $("#overlay-loader").hide();
            console.log("Session Proccess : " + status);
        }, delayInMilliseconds);

    }
}

//update_top_bar();