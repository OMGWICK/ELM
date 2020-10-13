<template>
  <div class="fa">
    <div class="mask" v-show="isShowMask" @click="cancelMask"></div>
    <!-- 顶部购物车已经加入的内容使用 transition 实现动画,初始高度为0 -->
    <div class="top" ref="top">
      <div class="title">已选商品</div>
      <div class="box" v-for="(item, index) in shoppingCart" :key="index">
        <p class="name">{{ item.name }}</p>
        <p class="right">
          <span class="money">${{ item.lowest_price }}</span>
          <img
            src="~@/assets/img/less.svg"
            alt=""
            class="les"
            @click="deleteShoppingCart(index)"
          />
        </p>
      </div>
    </div>
    <div class="shopping-cart" @click="showDetail">
      <!-- 购物车图案 -->
      <div class="car" :class="{ 'white-car': hasCommodity }">
        <p class="child" v-if="hasCommodity">{{ shoppingCart.length }}</p>
      </div>
      <div class="total">
        <p class="total-price" v-if="hasCommodity">${{ totalPrice }}</p>
        <p class="tip" v-else>未选购商品</p>
      </div>
      <div class="price" :class="{ settle: hasCommodity }">
        <p class="settlement" v-if="hasCommodity" @click.stop="goSettling">
          去结算
        </p>
        <p class="low" v-else>$ {{ lowestPrice }}起送</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  props: {
    lowestPrice: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isShowMask: false,
    };
  },
  computed: {
    ...mapState('detail', ['shoppingCart']),
    ...mapState(['isLogin', 'address']),
    hasCommodity() {
      if (this.shoppingCart.length > 0) {
        return true;
      }
      return false;
    },
    totalPrice() {
      if (this.shoppingCart.length > 0) {
        const result = this.shoppingCart.reduce((pre, cur) => {
          return pre + cur.lowest_price;
        }, 0);
        return result;
      }
      return 0;
    },
  },
  methods: {
    ...mapMutations('detail', ['deleteShoppingCart']),
    showDetail() {
      this.isShowMask = !this.isShowMask;
      if (this.isShowMask) {
        this.$refs['top'].style.height = `${13 +
          14 * this.shoppingCart.length}vw`;
        this.$refs['top'].style.opacity = 1;
      } else {
        this.$refs['top'].style = '';
      }
    },
    goSettling() {
      if (this.address.trim()) {
        return this.$router.push('/detail/check');
      }
      return this.$router.push('/home/location');
    },
    cancelMask() {
      this.$refs['top'].style = '';
      this.isShowMask = false;
    },
  },
  watch: {
    shoppingCart() {
      if (this.isShowMask) {
        this.$refs['top'].style.height = `${13 +
          14 * this.shoppingCart.length}vw`;
      }
      if (this.shoppingCart.length === 0) {
        this.$refs['top'].style = '';
        this.isShowMask = false;
      }
    },
  },
  created() {
    if (!this.isLogin) {
      this.$router.push({ path: '/user/login', query: { from: 'location' } });
    }
  },
};
</script>

<style lang="less" scoped>
.fa {
  position: fixed;
  z-index: 10;
  width: 100%;
  bottom: 0;
  left: 0;
}
.shopping-cart {
  background-color: rgba(61, 61, 63, 0.9);
  height: 11.5vw;
  width: 100%;
  color: white;
  display: flex;
  z-index: 10;
  > .car {
    position: absolute;
    z-index: 10;
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    left: 5vw;
    bottom: 2vw;
    width: 13.333333vw;
    height: 13.333333vw;
    box-sizing: border-box;
    border-radius: 100%;
    border: 1.333333vw solid #444;
    box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
    will-change: transform;
    background-image: radial-gradient(circle, #363636 6.266667vw, #444 0);
    > .child {
      position: absolute;
      right: -1vw;
      top: -1vw;
      width: 4vw;
      height: 4vw;
      text-align: center;
      font-size: 0.64rem;
      background-color: tomato;
      border-radius: 50%;
    }
    &::before {
      background: url(~@/assets/img/shoppingCart.svg) 50% no-repeat;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-size: 6vw;
      content: '';
      z-index: 10;
    }
  }
  > .white-car {
    background-color: #3190e8;
    background-image: none;
    &::before {
      background: url(~@/assets/img/whiteCart.svg) 50% no-repeat;
      background-size: 6vw;
    }
  }
  > .total {
    position: absolute;
    top: 3vw;
    left: 23vw;
    font-size: 0.7466666666666667rem;
    color: rgb(148, 148, 148);
    > .total-price {
      font-size: 0.8533333333333334rem;
      font-weight: 700;
      color: white;
    }
  }
  > .price {
    position: absolute;
    top: 2vw;
    right: 8vw;
    font-size: 0.8rem;
    font-weight: 700;
  }
  // 激活后样式
  > .settle {
    background-color: #38ca73;
    right: 0;
    top: 0;
    height: 11.5vw;
    line-height: 11.5vw;
    width: 30vw;
    text-align: center;
  }
}
.top {
  position: absolute;
  background-color: white;
  bottom: 11.5vw;
  width: 100%;
  transition: all 0.3s ease-in;
  font-size: 0.8533333333333334rem;
  height: 0;
  opacity: 0;
  > div {
    padding: @padding 2 * @padding;
    height: 10vw;
    line-height: 10vw;
  }
  > .title {
    border-bottom: 0.133333vw solid #ddd;
    background-color: #eceff1;
    height: 8vw;
    line-height: 8vw;
    color: rgb(80, 80, 80);
  }
  > .box {
    position: relative;
    border-bottom: 0.133333vw solid rgba(231, 231, 231, 0.801);
    > .right {
      position: absolute;
      right: 2 * @padding;
      top: @padding;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20vw;
      > .money {
        margin-right: 5vw;
        color: #ff5339;
        font-weight: 700;
        font-size: 0.8533333333333334rem;
      }
      > img {
        width: 6vw;
        height: 6vw;
      }
    }
  }
}
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(0.133333rem);
  -webkit-backdrop-filter: blur(1.333333vw);
  backdrop-filter: blur(0.133333rem);
  backdrop-filter: blur(1.333333vw);
}
</style>
