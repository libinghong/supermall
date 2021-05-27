<template>
  <div class="showimg" v-if="Object.keys(detailimg).length !== 0">
    <div class="start"></div>
    <div class="desc">
      {{detailimg.desc}}
    </div>
    <div class="end"></div>
    <div class="key">
      {{detailimg.detailImage[0].key}}
    </div>
    <div class="list" v-for="(item, index) in detailimg.detailImage[0].list" :key="index" >
      <img :src="item" alt="" @load="imagload">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShowimg",
  props: {
    detailimg: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      counter: 0,
      loadimg: 0
    }
  },
  methods: {
    imagload() {
      // this.counter += 1
      if (++this.counter === this.loadimg) {
        // console.log('shux')
        this.$emit('imagload')
      }
    }
  },
  watch: {
    detailimg() {
      //获取图片个数
      console.log(this.detailimg.detailImage[0].list.length)
      this.loadimg = this.detailimg.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
  .showimg {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8; 
  }
  .start {
    float: left;
  }
  .end {
    float: right;
  }
  .showimg .start, .showimg .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .showimg .start::before, .showimg .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .start::before {
    left: 0;
  }
  .end::after {
    right: 0;
  }

  .desc {
    margin: 20px 12px;
    /* padding: 15px 0; */
    font-size: 14px;
     /* border-bottom: 5px solid #f2f5f8; */
  }

  .key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .list img {
    width: 100%;
  }
</style>