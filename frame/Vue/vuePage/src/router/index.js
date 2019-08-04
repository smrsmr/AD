import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Login from '@/components/login'
import Lists from '@/components/lists'
import Article from '@/components/article'
import mb from '../components/mb'
// 子路由
import list from '../components/children/list'
import details from '../components/children/details'

Vue.use(Router);
Vue.component('mb-page',mb);
export default new Router({
  //vue-router默认是hash模式的，我们要切换到history模式，只需在router初始化时，设置mode为history即可
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
    ,
    {
      path: '/index',
      name: 'index',
      component: index
    }
    ,
    {
      path: '/Lists',
      name: 'Lists',
      component: Lists
    }
    ,
    {
      path: '/Article',
      name: 'Article',
      component: Article,
      children: [
        {
          path: 'add',
          component: list 
        },
        {
          path: 'details',
          component: details 
        },
      ]
    }
  ]
})
