/**
 * @class SelectManager
 * セレクトボックスをdivで擬似的に装飾するためのJS
 *
 * @param {string} container コンテナ （必須）
 * @param {string} selector セレクトタグ（必須）
 * @param {string} view 結果表示部分（必須）
 */

class SelectManager {
    constructor(container, selector, view){
        this.$container = $(container);
        this.$selector = this.$container.find(selector);
        this.$view = this.$container.find(view);
        this.init();
    }
    init(){
        this.changeView();
        this.$selector.on('change', this.changeHandler.bind(this));
    }
    //セレクタが変更された時
    changeHandler(e){
        e.preventDefault();
        this.changeView();
    }
    //viewに結果を反映させる
    changeView(){
        let text = this.$selector.find('option:selected').text();
        this.$view.text(text);
    }
}

export default SelectManager;