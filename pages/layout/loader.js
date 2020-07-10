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