function schalteLampeUm(){
    var btn = document.getElementsByTagName("button")[0];
    if(btn.innerHTML == "Ein") {
        document.getElementById("lampe").src = "images/birne_an.png";
        btn.innerHTML = "Aus";
    } else {
        document.getElementById("lampe").src = "images/birne_aus.png";
        btn.innerHTML = "Ein";
    }
}
