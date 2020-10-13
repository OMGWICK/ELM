<template>
  <div class="search">
    <back-navigation :isFixed="isShow"></back-navigation>
    <search-area
      :isInittal="isInittal"
      :startSearch="startSearch"
      :isFixed="isShow"
    ></search-area>
    <loading-anima
      :loadingStyle="{ color: '#0089dc' }"
      v-if="isLoading"
    ></loading-anima>
    <search-lists
      v-if="isShow"
      :searchList="searchList"
      :detailList="detailList"
      :pushData="pushSearchList"
    ></search-lists>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="mask" v-if="isShowMask" @click="changeMask"></div>
    </transition>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import searchArea from '@/components/search/searchArea';
import loadingAnima from '@/components/loadingAnima';
import searchLists from '@/components/search/searchLists';

import { mapState, mapActions, mapMutations } from 'vuex';
import axios from '@/api';

export default {
  name: 'search',
  components: {
    backNavigation,
    searchArea,
    loadingAnima,
    searchLists,
  },
  data() {
    return {
      isLoading: false,
      isInittal: true,
    };
  },
  computed: {
    ...mapState('home/search', ['status', 'searchList']),
    ...mapState('home', ['isShowMask']),
    isShow() {
      return !this.isLoading && !this.isInittal;
    },
  },
  methods: {
    ...mapActions('home/search', [
      'initSearchList',
      'pushSearchList',
      'changeStatus',
    ]),
    ...mapMutations('home', ['changeMaskStatus']),
    ...mapMutations('home/search', ['detailList']),
    startSearch() {
      const _this = this;
      this.isLoading = true;
      this.isInittal = false;
      axios.get('/search').then((res) => {
        const data = res.data;
        _this.initSearchList(data.searchList);
        _this.changeStatus(200);
        _this.isLoading = false;
      });
      scrollTo(0, 0);
    },
    changeMask() {
      this.changeMaskStatus(false);
      document.documentElement.style.overflow = '';
    },
  },
  beforeDestroy() {
    window.scrollTo(0, 0);
    this.changeMaskStatus(false);
    document.documentElement.style.overflow = '';
  },
};
</script>

<style lang="less" scoped>
.search {
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
