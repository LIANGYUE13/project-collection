var focus = document.querySelector('.focus');
var slides = focus.querySelectorAll('li');
var navs = document.querySelectorAll('.nav>li');
var prev = document.getElementById('prev');
var next = document.getElementById('next');


for (let i=0 ; i<navs.length ; i++){
    slides[i].setAttribute('index',i);
    navs[i].onmouseenter = function(){
        for (let i=0 ; i<navs.length ; i++){
            navs[i].className = '';
            slides[i].className = '';
        }
        var index = slides[i].getAttribute('index');
        var num = index;
        let prev = --num<0 ? 7 : num;
        let next = ++index % 7; 
        index = --index;
        this.className = 'active';
        slides[index].className = 'active';
        slides[prev].className = 'prev';
        slides[next].className = 'next';
    }
}
focus.onmouseenter = function(){
    clearInterval(this.timer);
}
focus.onmouseout = function(){
    this.autoPlay = true;
    this.onmouseenter();
    if (this.autoPlay) {
      this.timer = setInterval(()=>{
        next.onclick();
      }, 3000)
    }
}
focus.onmouseout();

prev.onclick = function(){
    let index = focus.querySelector('.prev').getAttribute('index');
    navs[index].onmouseenter();
}
next.onclick = function(){
    let index = focus.querySelector('.next').getAttribute('index');
    navs[index].onmouseenter();
}

