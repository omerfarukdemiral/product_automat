window.onload = function() {


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);


            console.log("Hücreler Yükleniyor.---------------");
            for (var i = 1; i < 87; i++) {
                var cell = document.getElementById(i);
                //cell.setAttribute("data-shelfno", myObj.data[1].ShelfNo);
                if (typeof myObj.data[i - 1] !== 'undefined') {
                    console.log("Hücre : " + myObj.data[i - 1].ShelfNo + "  Status :  " + myObj.data[i - 1].Status);
                    cell.setAttribute("data-status", myObj.data[i - 1].Status);
                    if (myObj.data[i - 1].Status == "0") {
                        cell.classList.remove('btn-warning');
                        cell.classList.remove('btn-secondary');
                        cell.classList.remove('btn-danger');
                        cell.classList.add('btn-success');
                    } else if (myObj.data[i - 1].Status == "2") {
                        cell.classList.add('btn-warning');
                        cell.classList.remove('btn-secondary');
                        cell.classList.remove('btn-danger');
                        cell.classList.remove('btn-success');
                    } else if (myObj.data[i - 1].Status == "17") {
                        cell.classList.add('btn-secondary');
                        cell.classList.remove('btn-warning');
                        cell.classList.remove('btn-danger');
                        cell.classList.remove('btn-success');
                    } else {
                        cell.classList.remove('btn-warning');
                        cell.classList.add('btn-danger');
                        cell.classList.remove('btn-secondary');
                        cell.classList.remove('btn-success');
                    }
                    cell.setAttribute("data-productbarcode", myObj.data[i - 1].ProductBarcode);
                    cell.setAttribute("data-productname", myObj.data[i - 1].ProductName);
                    cell.setAttribute("data-address", myObj.data[i - 1].Address);
                    cell.setAttribute("data-productprice", myObj.data[i - 1].ProductPrice);
                    cell.setAttribute("data-workingtotal", myObj.data[i - 1].WorkingTotal);
                    cell.setAttribute("data-errordescription", myObj.data[i - 1].ErrorDescription);
                }
            }

        }
    };
    xmlhttp.open("GET", "dashboard_database.php ", true);
    xmlhttp.send();

}