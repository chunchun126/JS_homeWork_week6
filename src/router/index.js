import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // 前台
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/frontend/Home.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/frontend/Products.vue'),
      },
      { // 動態路由
        path: 'product/:id',
        component: () => import('../views/frontend/Product.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/frontend/Login.vue'),
      },
    ],
  },
  // 登入
  // 後台
  {
    path: '/admin',
    component: () => import('../views/backend/layout/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
