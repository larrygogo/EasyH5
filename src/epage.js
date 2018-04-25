require('./lib/easyh5.css');
import { setAttributes } from './lib/common'

/**
 * 页面对象
 */
class Epage {

    constructor(option)  {
        this.el = option.el || '';
        this.width = option.width || 640;
        this.height = option.height || 1040;
        this.page = this._init();
    }

    _init() {
        let e = document.getElementById(this.el);
        let p = document.createElement('section');
        if(e == null) throw Error('The page '+this.el+' is not found');
        e.removeAttribute('id');

        setAttributes(p, {'id': this.el, 'class': 'e-page', 'style': `height:${document.documentElement.clientHeight}px; width: ${document.documentElement.clientWidth}px;`});
        setAttributes(e, {'class':'e-index-main', 'style': `height:${this.height}px; width: ${this.width}px;`});

        p.append(e);

        Epage._pageScale(e);

        return p;
    }

    static _pageScale(page) {
        let clientWidth = document.documentElement.clientWidth;
        let clientHeight = document.documentElement.clientHeight;
        let pWidth = parseInt(page.style.width);
        let pHeight = parseInt(page.style.height);
        // 宽屏

        if((clientWidth/clientHeight) > (pWidth/pHeight)) {
            page.style.transform = `scale(${clientHeight/pHeight})`;
            page.style.marginLeft = `${(clientWidth-clientHeight/pHeight*pWidth)/2}px`;
        }
        // 长屏
        else {
            page.style.transform = `scale(${clientWidth/pWidth})`;
        }
    }
}

export { Epage };






