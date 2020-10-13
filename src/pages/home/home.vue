<template>
  <div class="home">
    <head-area
      :data="{ placeholder }"
      :jump="jump"
      :location="address"
    ></head-area>
    <recom-food :foodtrys="foodtrys"></recom-food>
    <index-activity :activity="activity"></index-activity>
    <member-ad></member-ad>
    <recom-business :detailList="detailList"></recom-business>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="mask" v-if="isShowMask" @click="changeMask"></div>
    </transition>
    <loading-anima v-if="isLoading"></loading-anima>
    <shop-lists
      :lists="shopList"
      apiUrl="/shopping"
      :pushData="pushShopList"
      v-else
    ></shop-lists>
    <div class="tab-bar"></div>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from '@/components/mainTabBar';
import headArea from '@/components/home/headArea';
import recomFood from '@/components/home/recomFood';
import indexActivity from '@/components/home/indexActivity';
import memberAd from '@/components/home/memberAd';
import recomBusiness from '@/components/home/recomBusiness';
import shopLists from '@/components/shopLists';
import loadingAnima from '@/components/loadingAnima';
import axios from '@/api';
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      placeholder: '搜索饿了么商家,商品名称',
      isLoading: true,
    };
  },
  components: {
    mainTabBar,
    headArea,
    recomFood,
    indexActivity,
    memberAd,
    recomBusiness,
    shopLists,
    loadingAnima,
  },
  methods: {
    jump() {
      //跳转另一个页面
      this.$router.push('/home/search');
    },
    ...mapMutations('home', ['changeMaskStatus']),
    ...mapMutations('home/home', ['detailList']),
    ...mapActions('home/home', [
      'changeDataStatus',
      'initFoodtrys',
      'initactivity',
      'pushShopList',
    ]),
    changeMask() {
      this.changeMaskStatus(false);
      document.documentElement.style.overflow = '';
    },
  },
  computed: {
    ...mapState('home/home', ['shopList', 'status', 'foodtrys', 'activity']),
    ...mapState('home', ['isShowMask']),
    ...mapState(['address']),
  },
  created() {
    const _this = this;
    if (this.status !== 200) {
      Promise.all([axios.get('/home'), axios.get('/shopping')]).then(
        ([res1, res2]) => {
          const homeData = res1.data;
          const shopData = res2.data;
          //处理首页推荐图片之类的...
          _this.initFoodtrys(homeData.foodtrys);
          _this.initactivity(homeData.activity);
          //处理首页列表
          _this.pushShopList(shopData);
          //改变状态加载完成
          _this.changeDataStatus(200);
          _this.isLoading = false;
        }
      );
    } else {
      this.isLoading = false;
    }
  },
  beforeDestroy() {
    window.scrollTo(0, 0);
    this.changeMaskStatus(false);
    document.documentElement.style.overflow = '';
  },
};
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(0.133333rem);
  -webkit-backdrop-filter: blur(1.333333vw);
  backdrop-filter: blur(0.133333rem);
  backdrop-filter: blur(1.333333vw);
}
.tab-bar {
  height: 13.333333vw;
}
</style>
