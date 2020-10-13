<template>
  <div @touchstart="getY" @touchend="loadingMore" class="allShopList">
    <single-shop-container
      v-for="(list, index) in lists"
      :key="index"
      v-bind="list"
    ></single-shop-container>
    <loading-anima
      :animaStyle="{ height: '4vh' }"
      v-if="isLoading"
    ></loading-anima>
  </div>
</template>

<script>
import singleShopContainer from './singleShopContainer';
import loadingAnima from './loadingAnima';
import axios from '@/api';
export default {
  components: {
    singleShopContainer,
    loadingAnima,
  },
  props: {
    lists: {
      type: Array,
      required: true,
    },
    apiUrl: {
      type: String,
      required: true,
    },
    pushData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false,
      Y: 0,
    };
  },
  methods: {
    loadingMore(e) {
      const end = e.changedTouches[0].screenY;
      const _this = this;
      const scrollHeight = document.documentElement.scrollHeight,
        scrollTop = document.documentElement.scrollTop,
        clientHeight = document.documentElement.clientHeight;
      const result = scrollHeight - scrollTop - clientHeight;
      if (!this.isLoading && this.Y - end > 0 && result === 0) {
        this.isLoading = true;
        axios
          .get(this.apiUrl)
          .then((res) => {
            const data = res.data;
            _this.pushData(data);
            _this.isLoading = false;
          })
          .catch(() => {
            _this.isLoading = false;
          });
      }
    },
    getY(e) {
      this.Y = e.targetTouches[0].screenY;
    },
  },
};
</script>

<style lang="less" scoped></style>
