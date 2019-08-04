// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import store from './store/store'
import Storage from './assets/js/Storage'
import router from './router'
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false;
/* eslint-disable no-new */
//监听路由转态
router.beforeEach((to,form,next)=>{
  let token = localStorage.getItem('token');
  let path = to.path;
  if (token){
    axios.get('http://127.0.0.1:3001/checkUser').then((data)=>{
      //console.log(data)
    }).catch((err)=>{console.log(err)});
    next()
  } else {
    if (path == '/'){
      next()
    } else {
      next('/')
    }
    alert('登录已过期,请从新登录');
    store.commit('getUser',' ');
  }
});
//axios 全局拦截器

axios.interceptors.request.use(config=> { // 每次请求时会从localStorage中获取token
  let token = Storage.localGet('token');
  if (token) {
    token =token.replace(/'|"/g, ''); // 把token加入到默认请求参数中
    config.headers.common['Authorization'] = `Bearer ` + token
  }
  return config
}, error=> {
  return Promise.reject(error)
});

axios.interceptors.response.use(response=> { // ①10010 token过期 ②10011 token无效
  if (response.data.status === 10010 || response.data.status === 10011) {
    Storage.localRemove('token'); // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
    router.replace({
      path: '/' // 到登录页重新获取token
    })
  }
  return response
}, error=> {
  return Promise.reject(error)
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
