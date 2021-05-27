<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: 'TabBar',
  }
</script>

<style scoped>
  /* 组件样式 */
  #tab-bar {
    background-color: #fff;
    height: 49px;
    border-top: 1 px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);

    /* 定位 */
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 8;

    /* flex布局 */
    display: flex;
    text-align: center;
  }
  
</style>
