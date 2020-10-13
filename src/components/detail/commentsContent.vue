<template>
  <div class="content">
    <div class="comment" v-for="(comment, index) in comments" :key="index">
      <img src="~@/assets/img/defaultHeadImg.png" alt="" class="headimg" />
      <div class="comment-content">
        <p class="username">{{ comment.username }}</p>
        <p class="score">
          <stars :score="comment.rating"></stars>
        </p>
        <p
          class="detail"
          v-html="detailHighlight(comment.rating_text, comment.highlights_v2)"
        ></p>
        <p class="img">
          <img
            alt=""
            v-for="(order_image, index) in comment.order_images"
            :key="index"
            :src="imgSrc(order_image.image_hash)"
          />
        </p>
      </div>
    </div>
    <div class="nomore">
      没有更多了哦~
    </div>
  </div>
</template>

<script>
import stars from '@/components/stars';
export default {
  props: {
    comments: {
      type: Array,
    },
  },
  methods: {
    imgSrc(src) {
      if (src) {
        return this.detailImgSrc(src);
      }
      return src;
    },
    detailHighlight(str, keywords) {
      const key = Object.keys(keywords);
      let result = str;
      key.forEach((v) => {
        result = result.replace(v, `<font color="#0089dc">${v}</font> `);
      });
      return result;
    },
  },
  components: {
    stars,
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: white;
  padding: 2 * @padding;
  > * {
    font-size: 0.7466666666666667rem;
  }
  > .comment {
    display: flex;
    > .headimg {
      width: 8%;
      margin-right: 1.5 * @padding;
      border-radius: 50%;
    }
    > .comment-content {
      > p {
        margin-bottom: 1vw;
        color: rgb(65, 63, 63);
      }
    }
    img {
      width: 48%;
      height: 100%;
      margin-right: 2%;
    }
  }
  > .nomore {
    text-align: center;
    margin-top: 5vw;
    color: @gray;
    font-size: 0.64rem;
  }
}
</style>
