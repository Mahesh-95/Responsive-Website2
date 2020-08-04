
var menuBar=document.getElementById("menu-bar");
menuBar.addEventListener("click", function(){
    var menu=document.querySelector(".menu");
    if(menu.style.display=="none"){
      menu.style.display="block";
    }else{
      menu.style.display="none";
    }
})


var loader;

function loadNow(opacity){
    if(opacity<=0){
        displayContent();
    }
    else{
        loader.style.opacity=opacity;
        window.setTimeout(function(){
            loadNow(opacity - 0.01)
        },100);
    }
}

function displayContent(){
    loader.style.display="none";
}

document.addEventListener("DOMContentLoaded", function(){
    loader=document.getElementById("loader");
    loadNow(1);
});


