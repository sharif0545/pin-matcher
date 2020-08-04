function randomNumber(){
   var numRandom = Math.random() * 10000;
   var output = Math.round(numRandom);
   document.getElementById('random-display').value = output;
  
  var lengthOutput = output.toString().length;
  if(lengthOutput !== 4){
      return document.getElementById('random-display').value = 'Only 4 digits will be acceptable.';
  }else{
      return output;
  }

}



function pinMatch(){
    var output = document.getElementById('random-display').value;
    var pinDisplay = document.getElementById('pin-display').value;
    if(output === pinDisplay){
       document.getElementById('pin-matched').style.display = 'block';
       document.getElementById('pin-unmatched').style.display = 'none';
    }else{
       document.getElementById('pin-unmatched').style.display = 'block';
       document.getElementById('pin-matched').style.display = 'none';
    }
 
}


