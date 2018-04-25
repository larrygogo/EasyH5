import { setAttributes, getElement } from "./lib/common";
import { Epage } from "./epage";

class Easyh5 {

    /**
     * 配置初始化参数：
     * @param option
     */
    constructor(option) {
        this.el = getElement(option.el) || document.body;
        this.width = option.width || 640;
        this.height = option.height || 1040;
        this.page = (option.page instanceof Array)? option.page : [];
        this.currentPage = option.currentPage;

        this._boardRender();
        this._pageRender();
    }

    /**
     * 初始化画板
     */
    _boardRender() {

    }

    /**
     * 初始化页面: 每一个页面都做为一个Page对象
     */
    _pageRender() {
        console.log(this.page)
        if(this.page instanceof Array) {
            for (let item in this.page) {
                if(this.page.hasOwnProperty(item)) {
                    if(this.page[item] instanceof Object) this.page[item] = new Epage(this.page[item]);
                    else this.page[item] = new Epage({el:this.page[item]});
                    this.el.append(this.page[item].page)
                }
            }
            if(this.currentPage == null) this.page[0].page.classList.add('e-current-page');
            else this.changePage(this.currentPage);
        }
    }

}

window.Easyh5 = Easyh5;

