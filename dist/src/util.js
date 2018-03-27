'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // 通用事件绑定方法
    addListener: function addListener(elem, type, selector, fn) {
        if (fn == null) {
            fn = selector;
            selector = null;
        }
        elem.addEventListener(type, function (e) {
            var target = void 0;
            if (selector) {
                target = e.target;
                if (target.matches(selector)) fn.call(this, e);
            } else {
                fn(e);
            }
        });
    },

    // 添加多个属性
    setAttributes: function setAttributes(elem, attributes) {
        for (var attr in attributes) {
            if (attributes.hasOwnProperty(attr)) elem.setAttribute(attr, attributes[attr]);
        }
    },

    getElement: function getElement(elem) {
        var elements = [];
        switch (elem.charAt(0)) {
            case '#':
                elements = document.getElementById(elem.substring(1));
                break;
            case '.':
                elements = document.getElementsByClassName(elem.substring(1));
                break;
            default:
                elements = document.getElementsByTagName(elem);
        }
        return elements;
    }

};
//# sourceMappingURL=util.js.map