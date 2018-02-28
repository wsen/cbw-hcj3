self.onmessage = function (evt) {

    var inputArr = evt.data.split(",");
    var res = "false";

    // ("1,                    100000");
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
    
    

    // postMessage("blabla: " + evt.data);
    self.close();
}