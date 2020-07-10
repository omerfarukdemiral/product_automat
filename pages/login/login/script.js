$(document).ready(function() {


    $("#login_submit").on("click", function(event) {
        event.preventDefault();
        var UserName = document.getElementById("UserName").value;
        var UserPass = document.getElementById("UserPass").value;

        // document.getElementById('login_message').innerHTML = 'Giriş Yapılıyor.';
        var JSON_Data = "{" + '"' + "UserName" + '"' + ":" + '"' + UserName + '"' + "," + '"' + "UserPass" + '"' + ":" + '"' + UserPass + '"' + "}";

        $.ajax({
            url: "../../pages/login/session.php?login=true",
            type: "POST",
            data: "deger=" + JSON_Data,
            success: function(cevap) {
                console.log(cevap);
                if (cevap == 1) {

                    //alert(cevap);
                    window.location.href = "../../pages/dashboard/";

                } else {
                    alert("Giriş Yapılamadı. Tekrar Deneyiniz.");
                }
            }
        });
    });



});