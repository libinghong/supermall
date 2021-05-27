<template>
  <div class="detailitem">
    <nav-bar>
      <img src="~assets/img/common/back.svg" alt="" slot="left" @click="routerback" >
      <div slot="center" class="titles">
       <div class="titlesitem" v-for="(item,index ) in titles" :key="index" @click="itemclick(index)" :class="{active: index === currentIndex}">
         <span>{{item}}</span>
       </div>
        </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "DetailItem",
   components: {
    NavBar
  },
  data() {
    return {
      iid: null,
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },

  created() {
    this.iid = this.$route.params.iid
  },
  methods: {
    routerback() {
      this.$router.back()
    },
    itemclick(index) {
      this.currentIndex = index
      this.$emit('itemclick',index)
    }
  }
}
</script>

<style scoped>
  .detailitem {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 8;
    background-color: #fff;
  }

  .detailitem img{
    padding-top: 11px;
  }
  .titles {
    display: flex;
  }
  .titlesitem {
    text-align: center;
    flex: 1;
    font-size: 14px;
  }
  .active span {
    padding-bottom: 3px;
    color: var(--color-high-text);
  }
</style>