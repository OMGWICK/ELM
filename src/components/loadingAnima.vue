<template>
  <p class="anima-father" :style="animaStyle">
    <font-awesome-icon icon="spinner" class="anima" :style="loadingStyle" />
  </p>
</template>

<script>
export default {
  props: {
    loadingStyle: {
      type: Object,
      default: null,
    },
    animaStyle: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes transfo {
  0% {
    transform-origin: center;
    transform: rotate(0);
  }

  100% {
    transform-origin: center;
    transform: rotate(360deg);
  }
}
.anima {
  animation: linear infinite 0.5s transfo;
}
.anima-father {
  text-align: center;
  padding: @padding 0;
  height: 100vh;
  color: #0089dc;
  background-color: white;
  border: none;
}
</style>
