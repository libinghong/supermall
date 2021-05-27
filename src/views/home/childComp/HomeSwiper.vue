<template>
  <swiper ref="swiper">
    <swiper-item v-for="(item, index) in banners" v-bind:key="index">
      <a href="">
        <img :src="item.image" alt="" @load="imglode">
      </a>
    </swiper-item>
  </swiper>
</template>


<script>

  import {Swiper, SwiperItem} from 'components/common/swiper';
  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imglode() {
      this.$emit('imglode')
      // console.log('123')
    },

    stopTimer() {
      this.$refs.swiper.stopTimer()
    },

    startTimer() {
      this.$refs.swiper.startTimer()
    }
  }
}
</script>

<style scoped>

</style> 