<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
    /* 导航栏  */
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    /* box-shadow: 20 1px 4px rgba(100,100,100, .1); */
    text-align: center;
  
  }
   /* 左右 */
  .nav-left, .nav-right {
    width: 60px;
    /* background-color: #ff5777; */
  }
    /* 中间 */
   .nav-center {
     flex: 1;
     /* background-color: #ff5777; */
   }
</style>

