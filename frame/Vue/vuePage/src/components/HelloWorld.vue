<template>
  <div class="hello" v-loading.fullscreen.lock="fullscreenLoading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(255, 255, 255, 0.7)">
    <h1>{{ msg }}</h1>
    <ul>
      <li :key="index" v-for="(item,index) in list"><a :title=item.area>{{item.area}}</a><a :title=item.prov>{{item.prov}}</a><a :title=item.city>{{item.city}}</a><a :title=item.code>{{item.code}}</a><a :title=item.name>{{item.name}}</a></li>
    </ul>
    <mb-page v-bind:currentpage="currentpage"  v-bind:allpage="allpage" v-on:clickGet="clickGet"></mb-page>
  </div>
</template>

<script>
  export default {
      name: 'HelloWorld',
      data () {
          return {
              msg: 'Welcome to Your Vue.js App',
              currentpage:0,
              list: [],
              allpage:null,
              fullscreenLoading: false
          }
      },
      methods:{
        open(text) {
          this.$alert(text,'提示', {
            confirmButtonText: '确定',
            type: 'warning'
          });
        },
          /*clickGet: function (currentpage,currData) {
           // console.log(currentpage,currData)
            let that = this;
            let list=[],allpage='';
            let pageStart = 0, pageEnd = 0;
            pageEnd = currData * currentpage;
            pageStart = pageEnd - currData;
            //http://yapi.demo.qunar.com/mock/8328/getDealers
            axios.post('/api/getdata',{currentpage:currentpage,currData:currData}).then((response) => {
              console.log(response.data.data);
              // allpage=response.data.data.length;
              allpage=response.data.len;
              for (let i=pageStart;i<pageEnd;i++){
                if (response.data.data[i]!=undefined){
                  list.push(response.data.data[i]);
                }
              }
              that.allpage=allpage;
              that.list=list;
            });
          }*/
          clickGet: function (currentpage,currData) {
              this.fullscreenLoading = true;
              let that = this;
              this.axios.post('http://127.0.0.1:3001/getdata',{currentpage:currentpage,currData:currData}).then((response) => {
                that.allpage=response.data.len;
                that.list=response.data.data;
                this.fullscreenLoading = false;
              }).catch((err)=>{
                setTimeout(()=>{
                  this.open(err);
                  this.fullscreenLoading = false;
                },3000)
              });
            }
      },
      created: function () {
          this.clickGet(1,10)
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 1000px;
  margin: 0 auto;
}
li {
  overflow: hidden;
  line-height: 30px;
}
ul a {
  display: inline-block; 
  width: 120px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap
}
ul a:last-child{
  width: 510px;
}
</style>
