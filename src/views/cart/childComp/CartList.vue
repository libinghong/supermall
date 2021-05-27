<template>
  <div class="cartlist">
    <scroll class="content" ref="scroll">
     <cartlist-item v-for="(item, index) in cartList" :key="index" :cart="item" ></cartlist-item>
    </scroll> 
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartlistItem from './CartlistItem'

  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    components: {
      Scroll,
      CartlistItem
    },
   
    computed: {
    ...mapGetters([
      'cartList'
    ]),
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cartlist {
    /* position: relative; */
    /* z-index: 4; */
    /* background-color: #fff; */
    /* height: calc(100% - 44px - 49px); */
    height: 100vh;
  }
  .content {
    height: calc(100% - 93px);
     
    /* height: calc(100% - 49px); */
    overflow: hidden;
  }
</style>