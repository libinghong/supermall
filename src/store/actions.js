import {ADD_COUNT, ADD_CART } from './mutation-type'

export default {
  Addcart(context, payload) {
   return new Promise((resolve, reject) => {
      //1.查找购物车是否有商品
    let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)

    //2.根据判断是将已存在的商品加1，还是加入新的商品
    if (oldproduct) {
      context.commit(ADD_COUNT, oldproduct)
      resolve('该商品数量加1')
    } else {
      payload.count = 1
      context.commit(ADD_CART, payload)
      resolve('该商品加入购物车')
    }
   })

  }
}