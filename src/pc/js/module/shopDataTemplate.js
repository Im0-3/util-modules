/**
 * googleマップを表示する
 * @class shopDataTemplate
 */

function renderShopData(target, shopData) {
    var template = `
        <article class="card media media-vertical">
            <a class="media-link" href="detail.html">
                <div class="media-thumbnail" style="background-image: url(http://cms.locoplace.biz/releaseimg/t100061417/main_image)"></div>
                    <div class="media-body">
                        <div class="media-tagline">フランス料理</div>
                        <h1 class="media-heading">Hiros Lounge</h1>
                        <div class="media-detail">
                        <ul class="shop-data">
                            <li class="shop-data-item">
                                <div class="shop-data-marker">
                                    <div class="marker">
                                        <span class="marker-icon icon icon-train"></span>
                                    </div>
                                </div>
                                銀座線 銀座駅 A3番出口 徒歩3分
                            </li>
                            <li class="shop-data-item">
                                <div class="shop-data-marker">
                                    <div class="marker">
                                        <span class="marker-icon icon icon-sun"></span>
                                    </div>
                                </div>
                                ¥1,500
                                <div class="shop-data-marker shop-data-marker-margin">
                                    <div class="marker">
                                        <span class="marker-icon icon icon-moon"></span>
                                    </div>
                                </div>
                                ¥3,500
                            </li>
                            <li class="shop-data-item">
                                <div class="shop-data-marker">
                                    <div class="marker">
                                        <span class="marker-icon icon icon-shop-close"></span>
                                    </div>
                                </div>
                                月曜定休日
                            </li>
                            <li class="shop-data-item">
                                <div class="shop-data-marker">
                                    <div class="marker">
                                        <span class="marker-icon icon icon-shop"></span>
                                    </div>
                                </div>
                                クレカ可, 完全喫煙, 個室あり
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </article>
    `;
}

export default renderShopData;