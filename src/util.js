export default {
// 通用事件绑定方法
    addListener: function (elem, type, selector, fn) {
        if (fn == null) {
            fn = selector;
            selector = null;
        }
        elem.addEventListener(type, function (e) {
            let target;
            if (selector) {
                target = e.target;
                if (target.matches(selector))
                    fn.call(this, e)
            } else {
                fn(e)
            }
        });
    },

    // 添加多个属性
    setAttributes: function(elem, attributes) {
        for (let attr in attributes) {
            if(attributes.hasOwnProperty(attr))
                elem.setAttribute(attr, attributes[attr])
        }
    },

    getElement: function (elem) {
        let elements = [];
        switch(elem.charAt(0)) {
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

}