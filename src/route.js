import Index from './pages/index.vue';

/**
 * 模板未使用Vue-Router，选择使用简单路由
 * 注册component，注册
 */

const components = {
    "index": Index,
    "about": r => require.ensure([], () => r(require('./pages/about.vue')), 'about'), //异步组件
    "404": r => require.ensure([], () => r(require('./pages/404.vue')), '404')
};

const routes = {
    '/': 'index',
    '/about': 'about'
};

export {
    routes,
    components
}