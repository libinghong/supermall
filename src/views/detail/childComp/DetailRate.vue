<template>
  <div class="rate" v-if="Object.keys(rate).length !== 0">
    <div class="urate">
      <span class="left">用户评价</span>
      <span class="right">更多<i class="arrow-right"></i></span>
      
    </div>
    <div class="user">
      <img :src="rate.user.avatar" alt="">
      <span>{{rate.user.uname}}</span>
    </div>
    <div class="content">{{rate.content}}</div>
    <div class="more">
      <span class="data">{{rate.created | ShowDate}}</span>
      <span>{{rate.style}}</span>
    </div>
    <div class="info-imgs">
          <img :src="item" v-for="(item, index) in rate.images" :key="index">
        </div>
  </div>
</template>

<script>

import {formatDate} from 'common/utils'
export default {
  name: "DetailRate",
  props: {
    rate: {
      type: Object,
      default: {}
    }
  },
  filters: {
    ShowDate(value) {
      //1.将时间戳转为Date对象
      const date = new Date(value * 1000) //秒为单位
      //2.将date格式化
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>

  .urate {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .urate .left {
    margin-left: 10px;
    font-size: 15px;
  }
  .urate .right {
    margin-right: 10px;
    font-size: 13px;
  }
  .user {
    margin: 10px 8px;
    line-height: 45px;
    display: flex;
    align-items: center;
  }

  .user img {
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }

  .user span {
    margin-left: 20px;
    color: #000;
  }

  .content {
    padding: 0 15px;
    color: #777;
    font-size: 14px;
    line-height: 1.5;
  }

  .more {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
    margin-left: 20px;
    padding-right: 10px;

  }

  .more data {
    margin-right: 8px;
  }

  .info-imgs {
    margin-top: 10px;
  }

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-left: 20px;
  }
</style>