<template>
  <span class="stars">
    <font-awesome-icon
      icon="star"
      v-for="(item, index) in 5"
      :key="index"
      :class="getColor(index)"
    />
  </span>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getColor(index) {
      if (index < this.score) {
        return 'yellow';
      }
      return '';
    },
  },
};
</script>

<style lang="less" scoped>
.stars {
  font-size: 0.5333333333333333rem;
  color: #f5f5f5;
}
.yellow {
  color: #ffc700;
}
</style>
