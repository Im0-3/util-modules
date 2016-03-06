/**
 * 型を判定する
 * @param {string} type オブジェクト名
 * @param {any} obj チェックしたいオブジェクト
 * @returns {boolean}
 */

export default function checkType(type, obj) {
    let clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}