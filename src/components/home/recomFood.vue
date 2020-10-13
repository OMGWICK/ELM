<template>
  <div class="food">
    <min-foodtry
      v-for="(foodtry, index) in foodtrys"
      :key="index"
      :imgData="foodtry"
    ></min-foodtry>
    <div class="center"><loading-anima v-if="isLoading"></loading-anima></div>
  </div>
</template>

<script>
import minFoodtry from './minFoodtry';
import loadingAnima from '../loadingAnima';

export default {
  components: {
    minFoodtry,
    loadingAnima,
  },
  props: {
    foodtrys: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isLoading() {
      if (this.foodtrys.length === 0) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="less" scoped>
.food {
  padding: 0 @padding;
  background: white;
  height: 45vw;
  display: flex;
  flex-wrap: wrap;
  padding-top: 1vw;
  > div.center {
    text-align: center;
    width: 100%;
    height: 100%;
  }
}
</style>
