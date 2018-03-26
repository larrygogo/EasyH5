require('./easyh5.css');
import util from './util'
import EasyH5Page from './EasyH5Page'

function EasyH5(option) {
    this.el = util.getElement(option.el) || document.body;
    this.width = option.width || 640;
    this.height = option.height || 1040;
    this.page = (option.page instanceof Array)? option.page : [];
    this.start()
}

EasyH5.prototype.start = function () {
    this.pageRander()
};

EasyH5.prototype.pageRander = function () {
    if(this.page instanceof  Array) {
        for (let item in this.page) {
            if(this.page.hasOwnProperty(item)) {
                this.page[item] = new EasyH5Page({el:this.page[item]});
                this.el.append(this.page[item].page)
            }
        }
    }
};

// Easyh5的对象
EasyH5.prototype.el = {};

// Easyh5的页面
EasyH5.prototype.page = [];

// 页面宽度（设计宽度）
EasyH5.prototype.width = 640;

// 页面高度（设计高度）
EasyH5.prototype.height = 1040;

window.EasyH5 = EasyH5;



