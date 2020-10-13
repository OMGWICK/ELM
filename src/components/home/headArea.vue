<template>
  <div class="head">
    <div class="top" @click="goLocation">
      <font-awesome-icon icon="map-marker-alt" />
      <span class="change-location" v-if="location">{{ location }}</span>
      <span class="change-location" v-else>请手动选择地址</span>
    </div>
    <div class="btn-father" :class="{ fixed: isFixed }">
      <div class="btn" @click="jump">{{ data.placeholder }}</div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('home');
export default {
  components: {},
  props: {
    data: {
      type: Object,
      required: true,
    },
    jump: {
      type: Function,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  computed: {
    isFixed() {
      if (
        this.currentPosition >
        (document.documentElement.clientWidth / 100) * 11.5
      ) {
        return true;
      }
      return false;
    },
    ...mapState(['currentPosition']),
  },
  methods: {
    goLocation() {
      this.$router.push('home/location');
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  height: 23vw;
  width: 100%;
  .top {
    color: white;
    font-weight: 700;
    height: 8vw;
    line-height: 8vw;
    font-size: 0.96rem;
    padding: 1.5vw 5%;
    padding-top: 2vw;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap;
  }
  .change-location {
    margin-left: 1vw;
  }
  .btn-father {
    width: 90%;
    position: relative;
    height: 12vw;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    padding: 1.5vw 5%;
    padding-bottom: 0.1vw;
    .btn {
      height: 10vw;
      line-height: 10vw;
      box-sizing: border-box;
      border: none;
      background-color: white;
      outline: none;
      border: 0.10666666666666667rem;
      text-align: center;
      color: rgba(0, 0, 0, 0.212);
      font-size: 0.8533333333333334rem;
    }
  }
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>
