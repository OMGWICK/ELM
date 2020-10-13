import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import animated from 'animate.css';
//引入链接处理函数
import { detailImgSrc } from './tools';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCompass,
  faCookie,
  faFileAlt,
  faUser,
  faMapMarkerAlt,
  faAngleDown,
  faAngleLeft,
  faFilter,
  faStar,
  faSpinner,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCookie,
  faCompass,
  faFileAlt,
  faUser,
  faMapMarkerAlt,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faFilter,
  faStar,
  faSpinner
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(animated);
Vue.config.productionTip = false;
//挂载图片处理函数
Vue.prototype.detailImgSrc = detailImgSrc;
router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name;
  } else {
    document.title = '饿了么';
  }
  next();
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
