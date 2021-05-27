<template>
  <div class="bottom">
    <div class="item item-left">
      <div>
        <i class="icon serve"></i>
        <span class="item-serve">客服</span>
      </div> 
      <div>
        <i class="icon shop"></i>
        <span class="item-shop">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="item-collect">收藏</span>
      </div>
    </div>
    <div class="item shopping">
        <div class="cart" @click="addcart">加入购物车</div>
        <div class="buy" @click="tocart">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  methods: {
    addcart() {
      this.$emit('addcart')
    },
    tocart() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
  .bottom {
    height: 49px;
    background: #fff;
    display: flex;
    position: fixed;
    bottom: 0px;
    right: 0;
    left: 0;
    z-index: 10;
    text-align: center;
  }

  .item {
    flex: 1;
    display: flex;
  }

  .item div {
    flex: 1;
  }

  .item-left {
    font-size: 13px;
  }

  .item-left .icon {
    
    display: block;
    width: 18px;
    height: 18px;
    margin: 8px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .item-left .serve {
    background-position: 0  -42px;
  }

  .item-left .shop {
    background-position: 0 -80px;
  }
  .shopping {
    flex: 1px;
    display: flex;
    font-size: 15px;
  }

   .shopping {
    font-size: 15px;
    /* color: #fff; */
    line-height: 49px;
    /* flex: 1; */
    display: flex;
  }

   .shopping .cart {
    background-color: #ffe817;
    color: #333;
  }

   .shopping .buy {
    background-color: #f69;
    color: #333;
  }
</style>