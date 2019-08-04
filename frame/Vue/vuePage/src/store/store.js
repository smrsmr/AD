import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 5,
    userInfo:{
      name:''
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => {
      if (state.count<=2) {
        state.count=2;
        return false;
      }
      state.count--
    },
    getUser: (state,user) => state.userInfo.name = user
  }
});
export default store
