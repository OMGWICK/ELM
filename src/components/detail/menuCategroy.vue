<template>
  <div class="fa">
    <div class="category" :class="{ fixed: isFixed }">
      <a
        class="go"
        v-for="(item, index) in category"
        :key="index"
        :class="{ active: item.id === trueId }"
        @click="goOther($event, item.id)"
        >{{ item.name }}</a
      >
    </div>
    <div class="position" v-show="isFixed"></div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Array,
      default() {
        return [{}];
      },
    },
    isFixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: 0,
    };
  },
  computed: {
    trueId() {
      if (this.id) {
        return this.id;
      }
      if (this.category <= 1) {
        return 0;
      }
      return this.category[0].id;
    },
  },
  methods: {
    goOther(e, id) {
      e.preventDefault();
      document.documentElement.scrollTo(
        0,
        document.getElementById(id).offsetTop -
          0.14 * document.documentElement.clientWidth
      );
      this.id = id;
    },
  },
};
</script>

<style lang="less" scoped>
.fa {
  flex: 1;
}
.category {
  font-size: 0.64rem;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  @height: 4vh;
  .go {
    padding: 1.5 * @padding;
    padding-right: @padding;
    text-decoration: none;
    outline: none;
    display: block;
    height: @height;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(107, 106, 106);
    &:active {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }

  > .active {
    background-color: white;
    > .go {
      color: black;
      font-weight: 550;
    }
  }
}
.fixed {
  .category();
  position: fixed;
  top: 14vw;
  z-index: 3;
  width: 20.8%;
}
.position {
  .category();
}
</style>
