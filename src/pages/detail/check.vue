<template>
  <div class="check">
    <back-navigation
      :customStyle="{
        color: 'white',
        backgroundImage: 'linear-gradient(90deg,#0af,#0085ff)',
        padding: '0 2vw',
        fontWeight: 700,
      }"
    >
      <template #title>
        确认订单
      </template>
    </back-navigation>
    <check-msg v-bind="{ address, phoneNum, name }"></check-msg>
    <shop-list v-bind="{ busineName, shoppingCart, totalPrice }"></shop-list>
    <bottom-list></bottom-list>
    <go-pay v-bind="{ totalPrice, pay }"></go-pay>
  </div>
</template>

<script>
//检测购物车是否为空,为空返回首页
import backNavigation from '@/components/backNavigation';
import checkMsg from '@/components/detail/check/checkMsg';
import shopList from '@/components/detail/check/shopList';
import bottomList from '@/components/detail/check/bottomTips';
import goPay from '@/components/detail/check/goPay';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'check',
  components: {
    backNavigation,
    checkMsg,
    shopList,
    bottomList,
    goPay,
  },
  computed: {
    ...mapState(['address', 'phoneNum', 'name']),
    ...mapState('detail', ['shoppingCart', 'busineName', 'rst']),
    totalPrice() {
      if (this.shoppingCart.length > 0) {
        const result = this.shoppingCart.reduce((pre, cur) => {
          return pre + cur.lowest_price;
        }, 0);
        return result + this.shoppingCart.length;
      }
      return 0;
    },
  },
  methods: {
    ...mapMutations(['submitOrder']),
    ...mapMutations('detail', ['clearShoppingCart']),
    pay() {
      this.submitOrder({
        shoppingCart: this.shoppingCart,
        name: this.rst.name,
        image_path: this.rst.image_path,
        totalPrice: this.totalPrice,
      });
      this.clearShoppingCart();
      this.$router.push('/order');
    },
  },
  created() {
    if (this.shoppingCart.length === 0) {
      this.$router.back();
    }
  },
};
</script>

<style lang="less" scoped></style>
