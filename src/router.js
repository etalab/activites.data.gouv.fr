import Vue from 'vue';
import Router from 'vue-router';
import HomepageWidget from './views/HomepageWidget.vue';
import Dataset from './views/Dataset.vue';
import Organization from './views/Organization.vue';

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: 'http://localhost:3000',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomepageWidget,
    },
    {
      path: '/fr/datasets/:slug',
      name: 'home',
      component: Dataset,
    },
    {
      path: '/fr/organizations/:slug',
      name: 'home',
      component: Organization,
    },
  ],
});
