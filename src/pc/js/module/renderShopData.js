/**
 * 店舗情報をviewに追加する
 * @class renderShopData
 */

function renderShopData(target, shopData) {
    let template = `
        <article class="media">
            <a class="media-link" href="${shopData.link}">
                <div class="media-thumbnail" style="background-image: url(http://cms.locoplace.biz/releaseimg/t100074747/main_image)"></div>
                <div class="media-body">
                    <div class="media-tagline">${shopData.genre}</div>
                    <h1 class="media-heading">${shopData.title}</h1>
                    <div class="media-detail">
                        <ul class="shop-data">
                            <li class="shop-data-item">
                                <div class="shop-data-marker">
                                    <div class="marker">
                                        <span class="marker-icon icon icon-train"></span>
                                    </div>
                                </div>
                                ${shopData.address}
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
    $(target).html(template);
}

export default renderShopData;