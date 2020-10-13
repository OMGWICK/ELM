<template>
  <div class="profile">
    <back-navigation :customStyle="{ padding: '0 2vw' }"></back-navigation>
    <div class="head-img all">
      <p class="title">头像</p>
      <div class="right">
        <img src="~@/assets/img/defaultHeadImg.png" alt="" />
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
    <div class="user all">
      <span class="title">
        用户名
      </span>
      <div class="right">
        {{ userName }}
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
    <p class="user-bind p">账号绑定</p>
    <div class="phone all">
      <span class="title">手机</span>
      <div class="right">
        {{ phoneNum }}
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
    <p class="security p">安全设置</p>
    <div class="password all">
      <span class="title">登录密码</span>
      <div class="right">
        设置
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
    <div class="log-out all" @click="logOutHandler">退出登录</div>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    backNavigation,
  },
  computed: {
    ...mapState(['userName', 'phoneNum', 'isLogin']),
  },
  created() {
    if (!this.isLogin) {
      this.$router.push('/');
    }
  },
  methods: {
    ...mapMutations(['logOut']),
    logOutHandler() {
      this.logOut();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="less" scoped>
.profile {
  > div.all {
    position: relative;
    background-color: white;
    padding: 0 2 * @padding;
    height: 12vw;
    line-height: 12vw;
  }
  .right {
    position: absolute;
    right: 2 * @padding;
    top: 0;
    height: 100%;
    color: rgba(161, 161, 161, 0.616);
    font-size: 0.8533333333333334rem;
  }
  .title {
    font-size: 0.96rem;
    font-weight: 700;
    color: rgba(39, 39, 39, 0.822);
  }
  svg {
    color: rgba(161, 161, 161, 0.616);
  }
  > p.p {
    padding: 1/2 * @padding 2 * @padding;
    padding-top: @padding;
    font-size: 0.7466666666666667rem;
    color: rgba(161, 161, 161, 0.616);
  }
  > div.head-img {
    background-color: white;
    height: 20vw;
    line-height: 20vw;
    border-bottom: 0.05333333rem solid rgba(236, 236, 236, 0.274);
    > .right {
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        width: 14vw;
        height: 70%;
        border-radius: 50%;
        margin-right: 1vw;
      }
    }
  }
  > div.log-out {
    margin-top: 2 * @padding;
    height: 14vw;
    line-height: 14vw;
    text-align: center;
    font-size: 0.96rem;
    font-weight: 700;
    color: #ff5339;
  }
}
</style>
