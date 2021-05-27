<template>
  <div class="cart-bottom">
    <check-buttom class="checkbuttom" :ischeck="checkcartall" @click.native="checkall"></check-buttom>
    <span>全选</span>
    <div class="price">合计: ￥{{totalprice}}</div>
    <div class="buy" @click="nocart">购买({{itemNum}})</div>
  </div>
</template>

<script>
import CheckButtom from 'components/content/checkbuttom/CheckButtom'


export default {
  name: "CartBottom",
  components: {
    CheckButtom
  },
  computed: {
    totalprice() {
      return this.$store.state.cartList.filter(cart => {
          return cart.check 
      }).reduce((preValue, cart) => {
        return preValue + cart.price * cart.count 
      },0).toFixed(2)
    },
    itemNum() {
      return this.$store.state.cartList.filter(cart =>  cart.check ).length
    },

    checkcartall() {
      //return !(this.$store.state.cartList.filter(cart => !cart.check).length)
      if (this.$store.state.cartList==0) {
        return false
      }else {
        return !this.$store.state.cartList.find(item => !item.check) 
      }
      
    },
  },

  methods: {
    
    checkall() {
      if (this.checkcartall) {
        //全部不选中
        this.$store.state.cartList.forEach(cart =>  cart.check = false )
      }else {
        //全部选中
        this.$store.state.cartList.forEach(cart =>  cart.check = true)
      }
    },

    nocart() {
      if (!this.checkcartall) {
        this.$toast.warnshow('请选择要购买的商品')
      }
    }
  }
}
</script>

<style scoped>
  .cart-bottom {
    position: fixed;
    display: flex;
    z-index: 10;
    bottom: 49px;
    height: 40px;
    width: 100%;
     
    align-items: center;
    background-color: #eee;
  }
  .cart-bottom span {
    margin-left: 5px;
    width: 50px;
  }
  .checkbuttom {
    width: 20px;
    height: 20px;

    margin-left: 8px;
    margin-right: 5px;
  }


  .cart-bottom .price {
    flex: 1;
  } 

  .buy  {
    height: 38px;
    width: 100px;
    text-align: center;
    line-height: 38px;
    border-radius: 2px;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>