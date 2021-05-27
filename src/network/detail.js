import {request} from './request'

export function getDetail(iid) {
  return request ({
    url: '/detail' ,
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request ({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.desc = itemInfo.desc
    this.oldPrice = itemInfo.oldPrice
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.discountDesc = itemInfo.discountDesc
    this.newprice = itemInfo.lowNowPrice
    this.columns = columns
    this.servies = services 
  }
}

export class Shops {
  constructor(shopInfo) {
    this.shoplogo = shopInfo.shopLogo
    this.score = shopInfo.score
    this.cfans = shopInfo.cFans
    this.name = shopInfo.name
    this.cgoods = shopInfo.cGoods
    this.csells = shopInfo.cSells
  }
}

export class Params {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : ''
    this.set = info.set
    this.tables = rule.tables
  }
}