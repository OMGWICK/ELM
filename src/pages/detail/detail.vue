<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="~@/assets/img/detailLoadingAnima.svg" alt="" />
    </div>
    <div class="detail" v-else>
      <nav-area :imgSrc="rst['image_path']"></nav-area>
      <head-area
        v-bind="{
          name: rst.name,
          rating: rst.rating,
          recent_order_num: rst.recent_order_num,
          order_lead_time: rst.order_lead_time,
          activities: rst.activities,
          img: rst.image_path,
        }"
      ></head-area>
      <tab-bar
        @changeBorder="changeBorder"
        :currentPosition="currentPosition"
      ></tab-bar>
      <keep-alive>
        <component
          :is="components[index]"
          v-bind="dynamicComponetData"
        ></component>
      </keep-alive>
      <shopping-cart
        :lowestPrice="rst.piecewise_agent_fee.rules[0].price"
      ></shopping-cart>
    </div>
  </div>
</template>

<script>
import navArea from '@/components/detail/navArea';
import headArea from '@/components/detail/headArea';
import tabBar from '@/components/detail/tabBar';
import orderEat from '@/components/detail/orderEat';
import evalute from '@/components/detail/evalute';
import business from '@/components/detail/business';
import shoppingCart from '@/components/detail/shoppingCart';

import axios from '@/api';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    navArea,
    headArea,
    orderEat,
    evalute,
    business,
    tabBar,
    shoppingCart,
  },
  data() {
    return {
      components: ['orderEat', 'evalute', 'business'],
      index: 0,
      isLoading: true,
    };
  },
  computed: {
    ...mapState('detail', ['menu', 'rst', 'comments']),
    ...mapState('home', ['currentPosition']),
    dynamicComponetData() {
      const {
        supports,
        opening_hours,
        flavors,
        albums,
        distance_text,
        order_lead_time,
        is_stock_empty,
        address,
        posters,
      } = this.rst;
      return {
        supports,
        opening_hours,
        flavors,
        albums,
        distance_text,
        order_lead_time,
        is_stock_empty,
        address,
        //以上为商家组件所需数据
        comments: this.comments,
        //以上为评论所需数据
        posters,
        menu: this.menu,
        //以上为主页所需
      };
    },
  },
  methods: {
    ...mapActions('detail', [
      'initMenu',
      'initRst',
      'changeStatus',
      'initComments',
    ]),
    changeBorder(index) {
      this.index = index;
    },
  },
  created() {
    const id = this.$route.query.id;
    const _this = this;
    if (!id) {
      this.$router.push('/');
    } else {
      axios.get(`detail?id=${id}`).then((res) => {
        const data = res.data;
        _this.initMenu(data.menu);
        _this.initRst(data.rst);
        _this.initComments(data.comments);
        _this.changeStatus(200);
        _this.isLoading = false;
      });
    }
  },
};
</script>

<style lang="less" scoped>
.loading {
  width: 100%;
  background-color: white;
  height: 100vh;
}
</style>
