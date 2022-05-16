import {request} from './request'

export function getDetail(iid){
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services){
        this.title = itemInfo.title,
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldProce = itemInfo.price
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
        this.lowNowPrice = itemInfo.lowNowPrice
    }
}

export class GoodsShop {
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}

export class GoodsParam{
    constructor(info, rule){
        this.image = info.image ? info.image[0] : ''
        this.infos = info.set
        this.size = rule.tables
    }
}

export function getRecommend(){
    return request({
        url: '/recommend'
    })
}