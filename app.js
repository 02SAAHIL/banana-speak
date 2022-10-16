// // console.log("hello World");
// // alert("This script works")
//  var username =prompt("Give me username")
//  var welcomeMessage = "this script works!!  "+ username;
//  alert(welcomeMessage);
var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate)
var txtInput = document.querySelector("#txt-input");


btnTranslate.addEventListener("click",  clickHandler)

function clickHandler() {
    console.log("clicked");
    console.log("input",txtInput.value);
    };

