window.onload = function(){
    // 导航栏
    var lis = document.querySelectorAll('.header li:not(.btn)');
    var btn = document.querySelector('.right li.btn');
    var search = btn.querySelector('div');
    // 单击按钮显示搜索框
    btn.addEventListener('click',function(){
        search.style.display = 'block';
    });
    // 鼠标移入其他列表项后搜索框隐藏
    for( var i=0 ; i< lis.length ; i++){
        lis[i].addEventListener('mouseenter',function(){
            search.style.display = 'none';
        })
    }
    // 导航栏隐藏层
    var hd = document.querySelector('.header-hd');
    var header = document.querySelectorAll('ul.middle li:not(.first)>a');
    for (let i=0; i<header.length; i++){
        header[i].addEventListener('mouseenter',function(){
            hd.style.height = '48px';
        })
        header[i].addEventListener('mouseleave',function(){
            hd.style.height = '0';
        })
        hd.addEventListener('mouseenter',function(){
            hd.style.height = '48px';
            header[i].style.height = '48px';
        })
    }

    //轮播图
    var prev = document.querySelector("#prev");
    var next = document.querySelector("#next");
    var slides = document.querySelectorAll(".slider>li>a");
    var focus = document.querySelector('.slider-wrapper');
    var sliders = focus.querySelectorAll('.slider>li');
    var nav = focus.querySelector('.slider-nav');
    // 设置自动播放
    var autoPlay = true;
    var interval = 5000;
    function animate( obj ,fun ,interval ,callback ){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            fun();
            callback && callback();
        },interval);
    }
    // 添加事件处理函数
    next.onclick = function(){
        animate(next ,handleNextClicked ,0);
    }
    prev.addEventListener("click",function(){
        handlePrevClicked(function(){
            animate(next ,handleNextClicked ,5000);
        })
    })

    // 当导航按钮被点击时
    for( var i=0 ; i<slides.length ; i++){
        var lis = nav.children;
        lis[i].setAttribute('index',i);
        sliders[i].setAttribute('num',i);
        lis[i].onclick = function(){
            clearInterval(next.timer);
            for( var i=0 ; i<nav.children.length ; i++){
                nav.children[i].className = '';
                slides[i].className = 'slide';
            }
            var index = this.getAttribute('index');
            this.className = 'current';
            slides[index].setAttribute('class','slide current');
            setInterval(handleNextClicked,interval);
            autoPlay = true;
        }
    }
    nav.children[0].className = 'current';
    if(autoPlay){
        autoPlay = false;
        lis[0].onclick();
    }
    
    // 当next被点击时
    function handleNextClicked(callback) { 
        clearInterval(next.timer);
        // 当前正在播放图片的数组下标
        var num = document.querySelector('.slider>li>a.current').parentElement;
        var currentIndex = num.getAttribute('num'); 
        var navs = document.querySelectorAll(".slider-nav li");
        for( let i=0; i<slides.length; i++){
            slides[i].className = 'slide';
            navs[i].className = '';
        }
        currentIndex++;
        if(currentIndex >= slides.length){
            currentIndex = 0;
            nowIndex = 0;
        }
        slides[currentIndex].classList.add("current");
        navs[currentIndex].classList.add("current");
        callback && callback();
    };
    // 当prev被点击时
    function handlePrevClicked(callback) {
        clearInterval(next.timer);
        // 当前正在播放图片的数组下标
        var num = document.querySelector('.slider>li>a.current').parentElement;
        var currentIndex = num.getAttribute('num');   
        var navs = document.querySelectorAll(".slider-nav li");
        for( let i=0; i<slides.length; i++){
            slides[i].className = 'slide';
            navs[i].className = '';
        }
        currentIndex --;
        if(currentIndex < 0){
            currentIndex = slides.length - 1;
            nowIndex = navs.length - 1;
        }
        slides[currentIndex].classList.add("current");
        navs[currentIndex].classList.add("current");
        callback && callback();
    };

    



    // 侧边栏收放
    var siderbarWrapper = document.querySelector('.sidebar');
    document.addEventListener('scroll',function(){
        if(window.pageYOffset >= 730){
            siderbarWrapper.style.display = 'block';
        }else{
            siderbarWrapper.style.display = 'none';
        }
    });

    var sidebar = document.querySelector(".sidebar>ul");
    var close = document.querySelector(".sidebar button.close");
    var up = document.querySelector('.up')
    close.addEventListener('click',function(){
        close.style.display = 'none';
        up.style.display = 'block';
        sidebar.style.display = 'none';
    })
    up.addEventListener('click',function(){
        up.style.display = 'none';
        close.style.display = 'block';
        sidebar.style.display = 'block';
    })

    var top = document.querySelector('#top');
    top.addEventListener('click',function(){
        animater(window,0);
    }); 
    function animater( obj , target ,callback){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            let step = (target - window.pageYOffset)/10;
            step = step > 0? Math.ceil(step) : Math.floor(step);
            if(window.pageYOffset == target){
                clearInterval(obj.timer);
                callback && callback();
            }
            window.scroll(0, window.pageYOffset + step);
        },15);
    }


    // 瓷器动图
    var china = document.getElementById('china');
    china.onmouseover = function(){
        china.src = './img/gif.gif';
    };
    china.onmouseout = function(){
        china.src = './img/china.png';
    };

    // block4
    var fs = document.querySelectorAll('.block4>ul>li>a');
    fs.onmouseover = function(){
        fs.style.background = '#1F354A';
    };
}
