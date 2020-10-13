<template>
  <div class="service">
    <back-navigation></back-navigation>
    <div v-html="service"></div>
  </div>
</template>

<script>
import axios from '@/api';
import backNavigation from '@/components/backNavigation';
export default {
  data() {
    return {
      service: '',
    };
  },
  created() {
    const _this = this;
    axios.get('service').then((res) => {
      const data = res.data.data;
      _this.service = data;
    });
  },
  components: {
    backNavigation,
  },
};
</script>

<style lang="less" scoped>
.service {
  background-color: white;
  padding: 0 1.5 * @padding;
}
</style>
<style lang="less">
.markdown#service {
  color: #666;
  font-size: 0.346667rem;
  padding: 0 0.373333rem 0.4rem;
  padding: 0 3.733333vw 4vw;
  div.markdown p {
    line-height: 1.6;
  }
  p {
    margin: 0.7em 0;
    line-height: 1.4;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font-weight: 400;
  }
  *,
  :after,
  :before {
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 0.8533333333333334rem;
    margin-top: 1.28rem;
    margin-bottom: 0.32rem;
    color: #333;
    font-weight: 600;
  }
  p > img {
    max-width: 100%;
  }
  p {
    margin: 1.0666666666666667rem 0;
  }
}
</style>
