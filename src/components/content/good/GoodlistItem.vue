<template>
  <div class="goodlistitem" @click="itemclick">
    <!-- <img :src="imgshow" alt="" @load="imgLoadend"> -->
    <img v-lazy="imgshow" alt="" @load="imgLoadend">
    <div class="goodlistitem-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodlistItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return []
      }
    }
  },
  computed: {
     imgshow() {
      return this.goodsitem.image || this.goodsitem.show.img 
    }
  },
  methods: {
    imgLoadend() {
      this.$bus.$emit('imgLoadend')
    },
    itemclick() {
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  }
}
</script>

<style scoped>
  .goodlistitem {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goodlistitem img {
    width: 100%;
    border-radius: 5px;
  }

  .goodlistitem-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodlistitem-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
   }

  .goodlistitem-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goodlistitem-info .collect {
    position: relative;
  }

  .goodlistitem-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>