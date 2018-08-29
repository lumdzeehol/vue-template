## 注意事项
1. 使用 `<VLink>` 组件代替 `<a>` 标签
2. 使用`vm.$navigateTo(path)`进行路由跳转
3. 需要懒加载的页面（组件），请使用 Vue [异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)
4. 在 `route.js` 中注册路由和组件
5. 不支持多级路由

## HTTP请求
采用axios作为网络请求工具，在`vue.config.js`文件中配置代理选项