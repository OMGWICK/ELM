<template>
  <div class="user">
    <head-area v-bind="{ isLogin, userName, phoneNum }"></head-area>
    <main-tab-bar></main-tab-bar>
    <div class="main-info">
      <div class="child">
        <p class="num"><span class="big">0</span>个</p>
        <p class="red">红包</p>
      </div>
      <div class="child">
        <p class="num"><span class="big">0</span>个</p>
        <p class="red">金币</p>
      </div>
    </div>
    <div
      class="index"
      :class="{ bottom: isBottom(index) }"
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item }}
      <font-awesome-icon icon="angle-right" />
    </div>
    <div class="privacy"><span @click="goService">隐私政策</span></div>
  </div>
</template>

<script>
import mainTabBar from '@/components/mainTabBar';
import headArea from '@/components/user/headArea';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      list: [
        '我的地址',
        '金币商城',
        '分享拿20元现金',
        '我的客服',
        '下载饿了么APP',
        '规则中心',
      ],
    };
  },
  components: {
    mainTabBar,
    headArea,
  },
  computed: {
    ...mapState(['isLogin', 'userName', 'phoneNum']),
  },
  methods: {
    isBottom(index) {
      if (index === 0 || index === 2 || index === 5) {
        return true;
      }
      return false;
    },
    goService() {
      this.$router.push('/user/service');
    },
  },
};
</script>

<style lang="less" scoped>
.user {
  height: 100vh;
  > .main-info {
    height: 23vw;
    display: flex;
    margin-bottom: 3vw;
    background-color: white;
    > .child {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .red {
        font-weight: 600;
        font-size: 0.64rem;
        color: rgb(124, 124, 124);
      }
      .num {
        font-size: 0.64rem;
        color: rgb(106, 194, 11);
        .big {
          font-size: 1.28rem;
        }
      }
      &:first-child {
        border-right: 0.05333333333333334rem solid #f5f5f5;
        box-sizing: content-box;
        > .num {
          color: rgb(255, 95, 62);
        }
      }
    }
  }
  > .bottom {
    margin-bottom: 3vw;
  }
  > .index {
    height: 11.5vw;
    line-height: 11.5vw;
    padding: 0 2 * @padding;
    background-color: white;
    border-bottom: 0.05333333333333334rem solid rgba(236, 236, 236, 0.274);
    position: relative;
    font-size: 0.8533333333333334rem;
    color: rgb(71, 71, 71);
    svg {
      @font: 0.7466666666666667rem;
      position: absolute;
      font-size: @font;
      color: rgb(177, 177, 177);
      top: 50%-@font;
      right: 2 * @padding;
    }
  }
  > .privacy {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 5vw;
    color: rgba(0, 136, 220, 0.562);
    font-weight: 700;
  }
}
</style>
