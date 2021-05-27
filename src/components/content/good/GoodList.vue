<template>
  <div class="goods">
    <goodlist-item v-for="(item, index) in goods" :key="index" :goodsitem="item" />
  </div>
</template>

<script>
  import GoodlistItem from './GoodlistItem'

  export default {
    name: "GoodList",
    components: {
      GoodlistItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* 均等分 */

    padding: 4px;
  }
</style>