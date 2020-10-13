<template>
  <div class="recommend">
    <back-navigation :isFixed="true"></back-navigation>
    <filter-head
      :detailList="detailList"
      :isOtherPage="true"
      otherPageClass="recommend"
    ></filter-head>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="mask" v-if="isShowMask" @click="changeMask"></div>
    </transition>
    <loading-anima
      :loadingStyle="{ color: '#0089dc' }"
      v-if="isLoading"
    ></loading-anima>
    <shop-lists
      v-else
      :lists="recommendList"
      :pushData="pushRecommendList"
      apiUrl="recommend"
    ></shop-lists>
  </div>
</template>

<script>
//这个页面是在首页点击美食早餐,进入的页面
import backNavigation from '@/components/backNavigation';
import filterHead from '@/components/filterHead';
import loadingAnima from '@/components/loadingAnima';
import shopLists from '@/components/shopLists';
import { mapState, mapActions, mapMutations } from 'vuex';
import axios from '@/api';

export default {
  name: 'recommend',
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    backNavigation,
    filterHead,
    loadingAnima,
    shopLists,
  },
  computed: {
    ...mapState('home', ['isShowMask']),
    ...mapState('home/recommend', ['recommendList']),
  },
  methods: {
    ...mapMutations('home', ['changeMaskStatus']),
    ...mapMutations('home/recommend', ['detailList']),
    ...mapActions('home/recommend', [
      'initRecommendList',
      'changeStatus',
      'pushRecommendList',
    ]),
    changeMask() {
      this.changeMaskStatus(false);
      document.documentElement.style.overflow = '';
    },
  },
  created() {
    const _this = this;
    axios.get('/recommend').then((res) => {
      const data = res.data.recommendList;
      _this.initRecommendList(data);
      _this.changeStatus(200);
      _this.isLoading = false;
    });
  },
  beforeDestroy() {
    window.scrollTo(0, 0);
    this.changeMaskStatus(false);
    document.documentElement.style.overflow = '';
  },
};
</script>

<style lang="less" scoped>
.recommend {
  padding: 0 @padding;
  background-color: white;
}
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
</style>
