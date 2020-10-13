<template>
  <div class="score">
    <div class="score-head">{{ score | toFix }}</div>
    <div class="busine-score">
      <p class="title">商家评分</p>
      <p class="child"><stars :score="score"></stars></p>
    </div>
    <div class="overall">
      <p class="title">味道</p>
      <p class="child">{{ rating.overall_score | toFix }}</p>
    </div>
    <div class="pack">
      <p class="title">包装</p>
      <p class="child">{{ rating.shop_score | toFix }}</p>
    </div>
    <div class="divery">
      <p class="title">配送</p>
      <p class="child">{{ rating.shop_score | toFix }}</p>
    </div>
  </div>
</template>

<script>
import stars from '@/components/stars';
export default {
  props: {
    rating: {
      type: Object,
      required: true,
    },
  },
  computed: {
    score() {
      return (this.rating.overall_score + this.rating.shop_score) / 2;
    },
  },
  filters: {
    toFix(value) {
      return value.toFixed(1);
    },
  },
  components: {
    stars,
  },
};
</script>

<style lang="less" scoped>
.score {
  background-color: white;
  display: flex;
  height: 24vw;
  justify-content: center;
  align-items: center;
  font-size: 0.64rem;
  color: @gray;
  > * {
    flex: 1;
  }
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    > p {
      flex: 1;
    }
  }
  > .score-head {
    font-size: 1.7066666666666668rem;
    font-weight: 600;
    color: #ff6000;
    flex: 1.5;
  }
  .overall,
  .pack {
    > p.child {
      font-size: 0.96rem;
      font-weight: 700;
    }
  }
  > .divery {
    flex: 1.3;
    border-left: 0.05333333333333334rem solid @border;
    > .child {
      font-weight: 700;
      font-size: 0.96rem;
    }
  }
}
</style>
