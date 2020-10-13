<template>
  <div class="ad" @click="payforMember">
    <div class="box">
      <p><img :src="memberAd.imgSrc" alt="" /></p>
      <p>{{ memberAd.title }}</p>
      <span>{{ memberAd.description }}</span>
      <span class="right">{{ memberAd.money }}></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberAd: {
        imgSrc:
          'https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34',
        title: '超级会员',
        description: '每月领20元红包',
        money: '限时6元开通',
      },
    };
  },
  methods: {
    payforMember() {
      location.href =
        'https://tb.ele.me/wow/zele/act/supervip-sell?wh_biz=tm&spm=a2ogi.13147251.svip.1&geohash=wm6n8n4q9n2g';
    },
  },
};
</script>

<style lang="less" scoped>
.ad {
  padding: 0 @padding;
  background-color: white;
  padding-top: 1.2vw;
  height: 10vw;
  .box {
    background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
    width: 88%;
    height: 8vw;
    padding: 1vw 6%;
    display: flex;
    p {
      font-size: 0.7rem;
      line-height: 8vw;
      font-weight: 700;
      color: rgba(85, 84, 84, 0.986);
      img {
        width: 0.96rem;
        height: 0.96rem;
        margin-right: 0.26666666666666666rem;
        margin-top: 0.32rem;
      }
    }
    span {
      font-size: 0.64rem;
      line-height: 8vw;
      color: rgba(1, 1, 1, 0.63);
      margin-left: 2vw;
    }
    .right {
      position: absolute;
      right: 2 * @padding;
    }
  }
}
</style>
