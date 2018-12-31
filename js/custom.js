var key = ["!","@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "/", "|", "()", "?","<", ">", ".", ",", "{}", "[]", "=", "~", ":", ";", "`", "!","@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "/", "|", "()", "?","<", ">", ".", ",", "{}", "[]", "=", "~", ":", ";", "`", "!","@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "/", "|", "()", "?","<", ">", ".", ",", "{}", "[]", "=", "~", ":", ";", "`","!","@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "/", "|", "()", "?","<", ">", ".", ",", "{}", "[]", "=", "~", ":", ";", "`" ];


//this variable dictates the starting point of the output on the key 
var keyIndex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

document.getElementById("clearMe").addEventListener("click", clearM);
function clearM() {
    
    document.getElementById("mHistory").innerHTML = "";
};

//this function collects, encodes and sends user input
function send() {
//    gets the user input
      userInput = document.getElementById("inputField").value;
    
    if(userInput=="") {
        alert("Cannot send/encode an empty Text!");
    }else {
        userInput = userInput;
    }
//    gets length of the user input
    var userInputLength = userInput.length;
//    generates random number for selecting the key
    var keyNum = Math.floor(Math.random()  * keyIndex.length);
//encodes message input
    var encoded = key.splice(keyNum, userInputLength);
    
    document.getElementById("mHistory").innerHTML+= "ENCODED TEXT: " + encoded + "<br>";
    
//    local storage
   history = localStorage.setItem("message", userInput);
    console.log(history);
//    clears the input field
    document.getElementById("inputField").value = "";  
    
}

//message decode function

function decode(){
    pass = prompt("Enter password");
    
    if(pass==verify){
       var decoded = userInput;
    document.getElementById("mHistory").innerHTML += "DECODED TEXT: " + decoded + "<br>";
    
//    local storage
    localStorage.setItem("decode", decoded); 
    }else{
        alert("Wrong Password");
    }
//    var decoded = userInput;
//    document.getElementById("mHistory").innerHTML += "DECODED MESSAGE: " + decoded + "<br>";
//    
////    local storage
//    localStorage.setItem("decode", decoded);
    
}

//self executing function
(function() {
     password = prompt("Enter password");
     verify = prompt("Confirm password");
    if(password == verify){
        alert("Accepted")
       
       }else{
           prompt("Wrong passwrord!");
       }
    
})()

document.getElementById("historys").addEventListener("click", historys)
function historys(){
//    gets the locally stored value in the send function
    var x = localStorage.getItem("message")
    var h1 = document.getElementById("mHistory");
    h1.innerHTML = "";
    var h2 = document.getElementById("mHistory");
    h2.innerHTML += x; 
}

