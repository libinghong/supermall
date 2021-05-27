<template>
<div class="recomend">
  <div v-for="(item, index) in recommends" class="recomend-item" :key="index">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
  export default {
    name: "Recomend",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recomend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0px 20px;
    border-bottom: 8px solid #eee;
  }

  .recomend-item {
    flex: 1;

  }
  .recomend-item img {
    height: 65px;
    width: 65px;
  }
</style>
