//トップへ戻るボタン
let scrollTop = function () {
    $('#js-pagetop').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 300, 'swing');
    });
};

export default scrollTop;