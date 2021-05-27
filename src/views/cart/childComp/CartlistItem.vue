<template>
  <div id="shop-item" >
    <div class="item-selector">
      <check-buttom @click.native="clickcheck" :ischeck="cart.check"></check-buttom>
    </div>
    <div class="item-img" @click="todetail">
      <img :src="cart.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{cart.title}}</div>
      <div class="item-desc">商品描述: {{cart.desc}}</div>
      <div class="info-bottom">
         
        <div class="item-price left">
         
          ¥{{cart.price}}</div>
        <div class="item-count right">
          <input type="number" class="input" value="cart.count"  v-model="cart.count">
          x{{cart.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButtom from 'components/content/checkbuttom/CheckButtom'

export default {
  name: "CartlistItem",
  props: {
    cart: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    clickcheck() {
      this.cart.check = !this.cart.check
    },
    
    todetail() {
      this.$router.push('/detail/' + this.cart.iid)
    }
  },
  components: {
    CheckButtom
  },
}
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;   /* 不换行 */
    text-overflow: ellipsis;  /* 超出...显示 */
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
  .input {
    margin-top: 10px;
    width: 38px;
    height: 18px;
  }
</style>