<template>
  <div class="tar-control">
    <div v-for="(item, index) in titles" :key="index"
     class="tar-control-item" :class="{active: index === currentIndex}"
     @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "TarControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('clickItem', index)
    }
  }
}
</script>

<style scoped>
  .tar-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 3;
    text-align: center;
  }

  .tar-control .active span {
    padding: 3px;
    border-bottom: 2px solid var(--color-tint);
  }
  
  .tar-control-item {
    flex: 1;
   
  }

  .active {
    color: var(--color-tint);
  }


</style>