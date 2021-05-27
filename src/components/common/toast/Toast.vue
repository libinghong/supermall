<template>
  <div >
    <div class="toast" v-show="ISshow">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      ISshow: false,
      message: ''
    }
  },
  methods: {
    warnshow(message, duration=2000) {
      this.ISshow = true
      this.message = message
      

      setTimeout(() => {
        this.ISshow = false
        this.message = ''  
    },duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 10;

    padding: 8px;
    transform: translate(-50%, 50%);

    color: #fff;
    background-color: rgba(0,0,0,.7);

  }
</style>