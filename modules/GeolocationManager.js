/**
 * 現在地取得するためのクラス
 * @class GeolocationManager
 * @param {string} option 現在位置の取得に関するオプション
 */

class GeolocationManager {
    constructor(option){
        this.geo = navigator.geolocation;
        this.position;
        this.option = option ? option : {
            enableHighAccuracy: false, //高精度な情報取得を利用するか
            timeout: 30000, //タイムアウトする秒数
            maximumAge: 0 //取得したデータをキャッシュする時間
        };
        //console.log(this.option);
        if(!navigator.geolocation){
            throw new Error('この端末では現在地を取得することができません');
        }
    }

    /**
     * 現在地取得をする・成功したらPromiseを返す
     * @returns {promise}
     */
    connect(){
        let promise = new Promise((resolve, reject) => {
            this.geo.getCurrentPosition((position) => {
                this.position = position;
                resolve(position);
            },(error) => {
                let errorMessage = {
                    0: '原因不明のエラーが発生しました。',
                    1: '位置情報の取得が許可されませんでした。',
                    2: '電波状況などで位置情報が取得できませんでした。',
                    3: '位置情報の取得に時間がかかり過りタイムアウトしました。'
                };
                reject(errorMessage[error.code]);
            }, this.option);
        });
        return promise;
    }
    //緯度を取得
    getLatitude(){
        return this.position.coords.latitude;
    }
    //経度を取得
    getLongitude(){
        return this.position.coords.longitude;
    }
}

export default GeolocationManager;