<template>
  <nav class="nav" :style="{ backgroundImage: `url('${trueSrc}')` }">
    <back-navigation
      :customStyle="{
        backgroundColor: 'transparent ',
        color: 'white',
      }"
    ></back-navigation>
  </nav>
</template>

<script>
import backNavigation from '@/components/backNavigation';
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
  },
  computed: {
    trueSrc() {
      if (this.imgSrc) {
        return this.detailImgSrc(this.imgSrc, true);
      }
      return '';
    },
  },
  components: {
    backNavigation,
  },
};
</script>

<style lang="less" scoped>
.nav {
  padding: 0 @padding;
  height: 26.3vw;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(119, 103, 137, 0.43);
  }
}
</style>
