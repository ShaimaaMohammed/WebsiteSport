/* Local basketball */
function swapstyle(sheet){
      document.getElementById('style').setAttribute('href',sheet);
}
function error() {
  alert("The image could not be loaded.");
}

function my() {
  alert("It will move to another page");
}

function bigp(x) {
  x.style.height = "1500px";
  x.style.width = "520px";
}

function normalp(x) {
  x.style.height = "50px";
  x.style.width = "470px";
}
/* first &second &third local basketball news */
function loaded() {
  alert("Page is loaded");
}

function bigImg(x) {
  x.style.height = "400px";
  x.style.width = "500px";
}

function normalImg(x) {
  x.style.height = "200px";
  x.style.width = "500px";
}
/* contact */
function ons() {
  alert("Your reply has been sent");
}

function bigbott(x) {
  x.style.height = "50px";
  x.style.width = "250px";
}

function normalbott(x) {
  x.style.height = "15px";
  x.style.width = "200px";
}
function validation(){
  var name =document.getElementById(name).value;
  var email =document.getElementById(email).value;
  var message =document.getElementById(message).value;
  var error =document.getElementById(error);
  var text;
  error.style.padding ="10px";
  if (name.length <5) {
    text = "Please Enter your Name";
    alert(text);
    return false;
  }
  if (email.indexOf(@) == -1 || email.length <6) {
    text = "Please Enter your Email";
    alert(text);
    return false;
  }
  if (message.length <=100) {
    text = "Please Enter tham 140 characters";
    error.innerHTML = text;
    return false;
  }
  return false;
}
