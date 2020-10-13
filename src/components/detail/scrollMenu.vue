<template>
  <div class="scroll">
    <!-- 实现细节,注意将id挂载到div上面然后使用猫店跳转 -->
    <single-menu v-for="item in menu" :key="item.id" :menu="item"></single-menu>
  </div>
</template>

<script>
import singleMenu from './singleMenu';
export default {
  props: {
    isFixed: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array,
      default() {
        return [{}];
      },
    },
  },
  data() {
    return {
      position: 0,
    };
  },
  components: {
    singleMenu,
  },
};
</script>

<style lang="less" scoped>
.scroll {
  flex: 3.4;
  padding: 0 2 * @padding;
}
</style>
