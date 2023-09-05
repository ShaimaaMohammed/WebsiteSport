function sharefb() {
  alert("You have shared the article on facebook!");
}
function sharetwitter() {
  alert("You have shared the article on twitter!");
}
function sharetumblr() {
  alert("You have shared the article on tumblr!");
}
    window.onclick = function(e)
    {   var id =  e.target.id;   
     if (id === 'sent')  
     { var txt = document.getElementById('text').value    
       $( "#comment" ).empty().append( txt );
     }
    }
    function swapstylesheet(sheet){
    
    document.getElementById('pagestyle').setAttribute('href', sheet);
}
