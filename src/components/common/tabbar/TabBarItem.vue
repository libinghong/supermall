<template>
  <div id="tab-bar-item" @click="itemclick">
    <div v-show="!isActive" class="item-icon"><slot name="icon"></slot></div>
    <div v-show="isActive" class="item-icon-active"><slot name="icon-active"></slot></div>
    <div :style="styleclass" class="item-text"><slot name="text"></slot></div>
  </div>
</template>

<script>

  export default {
    name: 'TabBarItem',
    props: {
      link: {
        typle: String,
        required: true
      },
      activeColor: {
        typle: String,
        default: '#ff5777'
      }
    },
    computed: {
      isActive () {
        return this.$route.path.indexOf(this.link) !== -1
      },
      styleclass() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemclick() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  /* flex布局 */
  #tab-bar-item {
    flex: 1;
  }
 /* 图片样式 */
  .item-icon img, .item-icon-active img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
  /* 文字样式 */
  .item-text {
    font-size: 14px;
    margin-top: 3px;
    color: #333;    
  }
</style>