<template>
  <div class="all-check">
    <div class="head">
      <p class="title">
        订单配送至
      </p>
      <p class="address" @click="changeAddress">
        {{ address }}
        <font-awesome-icon icon="angle-right" />
      </p>
      <p class="msg">
        <span class="name">
          {{ name }}
        </span>
        <span class="phoneNum">
          {{ phoneNum }}
        </span>
      </p>
    </div>
    <div class="delivery">
      <div class="box">
        <p class="left">送达时间</p>
        <p class="right">尽快送达({{ time }}送达)</p>
      </div>
      <div class="box">
        <p class="left">
          支付方式
        </p>
        <p class="right">
          在线支付
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      default: '',
    },
    phoneNum: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      time: '',
    };
  },
  methods: {
    changeAddress() {
      this.$router.push('/home/location');
    },
  },
  created() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let randomMinuts = Math.round(Math.random() * 20) + 20;
    hours += Math.floor((randomMinuts + minutes) / 60);
    minutes = (minutes + randomMinuts) % 60;
    this.time = `${hours}:${minutes}`;
  },
};
</script>

<style lang="less" scoped>
.all-check {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: @padding;
  padding-top: 2 * @padding;
  color: white;
  font-size: 0.8rem;
  > .head {
    > p {
      padding: 0.5 * @padding;
      color: hsla(0, 0%, 100%, 0.8);
      font-weight: 400;
      padding-left: @padding;
    }
    > .address {
      color: white;
      font-size: 1.1733333333333333rem;
      font-weight: 700;
    }
    > .msg {
      color: hsla(0, 0%, 100%, 0.952);
      padding-bottom: @padding;
    }
  }
  > .delivery {
    background-color: white;
    color: rgb(88, 88, 88);
    padding: @padding 3 * @padding;
    font-size: 0.8rem;
    > .box {
      height: 11.5vw;
      line-height: 11.5vw;
      position: relative;
      > .right {
        position: absolute;
        right: 3 * @padding;
        top: 0;
        color: @primary;
      }
    }
    > .box:first-child {
      border-bottom: 0.05333333333333334rem solid rgba(219, 219, 219, 0.205);
    }
  }
}
</style>
