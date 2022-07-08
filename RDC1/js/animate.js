function animate( obj , target ,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        if(obj.offsetLeft >= target){
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft  +'35'+ 'px';
        callback && callback();
    },50);
}



window.onload = function(){
    // var bannerWrapper = this.document.querySelector('.banner-wrapper');
    var banner = document.querySelector('.banner');
    var pointer = document.querySelector('#pointer');
    for( var i=0 ; i<banner.children.length ; i++){
        var li = document.createElement('li');
        li.setAttribute('index',i);
        pointer.appendChild(li);
        li.addEventListener('click',function(){
            for( var i=0 ; i<pointer.children.length ; i++){
                pointer.children[i].className = '';
                banner.children[i].classList.move('current');
            }
            this.className = 'current';
        })
    }
    pointer.children[0].className = 'current';
    banner.children[0].className = 'current';
}