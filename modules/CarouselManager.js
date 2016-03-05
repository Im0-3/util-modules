/**
 * @class CarouselManager
 * @param {string} target
 * @param {object} option - Swiperのオプションに準ずる
 */

//Swiperを使ったカルーセル
export default class CarouselManager {
    constructor(target, option) {
        this.target = target;
        this.option = option;
        this.swiper;
        this.init();
    }
    init(){
        this.swiper = new Swiper(this.target, this.option);
    }
};