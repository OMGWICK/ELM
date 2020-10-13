<template>
  <div class="list">
    <filter-head
      :isOtherPage="true"
      otherPageClass="search"
      :detailList="detailList"
    ></filter-head>
    <shop-lists
      :lists="searchList"
      apiUrl="search"
      :pushData="pushData"
    ></shop-lists>
  </div>
</template>

<script>
import filterHead from '@/components/filterHead';
import shopLists from '@/components/shopLists';
export default {
  components: {
    shopLists,
    filterHead,
  },
  props: {
    searchList: {
      type: Array,
      required: true,
    },
    detailList: {
      type: Function,
      required: true,
    },
    pushData: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped></style>
