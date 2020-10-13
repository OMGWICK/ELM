<template>
  <div class="food">
    <div class="img"><img :src="detailSrc(food.image_path)" alt="" /></div>
    <div class="content">
      <p class="title">
        {{ food.name }}
      </p>
      <p class="msg">
        月售{{ food.month_sales }}份 好评率{{ food.satisfy_rate }}%
      </p>
      <p class="bottom">$ {{ food.origin_price }}</p>
      <p class="right" @click="checkData(food)">
        <img src="~@/assets/img/add.svg" alt="" />
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    food: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    detailSrc(src) {
      return this.detailImgSrc(src);
    },
    ...mapMutations('detail', ['pushShoppingCart']),
    checkData(food) {
      if (Object.keys(food).length > 0) {
        this.pushShoppingCart(food);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.food {
  display: flex;
  padding: 1.2 * @padding 0;
  img {
    width: 100%;
    height: 100%;
  }
  > .img {
    flex: 1.8;
    margin-right: 3vw;
  }
  > .content {
    flex: 3;
    font-size: 0.64rem;
    position: relative;
    > p.title {
      font-size: 0.8rem;
      font-weight: 700;
      padding-bottom: 1vw;
    }
    > p.msg {
      color: @gray;
    }
    > p.bottom {
      position: absolute;
      bottom: 0;
      font-size: 0.7466666666666667rem;
      color: rgb(255, 83, 57);
    }
    > p.right {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 6vw;
      height: 6vw;
    }
  }
}
</style>
