<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { debounceFactory } from './tools';
import { createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('home');

export default {
  created() {
    const debounce = debounceFactory(100);
    const debounceScroll = debounceFactory(10);
    window.addEventListener('resize', () => {
      debounce(() => {
        document.documentElement.style.fontSize =
          document.documentElement.clientWidth / 20 + 'px';
      });
    });
    window.addEventListener('scroll', () => {
      debounceScroll(() => {
        this.changeCurrentPosition(document.documentElement.scrollTop);
      });
    });
  },
  methods: {
    ...mapMutations(['changeCurrentPosition']),
  },
};
</script>

<style lang="less" scoped></style>

<style lang="less">
@import url('~@/assets/base.less');
</style>
