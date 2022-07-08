var mouse = document.querySelectorAll('.mouse');
var mask = document.querySelectorAll('.mask');
var dirs = ['top', 'right', 'bottom', 'left'];

for (let i = 0; i < mouse.length; i++){
    mouse[i].addEventListener('mouseenter',function(){
        var r = judge(this,event);
        enter(this, dirs[r], mask[i]);
    })
    mouse[i].addEventListener('mouseleave',function(){
        var r = judge(this,event);
        leave(this, dirs[r], mask[i]);
    })
}
function judge(obj, event){
    event = event || window.event;
    var x, y, x0, y0, x1, y1, x2, y2, k, k1;
    // 获得相对于视窗的位置及大小
    var rect = obj.getBoundingClientRect();
    // 以中心为原点建立直角坐标系
    x0 = rect.left + rect.width / 2;
    y0 = (rect.top + rect.height / 2);
    // 左上角的点坐标
    x1 = rect.left;
    y1 = rect.top;
    // 右下角的点坐标
    x2 = rect.left +rect.width;
    y2 = (rect.top + rect.height);
    // 计算斜率
    k = -(y1 - y2) / (x1 - x2);
    // 获得鼠标当前位置
    x= event.clientX;
    y = event.clientY;
    // 鼠标与原点连线斜率
    k1 = (y - y0) / (x - x0);
    //如果斜率在范围内，则鼠标是从左右方向移入移出的
    if(k < k1 && k1 < -k){
        //根据x与x0判断右左
        return x > x0 ? 1 : 3;
    }else{
        //根据y与y0判断上下
        return y > y0 ? 2 : 0;
    }  
}
function enter(obj, dirs, m){
    switch(dirs){
        case 'top':
            m.style.top = - obj.offsetHeight + 'px';
            if(m.style.top = - obj.offsetHeight + 'px'){
                move(m);
            }
            break;
        case 'bottom':
            m.style.top = obj.offsetHeight + 'px';
            if(m.style.top = obj.offsetHeight + 'px'){
                move(m);
            }
            break;
        case 'left':
            m.style.left = - obj.offsetWidth + 'px';
            if(m.style.top = - obj.offsetWidth + 'px'){
                move(m);
            }
            break;
        case 'right':
            m.style.left = obj.style.width + 'px';
            if(m.style.top = obj.style.width + 'px'){
                move(m);
            }
            break;
    }
}
function leave(obj, dirs, m){
    switch(dirs){
        case "top":
            m.style.top = - obj.offsetHeight + 'px';
            break;
        case "bottom":
            m.style.top = obj.offsetHeight + 'px';
            break;
        case "left":
            m.style.left = - obj.offsetWidth +'px';
            break;
        case "right":
            m.style.left = obj.offsetWidth +'px';
            break;
    }
}
function move(obj){
    obj.style.left = '0';
    obj.style.top = '0';
}
