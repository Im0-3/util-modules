import checkType from '../utility/checkType';

/**
 * @constructor TabManager
 * @param {object} option
 * @option {string} tabWrapper タブのWrapper
 * @option {string} tabElement タブ単体
 * @option {string} panelWrapper パネルのWrapper
 * @option {string} panelElement パネルの単体
 */

export default class TabManager {
    constructor(option) {
        //オプションがオブジェクトか判定
        this.option;
        if(option === undefined){
            this.option = {};
        }else if(!checkType('Object', option)){
            throw new Error('Argument must be object.');
        }else{
            this.option = option;
        }
        //初期値の設定
        this.option = {
            tabWrapper: this.option.tabWrapper || '#js-tabs',
            tabElement: this.option.tabElement || '.js-tab',
            panelWrapper: this.option.panelWrapper || '#js-panels',
            panelElement: this.option.panelElement || '.js-panel'
        };
        //jQueryオブジェクトの取得
        this.$tabWrapper = $(this.option.tabWrapper);
        this.$tab = this.$tabWrapper.find(this.option.tabElement);
        this.$panelWrapper = $(this.option.panelWrapper);
        this.$panel = this.$panelWrapper.find(this.option.panelElement);
        this.init();
    }

    /**
     * 初期化
     */
    init(){
        //tabとpanelの数が正しいか判定
        if(this.$tab.length !== this.$panel.length){
            throw new Error('tab.length is not equal panel.length.');
        }
        this.$tab.on('click', this.clickHandler.bind(this));
    }
    clickHandler(e){
        let $target = $(e.currentTarget);
        let index = this.$tab.index(e.currentTarget);
        this.$tab.removeClass('is-active');
        $target.addClass('is-active');
        this.$panel.removeClass('is-active');
        this.$panel.eq(index).addClass('is-active');
    }
};