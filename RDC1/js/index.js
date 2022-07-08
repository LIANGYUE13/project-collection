 slides = document.querySelectorAll(".slide");
 p1 = document.querySelector("#p1");
 p2= document.querySelector("#p2");
var currentIndex = 0;

// 开启自动轮播
if(m1){
    clearTimeout(timer2);
    setTimeout(m2(),0);
}
if(m2){
    clearTimeout(timer1);
    setTimeout(m1(),0);
}
var timer1 = setTimeout(m1(),5000);
var timer2 = setTimeout(m2(),5000);
p1.addEventListener("click",m1);
p2.addEventListener("click",m2);
function m1(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    let current = slides[currentIndex];
    if(currentIndex == 1){
        current.classList.remove("current");
        currentIndex = 0 ;
    }
    slides[currentIndex].classList.add("current");
    p1.style.height = "5px";
    p2.style.height = "2px";
    setTimeout(m2,5000);
};
function m2(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    let current = slides[currentIndex];
    if(currentIndex == 0){
        current.classList.remove("current");
        currentIndex = 1 ;
    }
    slides[currentIndex].classList.add("current");
    p1.style.height = "2px";
    p2.style.height = "5px";
    setTimeout(m1,5000);
};

var la = document.getElementById("left-arrow");
var ra = document.getElementById("right-arrow");
var item = document.querySelector(".item");
la.onclick = function(){
    item.style.transform = "translateX(0)";
}
ra.onclick = function(){
    item.style.transform = "translateX(-1200px)";
}