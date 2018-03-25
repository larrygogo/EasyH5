"use strict";

function EasyH5() {
    this.el = '';
    this.page = [];
    this.music = false;
    this.musicSrc = '';
    
}

EasyH5.prototype.start = function () {
    
}

EasyH5.prototype.ra

function EasyH5Page(main, el) {
    this.width = 0;
    this.height = 0;
}

// class Easyh5 {
//
//     // Easyh5的对象
//     el = '';
//
//     page = [];
//
//     // 页面总数（自动统计）
//     pageSum = 0;
//
//     // 页面宽度（设计宽度）
//     width = 640;
//
//     // 页面高度（设计高度）
//     height = 1040;
//
//     // 当前页面
//     currentPage = 0;
//
//     // 开启背景音乐
//     music = false;
//
//     // 背景音乐链接
//     musicSrc = '';
//
//     constructor(params){
//         if(!params) {
//             return ;
//         }
//         if('el' in params) {
//             this.el = params.el;
//         }
//         if('page' in params) {
//             if (typeof (params.page) !== 'object')
//                 console.error('page must be object');
//             this.page = params.page;
//             this.pageSum = params.page.length;
//         }
//         if('width' in params) {
//             this.width = params.width;
//         }
//         if('height' in params) {
//             this.height = params.height;
//         }
//         if('currentPage' in params) {
//             this.currentPage = params.currentPage;
//         }
//         if('music' in params) {
//             this.music = params.music;
//         }
//         if('musicSrc' in params) {
//             this.musicSrc = params.musicSrc;
//         }
//         this.init();
//     }
//
//     init() {
//         if(this.music && this.musicSrc) {
//             let musicBox = '<audio id="'+this.music+'" autoplay controls loop src="'+this.musicSrc+'" ></audio>';
//             let music = $('#'+this.music);
//             $('#'+this.el).append(musicBox);
//             document.addEventListener("WeixinJSBridgeReady", () => {
//                 music.load();
//         }, false);
//         }
//
//         let pagePublic = $('div[page=public]');
//
//         //创建页面
//         for(let i = 0; i < this.page.length; i++) {
//             this.pageSum++;
//             let section = '<section id="'+ this.page[i] +'" class="e-page"></section>';
//             let pageContent = $('div[page='+this.page[i]+']');
//
//             $('#'+this.el).append(section);
//             $('#'+this.page[i]).prepend(pageContent);
//             pagePublic.children().clone(true).prependTo(pageContent);
//             pageContent.addClass('e-full-page').removeAttr('page');
//         }
//         pagePublic.remove();
//         $('#'+this.el+' section:eq('+this.currentPage+')').addClass('e-current-page');
//
//         this.pageScaling();
//
//
//
//     }
//     // 内容缩放
//     pageScaling () {
//         let self = this;
//         $('.e-full-page').height(self.height).width(self.width).css('transform','scale('+$(window).width()/self.width+')');
//     };
//
//     // 改变当前页面（暂不可用）
//     changeCurrentPageByNum (page) {
//         $('#'+self.el+' section:eq('+this.currentPage+')').removeClass('e-current-page');
//         $('#'+self.el+' section:eq('+page+')').addClass('e-current-page');
//         this.currentPage = page;
//     };
//
//     changeCurrentPageById (id) {
//         this.page.forEach(function (value) {
//             $('#'+value).removeClass('e-current-page');
//         });
//         $('#'+id).addClass('e-current-page');
//     };
//
//
// }


