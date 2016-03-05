/**
 * getGeocode
 * */

class GeoCodeManage{
    constructor(lat, lng){
        this.location = {
            lat: lat,
            lng: lng
        };
        this.gc = new google.maps.Geocoder;
    }
    /**
     * Geocoder.geocordに接続する
     * @param data {Array} geocoderから取得したデータ
     */
    fetch(){
        function fetch(resolve, reject){
            this.gc.geocode({ location: this.location }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK){
                    resolve(this.convertAddress(results));
                }else{
                    reject(`${status} : ジオコードに失敗しました`);
                }
            });
        }

        let promise = new Promise(fetch.bind(this));
        return promise;
    }

    /**
     * 住所データを変換する
     * @param data {Array} geocoderから取得したデータ
     */
    convertAddress(data){
        let address = data[0].address_components;
        return `${address[6].long_name}${address[5].long_name}${address[4].long_name}${address[3].long_name}${address[2].long_name}`;
    }
}

export default GeoCodeManage;