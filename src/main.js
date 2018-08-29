import Vue from 'vue'
import style from './style/style.css';

import { components, routes } from './route';

Vue.config.productionTip = false


// 挂载路由跳转方法
Vue.prototype.$navigateTo = function (path) {
    console.log(this)
    this.$root.currentRoute = path
    window.history.pushState(
        null,
        routes[this.path],
        path
    )
}

const app = new Vue({
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        visibleComponent() {
            const matchingView = routes[this.currentRoute]
            return matchingView ? components[matchingView] : components['404']
        }
    },
  render(h) {
      return h(this.visibleComponent)
  } 
}).$mount('#app')

// 监听url pop
window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})
