function JSalert_reboot() {
    swal({
            title: "Reboot",
            text: "Cihaz Yeniden Başlatılsın mı ?",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "Hayır",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Evet",
            closeOnConfirm: false
        },

        function() {

            window.location.href = "../../pages/layout/reboot.php";
        })
}

function JSalert_Licence_Message(message) {

    swal({
        title: "Bilgi",
        text: message,
        type: "success"
    });


}

function JSalert_Message() {
    swal({
            title: "Bilgi",
            text: "İşlem Başarılı",
            type: "success"
        },

        function() {

        })
}

function JSalert_Error_Messages() {
    swal({
            title: "Bilgi",
            text: "İşlem Başarısız. Dosya Bulunamadı.",
            type: "error"
        },

        function() {

        })
}

function JSalert_Test_Operations(message) {

    swal({
        title: "İşlem Başarılı",
        text: message,
        type: "success"
    });


}

function JSalert_Success_Message(message) {

    swal({
        title: "İşlem Başarılı",
        text: message,
        type: "success"
    });


}

function JSalert_Error_Message(message) {

    swal({
        title: "İşlem Başarısız",
        text: message,
        type: "error"
    });


}