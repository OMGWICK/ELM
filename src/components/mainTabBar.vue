<template>
  <div class="tabbar">
    <router-link
      :to="bar.to"
      v-for="(bar, index) in bars"
      :key="index"
      :class="{ linkActiveClass: $route.name === bar.to }"
    >
      <font-awesome-icon :icon="bar.icon" />{{ bar.titile }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bars: [
        { icon: 'cookie', titile: '首页', to: 'home' },
        { icon: 'compass', titile: '发现', to: 'discover' },
        { icon: 'file-alt', titile: '订单', to: 'order' },
        { icon: 'user', titile: '我的', to: 'user' },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.tabbar {
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 13.333333vw;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
  a {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.4266666666666667rem;
    color: rgba(0, 0, 0, 0.507);
    height: 80%;
    flex: 1;
    text-decoration: none;
    svg {
      margin: 0 9vw;
      font-size: 0.96rem;
      margin-bottom: 0.1vw;
      color: rgba(0, 0, 0, 0.288);
    }
    &:active {
      background-color: white;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
    }
  }
  .linkActiveClass {
    color: @primary;
    svg {
      color: @primary;
    }
  }
}
</style>
