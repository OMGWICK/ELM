<template>
  <div class="order">
    <div class="empty" v-if="isEmpty">
      <img src="~@/assets/img/emptyOrder.png" alt="" />
      <p class="tips">近三个月无订单</p>
    </div>
    <div class="content" v-else>
      <div class="box" v-for="(item, index) in order" :key="index">
        <div class="img">
          <img :src="imgSrc(item.image_path)" alt="" />
        </div>
        <div class="other">
          <div class="first">
            <p class="name">{{ item.name }}</p>
            <font-awesome-icon icon="angle-right" />
            <p class="right">订单已送达</p>
          </div>
          <div class="bottom">
            <p class="o">{{ item.shoppingCart.length }}件商品</p>
            <p class="right">$ {{ item.totalPrice }}</p>
          </div>
        </div>
      </div>
    </div>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from '@/components/mainTabBar';
import { mapState } from 'vuex';
export default {
  name: 'order',
  components: {
    mainTabBar,
  },
  computed: {
    ...mapState(['order']),
    isEmpty() {
      if (this.order.length === 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    imgSrc(src) {
      return this.detailImgSrc(src);
    },
  },
};
</script>

<style lang="less" scoped>
.order {
  > .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    flex-direction: column;
    > .tips {
      font-size: 1.0666666666666667rem;
      font-weight: 700;
      margin-top: 3vw;
      color: @gray;
    }
  }
  > .content {
    > .box {
      padding: 2 * @padding @padding;
      background-color: white;
      display: flex;
      font-size: 0.64rem;
      position: relative;
      > .img {
        flex: 1;
        > img {
          width: 100%;
          height: 10vw;
        }
      }
      > .other {
        flex: 7;
        margin-left: 3vw;
        > .first {
          display: flex;
          height: 10vw;
          font-size: 0.8533333333333334rem;
          width: 40%;
          > .name {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          > .right {
            right: @padding;
            position: absolute;
            font-size: 0.7466666666666667rem;
            color: @gray;
          }
        }
        > .bottom {
          position: relative;
          height: 8vw;
          line-height: 8vw;
          border-top: 0.05333333333333334rem solid rgba(219, 219, 219, 0.205);
          > .right {
            position: absolute;
            right: @padding;
            top: 0;
            font-weight: 700;
            color: black;
            font-size: 0.8533333333333334rem;
          }
        }
      }
    }
  }
}
</style>
