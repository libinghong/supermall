<template>
  <div class="check-buttom">
    <img src="~assets/img/cart/tick.svg" alt="" :class="{check: ischeck}">
  </div>
</template>

<script>
export default {
  name: "CheckButtom",
  props: {
    ischeck: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style scoped>
  .check-buttom {
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check {
    background-color: var(--color-tint);
    border-radius: 50%;
    /* border: 2px solid var(--color-tint) */
  }
</style>