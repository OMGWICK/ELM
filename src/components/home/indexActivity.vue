<template>
  <div class="activity">
    <div class="box">
      <div class="content child">
        <h1>{{ activity.title }}</h1>
        <p>{{ activity.description }}</p>
        <span>立即抢购></span>
      </div>
      <img :src="activity.imgSrc" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.activity {
  padding: 0 @padding;
  padding-top: 2vw;
  height: 30vw;
  background-color: white;
  overflow: hidden;
  .box {
    background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
    width: 90%;
    height: 24vw;
    padding: 3vw 5%;
    display: flex;
    .child {
      width: 60%;
      h1 {
        font-size: 0.96rem;
        color: rgba(71, 70, 70, 0.979);
        margin-bottom: 0.26666666666666666rem;
      }
      p {
        font-size: 0.64rem;
        color: rgba(119, 113, 113, 0.897);
      }
      span {
        font-size: 0.64rem;
        color: #af8260;
        font-weight: 700;
      }
    }
    img {
      width: 40%;
    }
  }
}
</style>
