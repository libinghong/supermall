import {ADD_COUNT, ADD_CART } from './mutation-type'

export default {
  [ADD_COUNT](state, payload) {
    payload.count++
  },
  [ADD_CART](state, payload) {
    payload.check = true
    state.cartList.push(payload)
  }
}