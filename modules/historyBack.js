let historyBack = function () {
    let $back = $('.js-back');
    if($back.size() <= 0){
        return;
    }
    $back.on('click', function(){
        history.back();
    });
};

export default historyBack;