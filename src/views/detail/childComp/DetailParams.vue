<template>
  <div class="params" v-if="Object.keys(params).length !== 0">
    <div class="rule">
      <table v-for="(item, index) in params.tables" :key="index" >
        <tr v-for="(tr, index) in item" :key="index">
          <td v-for="(td, index) in tr" :key="index">{{td}}</td>
        </tr>
      </table>
    </div>
    <div class="info">
      <table>
        <tr v-for="(item, index) in params.set" :key="index">
          <td class="info-key">{{item.key}}</td>
          <td class="info-value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="info-img" v-if="params.image.length !== 0">
      <img :src="params.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    params: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
  .params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .params .rule table {
    width: 100%;
    border-collapse: collapse;
  }
  .parms .rule {
    margin-top: 20px;
  }
  
  .params .rule table tr {
    height: 42px;
  }

  .params .rule table tr td {
    border-bottom: 2px solid rgba(100,100,100,.1);
  }

  .info {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .info .info-key {
    width: 95px;
    height: 42px;
     
  }

  .info-value {
    color: #eb4868
  }

  .info-key, .info-value {
    border-bottom: 2px solid rgba(100,100,100,.1);
  }
   .info-img img {
    width: 100%;
  }
</style>