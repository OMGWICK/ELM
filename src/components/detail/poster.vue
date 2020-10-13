<template>
  <div class="poster">
    <img :src="detailSrc" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    posters: {
      type: Array,
      required: true,
    },
  },
  computed: {
    detailSrc() {
      if (this.posters.length === 0) {
        return '';
      }
      return this.detailImgSrc(this.posters[0].image_hash);
    },
  },
};
</script>

<style lang="less" scoped>
.poster {
  padding: @padding 2 * @padding;
  height: 23.2vw;
  > img {
    width: 100%;
  }
}
</style>
