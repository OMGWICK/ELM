<template>
  <div class="list">
    <div class="big-box">
      <div class="title">
        {{ busineName }}
      </div>
      <div class="box" v-for="(item, index) in shoppingCart" :key="index">
        <div class="img"><img :src="detailSrc(item.image_path)" alt="" /></div>
        <span class="name">{{ item.name }} </span>
        <div class="right">
          <span class="one">x 1</span>
          <span class="price">${{ item.origin_price }}</span>
        </div>
      </div>
      <div class="box pack">
        <span class="name">包装费</span>
        <div class="right">
          <span class="price">${{ shoppingCart.length }}</span>
        </div>
      </div>
      <div class="box total">
        <span class="name">小计</span>
        <div class="right">
          <span class="price">${{ totalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    busineName: {
      type: String,
    },
    shoppingCart: {
      type: Array,
    },
    totalPrice: {
      type: Number,
    },
  },
  methods: {
    detailSrc(src) {
      return this.detailImgSrc(src);
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  padding: @padding;
  background-image: linear-gradient(
      0deg,
      #f5f5f5,
      #f5f5f5 65%,
      hsla(0, 0%, 96%, 0.3) 75%,
      hsla(0, 0%, 96%, 0)
    ),
    linear-gradient(270deg, #0085ff, #0af);
  img {
    width: 100%;
    height: 100%;
  }
  > .big-box {
    background-color: white;
    padding: @padding 2.6 * @padding;
    font-size: 0.7466666666666667rem;
    > .title {
      padding-bottom: @padding;
      font-size: 0.9066666666666666rem;
      font-weight: 700;
      height: 10vw;
      line-height: 10vw;
    }
    > .box {
      @height: 18vw;
      border-top: 0.05333333333333334rem solid rgba(219, 219, 219, 0.205);
      position: relative;
      height: @height;
      display: flex;
      align-items: center;
      > .right {
        position: absolute;
        top: @height*0.29;
        right: 0;
        > .one {
          margin-right: 15vw;
          font-size: 0.64rem;
          color: @gray;
        }
        > .price {
          font-size: 0.8533333333333334rem;
          color: @gray;
        }
      }
      > .img {
        width: 10vw;
        height: 10vw;
      }
      > .name {
        margin-left: 3vw;
        font-size: 0.6933333333333334rem;
      }
    }
    > .pack {
      height: 12vw;
      > .right {
        top: 3vw;
      }
    }
    > .total {
      height: 12vw;
      > .right {
        top: 3vw;
        > .price {
          color: black;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
