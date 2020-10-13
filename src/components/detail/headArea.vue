<template>
  <div class="head">
    <img :src="imgSrc" alt="" class="img" />
    <div class="name">
      {{ name }}
    </div>
    <font-awesome-icon icon="angle-right" />
    <div class="content">
      <span class="rating">评价{{ rating }}</span>
      <span class="order">月售{{ recent_order_num }}</span>
      <span class="leadtime">蜂鸟快送约{{ order_lead_time }}分钟</span>
    </div>
    <div class="wumenkan">
      <p class="first">$7</p>
      <p class="sencond">无门槛</p>
      <p class="other">领取</p>
    </div>
    <div class="activity0">
      <div class="man-jian" v-for="(item, index) in activi" :key="index">
        {{ item[0] }}减{{ Number(item[1].content).toFixed() }}
      </div>
      <div class="man-jian">
        配送费优惠
      </div>
      <div class="discount">
        4个优惠
        <font-awesome-icon icon="angle-down" />
        <!-- 实际上是服务端的获取的有哪些优惠 -->
      </div>
    </div>
    <div class="tips">公告：欢迎光临，用餐高峰期请提前下单，谢谢。</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    recent_order_num: {
      type: Number,
      default: 0,
    },
    order_lead_time: {
      type: Number,
      default: 0,
    },
    activities: {
      type: Array,
      default: null,
    },
    img: {
      type: String,
      default: '',
    },
  },
  computed: {
    imgSrc() {
      if (this.img) {
        return this.detailImgSrc(this.img);
      }
      return '';
    },
    activi() {
      if (this.activities) {
        let attribute;
        eval(`attribute=${this.activities[0].attribute}`);
        const kv = Object.entries(attribute);
        return kv;
      }
      return [];
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 6vw;
  font-size: 0.64rem;
  color: rgb(99, 98, 98);
  > .img {
    width: 20vw;
    height: 20vw;
    top: -16vw;
    position: absolute;
    border-radius: 10%;
  }
  > .name {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 66%;
    white-space: nowrap;
    position: relative;
    font-size: 1.0666666666666667rem;
    font-weight: 700;
    color: rgb(48, 48, 48);
    text-align: center;
  }
  > div {
    padding-bottom: 2vw;
  }
  > svg {
    position: absolute;
    right: 13%;
    font-size: 1.0666666666666667rem;

    top: 1.5 * 1.0666666666666667rem;
  }
  > .content {
    > span {
      margin-right: 3vw;
    }
  }
  > .wumenkan {
    color: #594519;
    background: #ffe578;
    width: 40vw;
    text-align: center;
    height: 4vw;
    line-height: 6vw;
    position: relative;
    display: flex;
    > p {
      text-align: center;
      flex: 1;
      font-size: 0.5333333333333333rem;
    }
    > p:first-child {
      flex: 1.5;
      font-size: 0.8533333333333334rem;
      font-weight: 600;
    }
    &::before {
      .asdasdw();
    }
    .asdasdw {
      content: '';
      position: absolute;
      right: 9.333333vw;
      width: 1.333333vw;
      height: 0.666667vw;
      background: #fff;
      transform: translateX(50%);
      bottom: -0.05333333333333334rem;
      border-bottom: none;
      border-radius: 1.333333vw 1.333333vw 0 0;
    }
    &::after {
      .asdasdw();
      top: -0.05333333333333334rem;
      border-top: none;
      border-radius: 0 0 1.333333vw 1.333333vw;
    }
  }
  > .activity0 {
    width: 80%;
    position: relative;
    margin-top: 2vw;
    > .man-jian {
      color: rgb(255, 75, 51);
      border: 0.05333333333333334rem solid rgb(255, 201, 193);
      font-size: 1.0666666666666667rem;
      height: 1.6rem;
      text-align: center;
      transform: scale(0.5);
      display: inline-block;
      margin-left: -5vw;
    }
    > .man-jian:first-child {
      margin-left: -5%;
    }
    > .discount {
      height: 1.6rem;
      text-align: right;
      line-height: 1.6rem;
      position: absolute;
      text-align: right;
      top: 0;
      right: 0;
      color: rgba(99, 98, 98, 0.575);
    }
  }
  > .tips {
    color: rgba(99, 98, 98, 0.575);
    text-align: left;
    width: 80%;
    margin-top: -2vw;
  }
}
</style>
