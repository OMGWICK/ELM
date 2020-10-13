<template>
  <div class="pay">
    <span class="price">${{ totalPrice }}</span>
    <div class="right" @click="pay">
      去支付
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPrice: {
      type: Number,
    },
    pay: {
      type: Function,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.pay {
  position: fixed;
  background: #3c3c3c;
  width: 100%;
  bottom: 0;
  z-index: 10;
  height: 12vw;
  line-height: 12vw;
  color: white;
  > .price {
    margin-left: 3vw;
  }
  > .right {
    width: 25vw;
    background: #00e067;
    text-align: center;
    float: right;
    height: 12vw;
    font-size: 0.9066666666666666rem;
  }
}
</style>
