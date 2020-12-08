import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export enum RouterPath {
    HOME = '/',
}

const router = new Router({
    routes: [
        {
            path: RouterPath.HOME,
            component: () => import('../view/Home.vue'),
            meta: { title: '首页' },
        }
    ]
});

router.beforeEach((to, from, next) => {
    next();
});
router.afterEach((to, from) => {
    document.title = `${to.meta.title} | 系统`;
  });

export default router;