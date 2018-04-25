/**
 * 通用事件绑定方法
 * @param elem document对象
 * @param type 事件类型
 * @param selector 冒泡元素
 * @param fn 事件方法
 */
function addListener (elem, type, selector, fn) {
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
}

/**
 * 封装attribute方法，为元素添加多个属性
 * @param elem document对象
 * @param attributes 属性对象
 */
function setAttributes (elem, attributes) {
    for (let attr in attributes) {
        if(attributes.hasOwnProperty(attr))
            elem.setAttribute(attr, attributes[attr])
    }
}

/**
 * 获取元素的document对象
 * @param elem
 * @returns {HTMLElement | HTMLCollectionOf<Element> | NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]> | Array}
 */
function getElement (elem) {
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

export {addListener, setAttributes, getElement}