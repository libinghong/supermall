<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-info">
    <div class="title">{{goods.title}}</div>
    <div class="info-price">
      <span class="newprice">{{goods.price}}</span>
      <span class="oldprice">{{goods.oldPrice}}</span>
      <span class="discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div class="colums" >
      <span v-for="(item, index) in (goods.columns.length-1)" :key="index">{{goods.columns[index]}}</span>
      <span>{{goods.servies[1].name}}</span>
    </div>
    <div class="servies">
      <span v-for="(item, index) in (goods.servies.length-1)" :key="index" class="servies-item">
        <span>
          <img :src="goods.servies[index].icon" alt="">
          <span>{{goods.servies[index].name}}</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    goods: {
      type: Object,
      default: {}
    }
  }

}
</script>

<style scoped>
  .detail-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .title {
    color: #222
  }
  .info-price {
    margin-top: 10px;
  }

  .info-price .newprice {
    font-size: 24px;
    margin-left: 4px;
    color: var(--color-high-text);
  }

  .info-price .oldprice {
    font-size: 13px;
    padding-top: 6px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discountDesc {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    position: relative;
    top: -4px
  }

  .colums {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .servies {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .servies-item {
    font-size: 13px;
    color: #333;
  }

  .servies-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
</style>
