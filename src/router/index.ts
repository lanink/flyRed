import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export enum RouterPath {
    HOME = '/',
    DETAIL = '/video'
}

const router = new Router({
    routes: [
        {
            name: 'home',
            path: RouterPath.HOME,
            component: () => import('../view/Home.vue'),
            meta: { title: '首页' },
        },
        {
            name: 'video',
            path: RouterPath.DETAIL,
            component: () => import('../view/Detail.vue'),
            meta: { title: '详情' },
        }
    ]
});

router.beforeEach((to, from, next) => {
    next();
});
router.afterEach((to, from) => {
    document.title = `${to.meta.title} | 火鸟视频`;
  });

export default router;