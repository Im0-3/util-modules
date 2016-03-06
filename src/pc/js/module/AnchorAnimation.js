/**
 * アンカーアニメーション
 * @param {object} option
 */

let OPTION = {
    offset: 0,
    speed: 500,
    easing: 'linear'
}

class AnchorAnimation {
    constructor(option){
        this.$window = $(window)
        this.$body = $('body, html');
        this.$link = $('a[href^="#"]');
        this.option = $.extend({}, option, OPTION);
    }
    init(){
        this.$link.on('click', (e) => {
            this.clickHandler(e);
        });
    }
    getPosition(element){
         let $target = $($(element).attr('href'));
        return $target.offset().top;
    }
    clickHandler(e){
        e.preventDefault();
        let position = this.getPosition();
        $body.stop().animate({
            scrollTop: position
        }, 500, this.easing);
    }
}

export default AnchorAnimation;