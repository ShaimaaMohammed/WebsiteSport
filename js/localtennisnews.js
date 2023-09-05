var message=" welcome back in our site "     
var message=message+"          "  
i="0"			         
var temptitle=""                 
var speed="190"                  


function titler(){
if (!document.all&&!document.getElementById)
return
document.title=temptitle+message.charAt(i)  
temptitle=temptitle+message.charAt(i)       
i++					    
if(i==message.length)			    
{
i="0"					    
temptitle=""				    
}
setTimeout("titler()",speed) 		   
}

window.onload=titler















function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}













function Function() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}