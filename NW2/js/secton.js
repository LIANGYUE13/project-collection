var that;
class Tab{
    constructor(){
        // 获取元素
        that = this;
        this.main = document.getElementById('tab');
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init(){
        this.updateNode();
        // 初始化操作，让相关元素绑定事件
        this.add.onclick = this.addTab;
        for(let i=0 ; i<this.lis.length ; i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 动态获取对应元素
    updateNode(){
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.close');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }
    // 1.切换功能
    toggleTab(){
        that.clearClass();
        this.className = 'active';
        that.sections[this.index].className = 'active';
    }
    clearClass(){
        for(let i=0 ; i<this.lis.length ; i++){
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2.添加功能
    addTab(){
        that.clearClass();
        // (1)创建新的li和section
        var random = Math.random();
        var li = '<li class="active"><span>新选项</span><span class="close">x</span></li>'
        var section = '<section class="active">内容'+ random +'</section>';
        // (2)把它们追加到对应父元素里面
        that.ul.insertAdjacentHTML('beforeend',li);
        that.fsection.insertAdjacentHTML('beforeend',section);
        that.init();
    }
    // 3.删除功能
    removeTab(e){
        e.stopPropagation(); // 阻止冒泡，防止触发li的切换点击事件
        let index = this.parentNode.index;
        // 根据索引号删除对应li和section
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 若被删除的不是选中状态的li，让原来的被选中状态的li保持不变
        if(document.querySelector('.active')) return;
        // 让被删除的选定状态的li前一个li处于选定状态
        index--;
        // 手动调用点击事件，不需要鼠标触发
        that.lis[index] && that.lis[index].click();
    }
    //4.修改功能
    editTab(){
        let str = this.innerHTML;
        this.innerHTML = '<input type="text"/>';
        let input = this.children[0];
        input.value = str;
        input.select(); // 选定文本框文字
        // 离开文本框时把里面的值给span
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }
        // 按下回车也能给值
        input.onkeyup = function(e){
            if(e.keyCode === 13){
                // 手动调用表单失去焦点事件
                this.blur();
            }
        }
    }
}
new Tab('#tab');