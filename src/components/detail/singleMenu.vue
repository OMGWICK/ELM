<template>
  <div :id="menu.id" class="single">
    <p class="title">
      {{ menu.name }}
    </p>
    <menu-food-box
      v-for="food in menu.foods"
      :key="food.item_id"
      :food="food"
    ></menu-food-box>
  </div>
</template>

<script>
import menuFoodBox from './menuFoodBox';
export default {
  props: {
    menu: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    menuFoodBox,
  },
};
</script>

<style lang="less" scoped>
.single {
  width: 100%;
  > .title {
    color: @gray;
    font-size: 0.7466666666666667rem;
    padding-bottom: 1vw;
  }
}
</style>
