<template>
  <div ref="menuCategroy">
    <div class="main-menu">
      <menu-category :category="category" :isFixed="isFixed"></menu-category>
      <scroll-menu :isFixed="isFixed" :menu="mainMenu"></scroll-menu>
    </div>
  </div>
</template>

<script>
import menuCategory from './menuCategroy';
import scrollMenu from './scrollMenu';
import { mapState } from 'vuex';

export default {
  props: {
    menu: {
      type: Array,
      default() {
        return [{}];
      },
    },
  },
  computed: {
    category() {
      if (this.menu.length <= 1) {
        return this.menu;
      }
      return this.menu.slice(1).map((v) => {
        const { id, name } = v;
        return { id, name };
      });
    },
    mainMenu() {
      if (this.menu.length <= 1) {
        return this.menu;
      }
      return this.menu.slice(1);
    },
    ...mapState('home', ['currentPosition']),
    isFixed() {
      if (this.top !== 0 && this.currentPosition > this.top) {
        return true;
      }
      return false;
    },
    top() {
      if (this.currentPosition) {
        return (
          this.$refs['menuCategroy'].offsetTop -
          0.14 * document.documentElement.clientWidth
        );
      }
      return 0;
    },
  },
  components: {
    menuCategory,
    scrollMenu,
  },
};
</script>

<style lang="less" scoped>
.main-menu {
  display: flex;
}
</style>
