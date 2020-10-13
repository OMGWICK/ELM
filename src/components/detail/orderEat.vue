<template>
  <div class="order-eat">
    <posters :posters="posters"></posters>
    <main-menu :menu="menu"></main-menu>
  </div>
</template>

<script>
import posters from './poster';
import mainMenu from './mainMenu';
export default {
  props: {
    posters: {
      type: Array,
      default() {
        return [];
      },
    },
    menu: {
      type: Array,
      default() {
        return [{}];
      },
    },
  },
  components: {
    posters,
    mainMenu,
  },
};
</script>

<style lang="less" scoped>
.order-eat {
  background-color: white;
}
</style>
