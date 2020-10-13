<template>
  <div class="fa">
    <div class="tags">
      <span
        class="tag"
        v-for="(tag, index) in tags"
        :key="index"
        :class="{ gray: tag.name === '差评' }"
      >
        {{ tag.name }} {{ tag.count | trueCount }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
    },
  },
  filters: {
    trueCount(value) {
      if (value > 0) {
        return value;
      }
      return '';
    },
  },
};
</script>

<style lang="less" scoped>
.fa {
  padding: 0 2 * @padding;
  background-color: white;
}
.tags {
  margin-top: 2vw;
  display: flex;
  padding: 1 * @padding 0;
  border-bottom: 0.05333333333333334rem solid @border;
  flex-wrap: wrap;
  > .tag {
    box-sizing: border-box;
    font-size: 0.64rem;
    padding: 2vw 3vw;
    margin: @padding;
    margin-right: 2vw;
    background-color: #ebf5ff;
    border-radius: 0.16rem;
    color: @gray;
  }
  > .tag:first-child {
    color: white;
    background-color: #0097ff;
  }
  > .gray {
    background-color: #f5f5f5;
  }
}
</style>
