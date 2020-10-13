<template>
  <div class="foodtry" @click="goRecommend">
    <img :src="imgData.src" alt="" />
    <p>{{ imgData.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imgData: {
      type: Object,
    },
  },
  methods: {
    goRecommend() {
      this.$router.push('home/recommend');
    },
  },
};
</script>

<style lang="less" scoped>
.foodtry {
  width: 20%;
  height: 50%;
  img {
    width: 60%;
    height: 50%;
    margin: 10%;
  }
  p {
    height: 30%;
    font-size: 0.5333333333333333rem;
    text-align: center;
    line-height: 30%;
    width: 80%;
    color: rgb(148, 147, 147);
  }
}
</style>
