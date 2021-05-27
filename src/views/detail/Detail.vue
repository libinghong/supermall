<template>
  <div class="detail">
    <detail-item class="detail-item" @itemclick="itemclick" ref="item"></detail-item>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scrollposition">
      <detail-swiper :banners="banners" ref="dswiper"></detail-swiper>
      <detail-info :goods="goods"></detail-info>
      <detail-shop :shops="shops" class="shops"></detail-shop>
      <detail-showimg :detailimg="detailimg" @imagload="imagload"></detail-showimg>
      <detail-params :params="params" ref="params"></detail-params>
      <detail-rate :rate="rate" ref="rate"></detail-rate>
      <good-list :goods="recommend" ref="recommend"></good-list>
    </scroll>
    <detail-bottom @addcart="addcart"></detail-bottom>
    <back-top @click.native="clickbacktop"  v-show="isshow"></back-top>
  </div>
</template>

<script>
import DetailItem from "./childComp/DetailItem";
import DetailSwiper from "./childComp/DetailSwiper";
import DetailInfo from './childComp/DetailInfo'
import DetailShop from './childComp/DetailShop'
import Scroll from 'components/common/scroll/Scroll'
import DetailShowimg from './childComp/DetailShowimg'
import DetailParams from './childComp/DetailParams'
import DetailRate from './childComp/DetailRate'
import GoodList from 'components/content/good/GoodList'
import DetailBottom from './childComp/DetailBottom'

import { getDetail, Goods, Shops, Params, getRecommend } from "network/detail";
import {itemListenerMixin,backtopmixin } from 'common/mixin'

import {mapActions} from 'vuex'


export default {
  name: "Detail",
  components: {
    DetailItem,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    Scroll,
    DetailShowimg,
    DetailParams,
    DetailRate,
    GoodList,
    DetailBottom,
  },

  data() {
    return {
      iid: null,
      banners: [],
      goods: {},
      shops: {},
      detailimg: {},
      params: {},
      rate: {},
      recommend: [],
      getscrollY: null,
      currentIndex: 0,
      
    };
  },
  mixins: [itemListenerMixin],
  mixins: [backtopmixin],
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    this.getDetail();

    this.getRecommend()
  },
  destroyed() {
    this.$bus.$off('imgLoadend', this.isrefresh)
    // console.log('detail销毁')
    
  },
  deactivated() {
    this.$refs.dswiper.stopTimer()
  },
  mounted() {

  },
  methods: {
    /* 网络请求 */
    getDetail() {
      
      getDetail(this.iid).then((res) => {
        console.log(res);
        //获取轮播图信息
        const data = res.result
        this.banners = data.itemInfo.topImages;
        

        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //获取商家信息
        this.shops = new Shops(data.shopInfo)

        //获取详情信息
        this.detailimg = data.detailInfo
        
        //获取参数信息
        this.params = new Params(data.itemParams.info, data.itemParams.rule)

        //获取评论信息
        if (data.rate.cRate !== 0) {
          this.rate = data.rate.list[0]
        }
      });
    },
    //获取评论信息
    getRecommend() {
      getRecommend().then(res => {
        console.log('recommend请求')
        this.recommend = res.data.list
      })

    },


    /* 监听 */
    imagload() {
      this.$refs.scroll.refresh()

      this.getscrollY = []
      this.getscrollY.push(0)
      this.getscrollY.push(this.$refs.params.$el.offsetTop)
      this.getscrollY.push(this.$refs.rate.$el.offsetTop)
      this.getscrollY.push(this.$refs.recommend.$el.offsetTop)
      // this.getscrollY.push(Number.Max_VAULE) 
      //方法二使用，提供一个最大值，i就不会超出遍历范围
      console.log(this.getscrollY)
    },

    //点击标题跳转到绑定的内容
    itemclick(index) {
      // console.log(index)
      // console.log(-this.getscrollY[index])
      //滚动到与标题相应内容位置
      this.$refs.scroll.scrollTo(0, -this.getscrollY[index], 1000)
    },

    //监听详情页标题与内容绑定
    scrollitem(position) {
      // console.log(position)
      const positiony = -position.y
      // console.log(-position.y)
      //内容与标题绑定
      for(let i = 0; i < this.getscrollY.length; i++) {
        //方法一
        if (this.currentIndex !== i && ((i < this.getscrollY.length-1  && positiony >= this.getscrollY[i] && positiony < this.getscrollY[i + 1]) ||
        (i == this.getscrollY.length-1 && positiony >= this.getscrollY[i]))) {
          this.currentIndex = i
          this.$refs.item.currentIndex = this.currentIndex
        }


        //方法二，赋予一个最大值
        // if (this.currentIndex !== i && (positiony >= this.getscrollY[i] && positiony <= this.getscrollY[i + 1])) {
        //   this.currentIndex = i
        //   this.$refs.item.currentIndex = this.currentIndex
        // }
      }
    },

    scrollposition(position) {
      this.scrollitem(position)
      //判断backtop是否显示
      
      //判断是否显示backtop
      this.showbacktop(position)
    },

    //映射vuex中actions，作用于methods使用
    ...mapActions(['Addcart']),

    //加入购物车
    addcart() {
      //创建一个对象
      const product = {}
      product.image = this.banners[0]
      product.iid = this.iid
      product.title = this.goods.title
      product.desc = this.detailimg.desc
      product.price = this.goods.newprice

      //方法一 查找商品是否已加入购物车，映射actions，相当于调用自己的方法
      this.Addcart(product).then(res => {
        // console.log(res)

        this.$toast.warnshow(res, 2000)
      })

      this.$store.dispatch('Addcart', product)


      //方法二 查找商品是否已加入购物车，直接调用vuex的actions
      // this.$store.dispatch('Addcart', product).then(res => {
      //   console.log(res)
      // })

    }
  },
};
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
  }
  .detail-item {
    position: relative;
    z-index: 6;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 93px);
  }

</style>

