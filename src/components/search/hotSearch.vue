<template>
  <div class="hot">
    <!-- 请注意这里的数据是服务器返回的  -->
    <p class="search-hot">热门搜索</p>
    <div class="list">
      <div
        class="hot-words"
        v-for="(word, index) in hotSearchList"
        :key="index"
        @click="startSearch"
      >
        {{ word }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotSearchList: [
        '奶茶',
        '德克士',
        '酸辣粉',
        '鸡排',
        '炸鸡',
        '盖饭',
        '披萨',
        '寿司',
        '米线',
      ],
    };
  },
  props: {
    startSearch: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.hot {
  background-color: white;
  margin-top: 5vw;
  padding: 3vw @padding;
  height: 100vh;
  > .search-hot {
    font-size: 0.8533333333333334rem;
    font-weight: 700;
    color: #666666;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 6vw;
    .hot-words {
      width: 15%;
      margin-right: 5%;
      margin-bottom: 5%;
      text-align: center;
      background-color: #f5f5f5;
      font-size: 0.6933333333333334rem;
      height: 1.7066666666666668rem;
      line-height: 1.7066666666666668rem;
      color: #666666;
      border-radius: 5%;
    }
  }
}
</style>
