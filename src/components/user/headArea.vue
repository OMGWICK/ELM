<template>
  <div class="head" @click="goLogin">
    <img src="~@/assets/img/defaultHeadImg.png" alt="" class="default" />
    <div class="login">
      <p class="main">{{ msg.main }}</p>
      <p class="other">{{ msg.other }}</p>
      <div class="right">
        <font-awesome-icon icon="angle-right"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLogin: {
      type: Boolean,
      required: true,
    },
    phoneNum: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  methods: {
    goLogin() {
      if (!this.isLogin) {
        return this.$router.push('user/login');
      }
      this.$router.push('/user/profile');
    },
  },
  computed: {
    msg() {
      if (!this.isLogin) {
        return {
          main: '登录/注册',
          other: '登录以后享有更多特权',
        };
      }
      return {
        main: this.userName,
        other: this.phoneNum,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@height: 16vw;
.head {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  height: @height;
  padding: (30vw-@height)/2 2.1 * @padding;
  display: flex;
  > .default {
    width: @height;
    height: @height;
    border-radius: 50%;
    margin-right: 2.1 * @padding;
  }
  > .login {
    color: white;
    position: relative;
    flex: 5;
    flex-direction: column;
    justify-content: center;
    display: flex;
    .mix {
      flex: 1;
      display: flex;
      align-items: center;
    }
    .main {
      .mix();
      font-weight: 700;
      font-size: 1.0666666666666667rem;
    }
    .other {
      .mix();

      font-size: 0.64rem;
    }
    .right {
      position: absolute;
      right: 0;
      top: 25%;
    }
  }
}
</style>
