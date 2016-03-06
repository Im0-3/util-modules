/**
 * @class SlidePanelManager
 *   店舗詳細 - 続きを読む部分のJS
 * @param {string} target スライドパネルエリア
 * @param {string} inner スライドパネルの内側のDOM
 * @param {string} open 開くボタン
 */

class SlidePanelManager {
    constructor(target, inner, open){
        this.$target = $(target);
        this.$inner = $(inner);
        this.$open = $(open);
        this.$window = $(window);
        this.isOpen = false;
        this.outerHeight;
        this.innerHeight;
        this.init();
    }
    //初期化
    init(){
        this.getInnerHeight();
        if(!this.isOuterLarge()){
            this.isOpen = true;
            this.$target.addClass('is-open')
                .css({
                    'min-height': this.innerHeight + 'px'
                });
        }else{
            this.$open.on('click', this.clickOpenHandler.bind(this));
        }
        this.$window.on('resize', this.resizeHander.bind(this));
    }
    //外側の要素が内側の要素より大きいかチェック
    isOuterLarge(){
        this.getInnerHeight();
        this.getOuterHeight();
        return (this.innerHeight <= this.outerHeight);
    }
    //内側の要素の高さ取得
    getInnerHeight(){
        this.innerHeight = this.$inner.height();
    }
    //外側の要素の高さ取得
    getOuterHeight(){
        this.outerHeight = this.$target.height();
    }
    //リサイズ時の処理
    //もし開いていたら内側の要素に合わせて伸縮する
    resizeHander(){
        this.getInnerHeight();
        if(this.isOpen){
            this.$target.css({
                'min-height': this.innerHeight
            });
        }
    }
    //クリック時の処理
    clickOpenHandler(){
        this.isOpen = true;
        this.$target.addClass('is-open')
            .animate({
                'min-height': this.innerHeight + 'px'
            }, 200);
        this.$open.off();
    }
}

export default SlidePanelManager;