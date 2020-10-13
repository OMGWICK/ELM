<template>
  <div>
    <div class="search-area">
      <div class="fa" :class="{ fixed: isFixed }">
        <custom-input v-model="text" placeholder="输入商家名"></custom-input
        ><span @click="startSearch">搜索</span>
      </div>
      <hot-search v-if="isInittal" :startSearch="startSearch"></hot-search>
    </div>
    <div class="add-position"></div>
  </div>
</template>

<script>
import customInput from '@/components/customInput';
import hotSearch from '@/components/search/hotSearch';

export default {
  data() {
    return {
      text: '',
    };
  },
  props: {
    isInittal: {
      type: Boolean,
      required: true,
    },
    startSearch: {
      type: Function,
      required: true,
    },
    isFixed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    customInput,
    hotSearch,
  },
};
</script>

<style lang="less" scoped>
.search-area {
  margin-top: 3vw;
  .fa {
    .input {
      height: 8vw;
      font-size: 0.7466666666666667rem;
      background-color: #f5f5f5;
      width: 88%;
      border-radius: 5%;
    }
    span {
      width: 12%;
      text-align: right;
      display: inline-block;
      font-size: 0.8533333333333334rem;
      font-weight: 700;
    }
  }
}
.fixed {
  position: fixed;
  top: 10vw;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0 @padding;
  z-index: 10;
}
.add-position {
  margin-top: 3vw;
  height: 8vw;
}
</style>
