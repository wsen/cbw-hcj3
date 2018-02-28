self.onmessage = function (evt) {

    var inputArr = evt.data.split(",");
    var res = "false";

    for(var zahl=inputArr[0]; zahl<=inputArr[1]; zahl++) {
        res = false;

        for(var divi=2; divi < (zahl); divi++) {
            if(zahl % divi == 0) {
                res = false;
                break;                       
            } else { 
                res = true;                    
            }

            
        }
        if(res) {
            postMessage(" " + zahl + " ");
        } else {
            postMessage(" . ");
        }                           
    }

    // document.getElementById("d2").setAttribute("id","div#d2");
    // postMessage("blabla: " + evt.data);
    self.close();
}