/**
 * parseQuery
 * クエリの値をオブジェクトで返す
 *
 * @param {String} [option] searchParam location.searchの代わりにこの文字列をパースする
 * @return {object}
 * */
function parseQuery (searchParam) {

    let query = location.search;

    //searchParamがセットされて入る場合はそれを対象とする
    if (typeof searchParam !== 'undefined') {
        query = searchParam;
    }

    //クエリがないときは終了
    if(!query){
        return false;
    }
    let obj = {};
    let querys = query.replace(/\?/, '');
    querys = querys.split('&');

    for(let i in querys){
        let data = querys[i].split('=');
        obj[data[0]] = data[1];
    }

    return obj;
}

export default parseQuery;