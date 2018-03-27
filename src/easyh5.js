require('./easyh5.css');
import util from './util';
import EasyH5Page from './EasyH5Page';

function EasyH5(option) {
    this.el = util.getElement(option.el) || document.body;
    this.width = option.width || 640;
    this.height = option.height || 1040;
    this.page = (option.page instanceof Array) ? option.page : [];
    this.currentPage = option.currentPage;
    this.music = option.music || false;
    this.start()
}

EasyH5.prototype.start = function () {
    this.boardRender();
    this.pageRender();
};

EasyH5.prototype.boardRender = function () {
    util.setAttributes(this.el,{'style': 'height:'+this.height+'px;width:'+this.width+'px;'})
};

EasyH5.prototype.pageRender = function () {
    if(this.page instanceof Array) {
        for (let item in this.page) {
            if(this.page.hasOwnProperty(item)) {
                if(this.page[item] instanceof Object) this.page[item] = new EasyH5Page(this.page[item]);
                else this.page[item] = new EasyH5Page({el:this.page[item]});
                this.el.append(this.page[item].page)
            }
        }
        if(this.currentPage == null) this.page[0].page.classList.add('e-current-page');
        else this.changePage(this.currentPage);
    }
};

// 切换页面接口，接收页面id
EasyH5.prototype.changePage = function (page) {
    this.currentPage = page;
    for (let item in this.page) {
        if(this.page.hasOwnProperty(item)) {
            this.page[item].page.classList.remove('e-current-page');
        }
    }
    document.getElementById(this.currentPage).classList.add('e-current-page');
};

EasyH5.prototype.loadMusic = function (fn) {
    if(this.music) {
        this.audio = document.createElement('audio');
        // console.log(music)
        util.setAttributes(this.audio, {"src": this.music,"autoplay":"autoplay" ,"controls":"controls", "loop":"loop","style":"display:none"});
        util.addListener(this.audio,'WeixinJSBridgeReady',function () {
            music.load();
        });
        if(fn instanceof Function) this.audio.onloadedmetadata = fn;
        this.el.append(this.audio)
    }
}


window.EasyH5 = EasyH5;




