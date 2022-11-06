let bigimg= document.querySelector(".bigimg img")
let smallimg=document.querySelectorAll(".smallimg img")
for(let i=0 ; i<smallimg.length;i++){
  smallimg[i].onclick=function(){
    bigimg.src=smallimg[i].src
  }
}



wow = new WOW(
    {
    boxClass:'animate__animated'
    
  }).init();
// wow js
