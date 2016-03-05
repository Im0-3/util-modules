/**
 * @class ModalManager
 * @param {string} target モーダルするエリア （必須）
 * @param {string} open モーダルが開くボタン（必須）
 * @param {string} close モーダルが閉じるボタン
 */

class ModalManager {
    constructor(target, open, close){
        this.$target = $(target);
        this.$open = $(open);
        this.$close = close ? $(close) : false;
        this.init();
    }
    /**
    * 初期化 - クリックイベントの追加
    */
    init(){
        this.$open.on('click', this.clickHandler.bind(this));
        if(this.$close){
            this.$close.on('click', this.clickHandler.bind(this));
        }
    }
    /**
     * クリック時の処理
     */
    clickHandler(e){
        e.preventDefault();
        this.$target.toggleClass('is-active');
        this.$open.toggleClass('is-active');
    }
}

export default ModalManager;