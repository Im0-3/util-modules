/**
 * googleマップを表示する
 * @class MapManager
 */

class MapManager {
    constructor(target, option = {}){
        this.target = target;
        this.option = option;
        this.option.zoom = this.option.zoom  ? this.option.zoom : 15;
        this.option.center = this.option.center ? this.option.center : {lat: 35.7103077, lng: 139.7754647};
        this.option.mapTypeId = google.maps.MapTypeId.ROADMAP;

        this.map;
        this.markers = [];
        this.init();
    }
    /**
     * 初期化 - マップの表示
     */
    init(){
        this.map = new google.maps.Map(document.querySelector(this.target), this.option);
        this.setStyle();
    }

    /**
     * mapのスタイルを設定する
     * @param _styles {Array} スタイルオプション
     */
    setStyle(_styles){
        let styles = _styles ? _styles : [
            {
                stylers: [
                    {
                        gamma: 1.5
                    }
                ]
            }
        ];
        this.map.setOptions({styles: styles})
    }
    /**
     * 店舗情報を受け取りマーカーをセットする
     * @param {Array} shoplists 店舗情報
     * let shoplist = [
     *      {
     *          position: {
     *              lat: {number} 緯度,
     *              lng: {number} 経度
     *          },
     *          title: {string} 店舗名,
     *          genre: {string} ジャンル,
     *          address: {string} 住所,
     *          link: {string} 店舗詳細へのリンク
     *      }
     * ];
     */
    addMarker(data){
        for(let i in data){
            this.markers.push(new google.maps.Marker({
                position: data[i].position,
                animation: google.maps.Animation.DROP
            }));
            this.markers[i].setMap(this.map);
        }
    }
    /**
     * マーカーをクリックした際のイベントを設定する
     * @param callback
     */
    setClickMarkerEvent(callback){
        for(let i in this.markers) {
            google.maps.event.addListener(this.markers[i], 'click', (event) => {
                callback(event, i);
            });
        }
    }
    /**
     * マーカーのアイコンを変更する
     * @param {number} index マーカーの順番
     * @param {string} path 画像のパス
     * @param {Array<number>} size 画像サイズ
     * @param {Array<number>} origin 画像データのどの部分を起点にするか
     * @param {Array<number>} anchor マーカーのpositionで与えられる緯度経度を画像のどの点にするか
     */
    changeMarkerIcon(index, path, size = [40, 40], origin = [0, 0], anchor = [0, 0], scaledSize = [40, 40]){
        let img = new google.maps.MarkerImage(
            path,
            new google.maps.Size(size[0],size[1]),
            new google.maps.Point(origin[0], origin[1]),
            new google.maps.Point(anchor[0], anchor[1]),
            new google.maps.Size(scaledSize[0], scaledSize[1])
        );
        this.markers[index].setIcon(img);
    }
    /**
     * すべてのマーカーのアイコンを変更する
     * @param {string} 画像のパス
     * @param {Array<number>} size 画像サイズ
     * @param {Array<number>} origin 画像データのどの部分を起点にするか
     * @param {Array<number>} anchor マーカーのpositionで与えられる緯度経度を画像のどの点にするか
     */
    changeAllMarkerIcon(path, size = [40, 40], origin = [0, 0], anchor = [0, 0], scaledSize = [40, 40]){
        for(let i in this.markers){
            this.changeMarkerIcon(i, path, size, origin, anchor, scaledSize);
        }
    }
}

export default MapManager;