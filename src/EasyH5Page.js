import util from './util'

export default function EasyH5Page(option) {
    this.el = option.el || document.body;
    this.width = option.width || 640;
    this.height = option.height || 1040;
    this.page = this.init()

}

EasyH5Page.prototype.init = function () {
    let el = document.getElementById(this.el);
    el.removeAttribute('id');
    let page = document.createElement('section');
    page.id = this.el;
    util.setAttributes(page, {'id':this.el, 'class':'e-page', 'style':'height:'+this.height+'px;width:'+this.width+'px;'});
    util.setAttributes(el, {'class':'e-index-main', 'style':'height:'+this.height+'px;width:'+this.width+'px;'});
    page.append(el);
    return page;
};





