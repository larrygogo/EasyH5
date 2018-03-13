"use strict";

function Easyh5(config) {
    this.init(config);
}

// Easyh5的对象
Easyh5.prototype.el = '';

Easyh5.prototype.page = [];

// 页面总数（自动统计）
Easyh5.prototype.pageSum = 0;

// 页面宽度（设计宽度）
Easyh5.prototype.width = 640;

// 页面高度（设计高度）
Easyh5.prototype.height = 1040;

// 当前页面
Easyh5.prototype.currentPage = 0;

// 开启背景音乐
Easyh5.prototype.music = false;

// 背景音乐链接
Easyh5.prototype.musicSrc = '';

// 初始化
Easyh5.prototype.init = function (config) {
    for(let i in config) if(i in this) this[i] = config[i];
    //识别主ID
    if(this.el === '') return ;

    //背景音乐
    if(this.music && this.musicSrc !== '') {
        let musicBox = '<audio id="'+this.music+'" autoplay controls loop src="'+this.musicSrc+'" ></audio>';
        let music = $('#'+this.music);
        $('#'+this.el).append(musicBox);
        document.addEventListener("WeixinJSBridgeReady", function () {
            music.load();
            console.log(1)
        }, false);
    }

    let pagePublic = $('div[page=public]');
    //创建页面
    for(let i = 0; i < this.page.length; i++) {
        this.pageSum++;
        let section = '<section id="'+ this.page[i] +'" class="e-page"></section>';
        let pageContent = $('div[page='+this.page[i]+']');

        $('#'+this.el).append(section);
        $('#'+this.page[i]).prepend(pageContent);
        pagePublic.children().clone(true).prependTo(pageContent);
        pageContent.addClass('e-full-page').removeAttr('page');
    }
    pagePublic.remove();
    $('#'+this.el+' section:eq('+this.currentPage+')').addClass('e-current-page');

    this.pageScaling();

};

// 内容缩放
Easyh5.prototype.pageScaling = function () {
    let self = this;
    $('.e-full-page').height(self.height).width(self.width).css('transform','scale('+$(window).width()/self.width+')');
};

// 改变当前页面（暂不可用）
Easyh5.prototype.changeCurrentPageByNum = function (page) {
    $('#'+self.el+' section:eq('+this.currentPage+')').removeClass('e-current-page');
    $('#'+self.el+' section:eq('+page+')').addClass('e-current-page');
    this.currentPage = page;
};

Easyh5.prototype.changeCurrentPageById = function (id) {
    this.page.forEach(function (value) {
        $('#'+value).removeClass('e-current-page');
    });
    $('#'+id).addClass('e-current-page');
};
