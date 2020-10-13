<template>
  <div>
    <div
      class="filter"
      :class="{ fixed: isFixed, [otherPageClass]: isOtherPage }"
      ref="filter"
    >
      <div @click="goDetail" :class="{ primary: isShowMask }">
        {{ sorts[index].name }} <font-awesome-icon icon="angle-down" />
        <div class="list anima" :class="{ animation: isShowMask }">
          <ul>
            <li
              v-for="(sort, index) in sorts"
              :key="index"
              @click="sortData(index)"
            >
              {{ sort.name }}
            </li>
          </ul>
        </div>
      </div>
      <div @click="detailDistance">距离最近</div>
      <div @click="detailSail">销量最高</div>
      <div>筛选 <font-awesome-icon icon="filter" /></div>
    </div>
    <div class="add-position" v-if="isFixed"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapMutations, mapState } = createNamespacedHelpers('home');
export default {
  props: {
    isOtherPage: {
      type: Boolean,
      default: false,
    },
    otherPageClass: {
      type: String,
      default: 'test',
    },
    detailList: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      sorts: [
        { name: '综合排序', sort: forward('id') },
        { name: '好评优先', sort: forward('score', -1) },
        { name: '起送价最低', sort: forward('lowestPrice') },
        { name: '配送最快', sort: forward('wasteTime') },
        { name: '配送费最低', sort: forward('deliveryFee') },
        { name: '人均从低到高', sort: forward('id') },
        { name: '人均从高到低', sort: forward('deliveryFee') },
      ],
      index: 0,
    };
  },
  computed: {
    ...mapState(['currentPosition', 'isShowMask']),
    isFixed() {
      if (!this.isOtherPage) {
        const height = 107.6 * (document.documentElement.clientWidth / 100);
        if (this.currentPosition >= height) {
          return true;
        }
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    goDetail() {
      if (!this.isShowMask) {
        const dom = this.$refs['filter'];
        this.changeMaskStatus(true);
        if (!dom.getAttribute('class').includes('fixed')) {
          window.scrollTo(0, dom.offsetTop - 10);
        }
        document.documentElement.style.overflow = 'hidden';
      } else {
        this.changeMaskStatus(false);
        document.documentElement.style.overflow = '';
      }
    },
    ...mapMutations(['changeMaskStatus']),
    sortData(index) {
      this.index = index;
      this.detailList(this.sorts[index].sort);
    },
    detailDistance() {
      this.index = 0;
      this.detailList(forward('distance'));
    },
    detailSail() {
      this.index = 0;
      this.detailList(forward('sales', -1));
    },
  },
};

function forward(propertyName, direction = 1) {
  return (a, b) => {
    return (a[propertyName] - b[propertyName]) * direction;
  };
}
</script>

<style lang="less" scoped>
.filter {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.7466666666666667rem;
  height: 10vw;
  line-height: 10vw;
  font-size: 0.64rem;
  > div {
    flex: 1;
  }
  svg {
    color: rgba(0, 0, 0, 0.288);
  }
}
.fixed {
  position: fixed;
  top: 13.6vw;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0 @padding;
  z-index: 10;
}
.list {
  position: fixed;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0 2 * @padding;
  z-index: 10;
  overflow: hidden;
  height: 0;
  opacity: 0;
  text-align: left;
  border-top: 0.05333333333333334rem solid rgba(0, 0, 0, 0.082);
  color: black;
  ul {
    li {
      list-style-type: none;
      height: 10vw;
      line-height: 10vw;
    }
  }
}
.anima {
  transition: all 0.4s ease-in;
}
.animation {
  height: 70vw;
  opacity: 1;
}
.primary {
  color: @primary;
  > svg {
    color: @primary;
  }
}
.add-position {
  height: 10vw;
}
.search {
  .fixed();
  top: 18vw;
}
.recommend {
  .fixed();
  top: 10vw;
}
</style>
