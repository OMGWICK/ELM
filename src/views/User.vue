<template>
  <div>
    <transition enter-active-class="all" leave-active-class="all" name="slide">
      <router-view />
    </transition>
  </div>
</template>

<script>
//最顶级的user路由父组件
export default {};
</script>

<style lang="less" scoped>
.all {
  transition: all ease-in 0.3s;
}
.anima {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.slide-enter {
  transform: translateX(-100%);
  .anima();
}
.slide-enter-to {
  transform: translateX(0);
  .anima();
}
.slide-leave {
  transform: translateX(0);
  .anima();
}
.slide-leave-to {
  transform: translateX(100%);
  .anima();
}
</style>
