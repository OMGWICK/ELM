<template>
  <div class="location">
    <back-navigation
      :customStyle="{
        backgroundImage: 'linear-gradient(90deg,#0af,#0085ff)',
        padding: '0 2vw',
        color: 'white',
        height: '12vw',
        lineHeight: '12vw',
      }"
    >
      <template #title>
        选择收货地址
      </template>
    </back-navigation>
    <div
      class="position"
      v-for="(location, index) in locationList"
      :key="index"
      @click="goHome(location)"
    >
      <p class="name-phone">
        <span class="name">
          {{ location.name }}
        </span>
        <span class="phone">
          {{ location.phoneNum }}
        </span>
      </p>
      <p class="address">
        {{ location.address }}
      </p>
    </div>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import axios from '@/api';
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'location',
  components: {
    backNavigation,
  },
  computed: {
    ...mapState(['isLogin']),
    ...mapState('home/location', ['locationList', 'status']),
  },
  created() {
    const _this = this;
    if (!this.isLogin) {
      this.$router.push({ path: '/user/login', query: { from: 'location' } });
    } else {
      if (this.status === 404) {
        axios.get('/location').then((res) => {
          const data = res.data;
          _this.initLocaionList(data);
          _this.changeStatus(200);
        });
      }
    }
  },
  methods: {
    ...mapActions('home/location', ['initLocaionList', 'changeStatus']),
    ...mapMutations(['changeAddress']),
    goHome(location) {
      this.changeAddress(location);
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.location {
  background-color: white;
  > .position {
    padding: 1vw 2 * @padding;
    height: 15vw;
    border-bottom: 0.05333333333333334rem solid #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-weight: 700;
      font-size: 0.96rem;
    }
    .address {
      color: rgb(151, 151, 151);
      font-size: 0.8rem;
      font-weight: 500;
    }
    .phone {
      .address();
    }
  }
}
</style>
