export default {
  //购物车数量
  cartListLength(state) {
    return state.cartList.length
  },

  //购物信息
  cartList(state) {
    return state.cartList
  }
}