import { debounce} from "./utils"
import BackTop from 'components/content/backtop/BackTop'

export const itemListenerMixin = {
  mounted() {
      //防抖动进行控制刷新频率
    const refresh = debounce(this.$refs.scroll.refresh, 50)

    //刷新的函数
    this.isrefresh = () => {
      // console.log('混入刷新')
      refresh()
    }
    //根据图片加载刷新页面
     this.$bus.$on('imgLoadend', this.isrefresh )
    //  console.log('混入1')
  }
}

export const backtopmixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isshow: false
    }
  },
  methods: {
     //判断是否显示backtop
     showbacktop(position) {
      this.isshow = position.y < -1000
    },

    //监听点击backtop
    clickbacktop() {
      // console.log('111')
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}