<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: {},
      y: {
        type: Number,
        default: 0
      }
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    // 传出移动的位置
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position)
        this.$emit("scroll", position);
      });
    }

    if (this.pullUpLoad ) {
      //传出已经下拉
      this.scroll.on("pullingUp", () => {
        // console.log('shuaxin')
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    //定义返回开始
    scrollTo(x, y, time = 500) {
      this.scroll &&  this.scroll.scrollTo(x, y*1, time);
    },
    //刷新
    refresh() {
      console.log("刷新");
      this.scroll && this.scroll.scrollTo && this.scroll.refresh();
    },

    //结束下拉
    finishPullUp() {
      this.scroll && this.scroll.scrollTo && this.scroll.finishPullUp();
    },
    // 离开的位置
    getScrollY() {
      return this.scroll ? this.scroll.y : 0  
    }
  },
};
</script>
