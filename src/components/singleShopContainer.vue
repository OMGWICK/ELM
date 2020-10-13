<template>
  <div class="shop-father" @click="goDetail">
    <div class="shop">
      <img :src="imgSrc" alt="" />
      <div class="content">
        <p class="title">{{ title }}</p>
        <div class="score">
          <span><stars :score="score"></stars> {{ score }}</span
          ><span> 月售{{ sales }}单</span>
        </div>
        <p class="lowest-price">${{ lowestPrice }}起送 | {{ trueMsg }}</p>
        <p class="description">
          {{ description }}
        </p>
        <div class="right">
          <p class="dislike">···</p>
          <p class="dsitance">{{ distance }}m | {{ wasteTime }}分钟</p>
        </div>
        <div class="bottom">
          <div class="b">
            <div class="box1">减</div>
            <p>
              满{{ activities[0][0] }}元减{{ activities[0][1] }}元,满{{
                activities[0][0] * 2
              }}元减{{ activities[0][1] * 2.25 }}元,满{{
                activities[0][0] * 3
              }}元减{{ activities[0][1] * 3.5 }}元
            </p>
          </div>
          <div class="b">
            <div class="box2">配</div>
            <p>配送费立减{{ activities[1] }}元</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stars from './stars';
export default {
  props: {
    title: String,
    score: Number,
    sales: Number,
    lowestPrice: Number,
    deliveryFee: Number,
    imgSrc: String,
    id: Number,
    distance: Number,
    wasteTime: Number,
    description: String,
    activities: Array,
  },
  computed: {
    trueMsg() {
      if (this.deliveryFee === 0) {
        return '免配送费';
      }
      return `配送$${this.deliveryFee}`;
    },
  },
  components: {
    stars,
  },
  methods: {
    goDetail() {
      this.$router.push({ path: '/detail', query: { id: this.id } });
    },
  },
};
</script>

<style lang="less" scoped>
.shop {
  padding: 4vw @padding;
  background-color: white;
  display: flex;
  height: 42vw;
  border-bottom: 0.133333vw solid #eee;
  img {
    width: 23%;
    height: 50%;
    margin-right: 3%;
    border-radius: 10%;
  }
  .content {
    width: 74%;
    position: relative;
    color: rgb(148, 147, 147);
    @contentpadding: 1.5vw;
    .title {
      font-size: 0.7466666666666667rem;
      font-weight: 700;
      color: black;
    }
    .score {
      font-size: 0.64rem;
      padding: @contentpadding 0;
    }
    .lowest-price {
      font-size: 0.64rem;
      padding: @contentpadding 0;
    }
    .right {
      position: absolute;
      font-size: 0.64rem;
      right: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: @padding;
      .dislike {
        margin-top: 1vw;

        width: 5vw;
        text-align: right;
      }
      .dsitance {
        margin-top: 9vw;
      }
    }
    .description {
      border: 0.02666666666666667rem solid rgb(221, 221, 221);
      font-size: 0.4266666666666667rem;
      width: 2.1333333333333333rem;
      text-align: center;
      margin: @contentpadding 0;
    }
    .bottom {
      font-size: 0.64rem;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      .b {
        display: flex;
        align-items: center;
        margin-bottom: 0.2rem;
        width: 80%;
        .box1 {
          width: 0.7466666666666667rem;
          height: 0.7466666666666667rem;
          background-color: rgb(240, 115, 115);
          margin-right: 0.26666666666666666rem;
          font-size: 0.5333333333333333rem;
          color: white;
          text-align: center;
          line-height: 0.7466666666666667rem;
          border-radius: 20%;
        }
        p {
          color: rgb(102, 101, 101);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .box2 {
          .box1();
          background-color: rgb(112, 188, 70);
        }
      }
    }
  }
}
</style>
