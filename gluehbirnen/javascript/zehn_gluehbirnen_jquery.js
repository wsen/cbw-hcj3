function alleUmschalten() {
    $("img").each(function() {
        console.log(this.id);
        if(
            $(this).attr("src").indexOf("birne_aus") >= 0)
        )
        { 
            $(this).attr("src","images/birne_an.png");
        } else {
            $(this).attr("src","images/birne_aus.png");
        }
    });
}

function alleEinschalten() {
    $("img").attr("src","images/birne_an.png");
}

function alleAusschalten() {
    $("img").attr("src","images/birne_aus.png");
}

$(document).ready(function() {
    $("img").click(function() {
        if(
            $(this).attr("src").indexOf("birne_aus") >= 0) 
        {
            $(this).attr("src","images/birne_an.png");
        } else {
            $(this).attr("src","images/birne_aus.png");
        }    
    });
});


/*   --------------------------------   */
function schalteLampeUm(nummer){
    var btn = document.getElementById("button"+nummer);
    var lampe = document.getElementById("lampe"+nummer);

    if(btn.innerHTML == "Ein") {
        lampe.src = "images/birne_an.png";
        btn.innerHTML = "Aus";
    } else {
        lampe.src = "images/birne_aus.png";
        btn.innerHTML = "Ein";
    }
}

// function alleUmschalten(){
//     var lampen = document.getElementsByTagName("img");

//     for(var i=1; i<= lampen.length; i++) {
//         schalteLampeUm(i);
//     }

// }

// function alleEinschalten() {
//     var lampen = document.getElementsByTagName("img");
//     var btns = document.getElementsByTagName("button");

//     for(var i=0; i< lampen.length; i++) {
//         lampen[i].src = "images/birne_an.png";
//         btns[i].innerHTML = "Aus";     
//     }
// }

// function alleAusschalten() {
//     var lampen = document.getElementsByTagName("img");
//     var btns = document.getElementsByTagName("button");


//     for(var i=0; i< lampen.length; i++) {
//         lampen[i].src = "images/birne_aus.png";
//         btns[i].innerHTML = "Ein";     
//     }
// }

// function blingBling() {
//     // Serie einschalten

//     // Serie umschalten

// }