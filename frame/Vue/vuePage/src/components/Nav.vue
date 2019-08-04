<template>
    <div>
        <v-index :title="title" v-on:getdata="getdata" ref="index"></v-index>
        <v-news ref="news"></v-news>
        <h5>{{name}}</h5>
        <br>
        <hr>
        <button @click="ud()">点击更新</button>
        <button @click="get()">点击获取子组件的方法</button>
    </div>
</template>
<script>
import Index from './index'
import News from './news'
export default {
    name:'Nav',
    data () {
        return {
            name:'Hello nav',
            flae: true,
            title:'smrxx',
            parent:'我是父组件 ',
        }
    },
    methods:{
        ud(){
            this.name = '我是更新之后的数据';
        },
        getdata(data){
            console.log(data);
        },
        get(){
            //获取子组件的方法或属性用ref
            // this.$refs.index.run()
            alert(this.$refs.index.msg)
        },
        getNews(){
            this.$refs.news.new()
        }
    },
    components: {
      'v-index':Index,
      'v-news': News
    },
    beforeCreate () { 
        console.log('实例创建之前1');
    },
    created () {
        console.log('实例创建完成2');
    },
    beforeMount () {
        console.log('模板创建之前3');
    },
    mounted () {
        console.log('模板创建完成4');
    },
    beforeUpdate () {
        console.log('数据更新之前5');
    },
    updated () {
        console.log('数据更新完成6');
        console.log(this.name);
    },
    destroyed () {
        console.log('实例销毁完成8');
    },
    beforeDestroy () {
        console.log('实例销毁之前7');
    }
}
</script>
<style lang="less" scoped>
    @color:blue;
    h1 {
        color: @color;
    }
</style>



