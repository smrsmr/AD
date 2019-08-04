<template>
  <div id="app">
    <div>
      <router-link to="/">Login</router-link>
      <router-link to="/home">home</router-link>
      <router-link to="/HelloWorld">HelloWorld</router-link>
      <router-link to="/index">index</router-link>
      <router-link to="/Lists">Lists</router-link>
      <router-link to="/Article/add">Article</router-link>
    </div>
    <div class="userInfoImg">
      <img src="./assets/img/logo.png" alt="">
    </div>
    <i class="userInfo">{{getInfo}}</i>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        userInfo:{
          name:'admin'
        }
      }
    },
    computed:{
      getInfo(){
        return this.$store.state.userInfo.name
      }
    },
    created:function () {
      /*this.axios.get('/api/checkUser').then((data)=>{
        this.userInfo.name = data.data.msg.name
      }).catch((err)=>{console.log(err)});*/
      this.$store.commit('getUser',localStorage.getItem('user_name'));
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .userInfoImg {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin: 20px auto 12px;
    overflow: hidden;
  }
  .userInfoImg img {
    border: none;
    max-width: 100%;
    vertical-align: middle;
  }
  .userInfo {
    display: block;
    width: 200px;
    height: 20px;
    margin: 4px auto;
    font-style: initial;
    color: red;
    font-weight: bold;
  }
</style>
