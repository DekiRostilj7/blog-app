import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppPosts from './components/AppPosts'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {name: 'index', path:'/', redirect: '/posts'},
  {name: 'posts', path:'/posts', component: AppPosts}
]
const router = new VueRouter({
        routes,
        linkExactActiveClass: "link-active",
        mode:'history'
      })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
