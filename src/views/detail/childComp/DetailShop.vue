<template>
  <div v-if="Object.keys(shops).length !== 0 " class="detail-shop">
    <div class="logo">
      <img :src="shops.shoplogo" alt="">
      <span class="name">{{shops.name}}</span>
    </div>
    <div class="middle">
      <div class="leftshow leftitem">
        <div class="sell">
          <div class="count-sell">{{shops.csells | fiftersell}}</div>
          <div class="text-sell">总销量</div>
        </div>
        <div class="goods">
          <div class="count-goods">{{shops.cgoods}}</div>
          <div class="text-goods">全部宝贝</div>
        </div>
      </div>
      <div class="rightshow">
        <table cellspacing="6">
          <tr v-for="(item, index) in shops.score" :key="index" >
          <td>{{item.name}}</td>
          <td class="score" :class="{'score-score': item.isBetter}"><span>{{item.score}}</span></td>
          <td class="better" :class="{'score-better': item.isBetter}"><span>{{item.isBetter  ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shops: {
      type: Object,
      default: {}
    }
  },
  filters: {
    fiftersell(value) {
      if (value < 10000) return value
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>

  .detail-shop {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .logo {
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .logo img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  } 

  .logo .name {
    margin-left: 10px;
    vertical-align: center;
  }

  .middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .leftshow {
     flex: 1;
     padding-left: 10px;
  }

  .leftitem {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .count-sell, .count-goods {
    font-size: 18px;
  }

  .text-sell, .text-goods {
    margin-top: 10px;
    font-size: 12px;
  }

  .rightshow {
    flex: 1;
    font-size: 13px;
    color: #333;
    /* margin-left: 15px; */
    padding-left: 20px;
  }

  .rightshow .score {
    color: #5ea732;
  }

  .rightshow .better {
    color: #fff;
    background-color: #5ea732;
  }

  .score-score span {
    color: #f13e3a;
  }

  .score-better span {
    color: #fff;
    background-color: #f13e3a;
  }

  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .shop-bottom .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>