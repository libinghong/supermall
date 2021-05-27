<template>
  <div>
    <swiper ref="swiper">
      <swiper-item class="item" v-for="(item, index) in banners" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    stopTimer() {
      this.$refs.swiper.stopTimer();
    },

    startTimer() {
      this.$refs.swiper.startTimer();
    },
  },
};
</script>

<style scoped>
.item {
  height: 250px;
}
</style>