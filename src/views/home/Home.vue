<template>
  <div id="home">
     <tar-control
        class="tar-control"
        :titles="['流行', '新款', '精选']"
        @clickItem="clickItem"
        ref="control"
        v-show="iscontrolshow"
      />
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content"  ref="scroll" 
    :probe-type="3" 
    @scroll="scrollposition"
    :pull-up-load="true"
    @pullingUp="pullingLoad"
    >
      <home-swiper :banners="banners" @imglode.once="imglode" ref="swiper"></home-swiper>
      <recomend :recommends="recommends"></recomend>
      <feature></feature>
      <tar-control
        class="tar-control"
        :titles="['流行', '新款', '精选']"
        @clickItem="clickItem"
        ref="control2"
      />
      <good-list :goods="showgoods" />
    </scroll>
    <back-top @click.native="clickbacktop" v-show="isshow"/>
  </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComp/HomeSwiper';
import Recomend from './childComp/Recomend';
import Feature from './childComp/Feature';
import TarControl from 'components/content/tarControl/TarControl';
import GoodList from 'components/content/good/GoodList';
import Scroll from 'components/common/scroll/Scroll';
// import BackTop from 'components/content/backtop/BackTop'

import { getHomeMultidata, getHomeGooddata } from "network/home";
import {itemListenerMixin, backtopmixin} from "common/mixin"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recomend,
    Feature,
    TarControl,
    GoodList,
    Scroll,
    // BackTop
  },
 
  data() {
    return {
      //保存数据
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currectType: "pop",
      isshow: false,
      offsettop: 0,
      iscontrolshow: false,
      isrefresh: null
    };
  },
  //混入 将防抖函数进行刷新混入，减少代码冗余
  mixins: [itemListenerMixin],
  computed: {
    showgoods() {
      return this.goods[this.currectType].list;
    },
  },

  //组件创建时执行的函数
  created() {
    //获取首页轮播图数据请求
    this.getHomeMultidata();

    //请求商品数据

    this.getHomeGooddata("pop");
    this.getHomeGooddata("new");
    this.getHomeGooddata("sell");
  },
  destroyed() {
    console.log('home销毁')
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY)
    this.$refs.scroll.refresh()

    this.$refs.swiper.startTimer()
  },
  deactivated() {
    // console.log(this.$refs.scroll.scroll.y)
    this.saveY = this.$refs.scroll.getScrollY()
    this.$bus.$off('imgLoadend', this.isrefresh)

    this.$refs.swiper.stopTimer()
    
  } ,
  mounted() {
    

    
  },
  mixins: [backtopmixin],
  methods: {
    /* 监听事件
     */

    //监听点击哪个good[type]
    clickItem(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currectType = "pop";
          break;
        case 1:
          this.currectType = "new";
          break;
        case 2:
          this.currectType = "sell";
          break;
      }
      this.$refs.control2.currentIndex = index
      this.$refs.control.currentIndex = index
      
    },

    //监听backtop的显示和消失
    scrollposition(position) {
      // console.log(position)

      this.showbacktop(position)
      this.iscontrolshow = position.y < -this.offsettop
    },
    //下拉加载数据
    pullingLoad() {
      console.log('加载更多')
      this.getHomeGooddata(this.currectType)
      // this.refresh()
    },
    //监听轮播图图片加载
    imglode() {
      this.offsettop = this.$refs.control2.$el.offsetTop
      console.log(this.$refs.control2.$el.offsetTop)
    },
   


    /*  网络请求
     */
    //请求轮播图数据，保存数据到banners和recommend
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    //请求商品数据，保存数据到啊goods
    getHomeGooddata(type) {
      let page = this.goods[type].page + 1
      getHomeGooddata(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        // for (let n of res.data.list) {
        //   this.goods[type].list.push(n);
        // }
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px;
  text-align: center; */
  height: 100vh;
  /* position: relative; */
  /* bottom: 49px; */
}

.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: var(--color-tint);
  color: #fff;
}
.tar-control {
  position: sticky;
  top: 44px;
  z-index: 2;
  overflow: hidden;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;  
}

.back-top {
  position: ab;
}
</style>