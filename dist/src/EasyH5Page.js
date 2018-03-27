'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = EasyH5Page;

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EasyH5Page(option) {
    this.el = option.el || document.body;
    this.width = option.width || 640;
    this.height = option.height || 1040;
    this.page = this.init();
}

EasyH5Page.prototype.init = function () {
    var el = document.getElementById(this.el);
    if (el == null) throw Error('The page: "' + this.el + '" is not found');
    el.removeAttribute('id');
    var page = document.createElement('section');
    page.id = this.el;
    _util2.default.setAttributes(page, { 'id': this.el, 'class': 'e-page' });
    _util2.default.setAttributes(el, { 'class': 'e-index-main', 'style': 'height:' + this.height + 'px;width:' + this.width + 'px;' });
    page.append(el);
    pageScale(page.children[0], this.height, this.width);
    return page;
};

function pageScale(page, height, width) {
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    page.style.width = width;
    page.style.height = height;
    if (w / h > width / height) {
        // 宽屏
        page.style.transform = 'scale(' + h / height + ')';
        page.style.marginLeft = (w - h / height * width) / 2 + 'px';
        console.log(page.style.marginLeft);
    } else {
        // 长屏
        page.style.transform = 'scale(' + w / width + ')';
    }
};
//# sourceMappingURL=EasyH5Page.js.map