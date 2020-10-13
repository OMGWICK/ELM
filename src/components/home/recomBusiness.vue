<template>
  <div class="recom">
    <div class="ad"><span> 推荐商家</span></div>
    <filter-header :detailList="detailList"></filter-header>
  </div>
</template>

<script>
import filterHeader from '../filterHead';

export default {
  components: {
    filterHeader,
  },
  props: {
    detailList: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.recom {
  padding: 0 @padding;
  background-color: white;
  .ad {
    text-align: center;
    height: 10vw;
    line-height: 10vw;
    span {
      color: rgb(90, 87, 87);
      font-size: 0.8533333333333334rem;
      position: relative;
      &::before {
        content: '──';
        position: relative;
        right: 0.5333333333333333rem;
      }
      &::after {
        content: '──';
        position: relative;
        left: 0.5333333333333333rem;
      }
    }
  }
}
</style>
