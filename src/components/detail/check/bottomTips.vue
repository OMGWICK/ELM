<template>
  <div class="bottom">
    <div class="big-box">
      <div class="box">
        <span class="name">
          发票信息
        </span>
        <div class="right">
          <span class="price">
            该店不支持线上开票，请电话联系商户
          </span>
        </div>
      </div>
      <div class="box">
        <span class="name">
          号码保护
        </span>
        <div class="right">
          <span class="price">
            号码保护中，将对商家、骑士隐藏您的真实手机号</span
          >
        </div>
      </div>
    </div>
    <div class="position"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bottom {
  padding: 0 @padding;
  > .big-box {
    background-color: white;
    padding: @padding 2.6 * @padding;
    font-size: 0.7466666666666667rem;
    > .title {
      padding-bottom: @padding;
      font-size: 0.9066666666666666rem;
      font-weight: 700;
      height: 10vw;
      line-height: 10vw;
    }
    > .box {
      @height: 12vw;
      border-bottom: 0.05333333333333334rem solid rgba(219, 219, 219, 0.205);
      position: relative;
      height: @height;
      line-height: @height;
      > .right {
        position: absolute;
        top: 0;
        right: 0;
        > .one {
          margin-right: 15vw;
          font-size: 0.64rem;
          color: @gray;
        }
        > .price {
          font-size: 0.64rem;
          color: rgb(187, 183, 183);
        }
      }
    }
    > .box:last-child {
      height: 18vw;
      > .right {
        position: relative;
        top: -5vw;
      }
    }
  }
}
.position {
  height: 12vw;
}
</style>
