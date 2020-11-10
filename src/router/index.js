import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Classify from '../views/Classify'
import Hello from '../views/Hello'
import Favorite from '../views/Hello/Favorite'
import History from '../views/Hello/History'
import Login from '../views/Login'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Resigter from '../views/Resigter'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    {
      path: '/hello',
      component: Hello,
      children: [
        { path: 'history', component: History },
        { path: 'favorite', component: Favorite },
        { path: '', redirect: '/hello/favorite' }
      ]
    },
    { path: '/favorite', component: Favorite },
    { path: '/history', component: History },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/ranking', component: Ranking },
    { path: '/resigter', component: Resigter },
    { path: '/search-result', component: SearchResult },
    { path: '/vip', component: Vip },
    { path: '/', redirect: '/home' }
  ]
})
export default router
