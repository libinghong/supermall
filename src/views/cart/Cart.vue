<template>
  <div class="cart">
    <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartListLength}})</div>
  </nav-bar>
  <cart-list></cart-list>
  <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from './childComp/CartList'
import CartBottom from './childComp/CartBottom'

import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottom
  },
  computed: {
    ...mapGetters([
      'cartListLength'
    ])
  }
};
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;

  }
</style>