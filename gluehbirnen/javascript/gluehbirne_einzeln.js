function schalteLampeEin(){
    document.getElementById("lampe").src = "images/birne_an.png";
    document.getElementsByTagName("button")[0].className = "versteckt";
    document.getElementsByTagName("button")[1].className = "";
}

function schalteLampeAus(){
    document.getElementById("lampe").src = "images/birne_aus.png";
    document.getElementsByTagName("button")[0].className = "";
    document.getElementsByTagName("button")[1].className = "versteckt";
}