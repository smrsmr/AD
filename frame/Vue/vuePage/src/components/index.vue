<template>
    <div>
      <h1 @click="ad('smr')">index--{{title}}</h1>
      <button @click="grtparents()">子组件获取父组件的值方法</button>
      <button @click="getNews()">获取子组件News的方法</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                msg:'子组件',
            }
        },
        props: ['title'],
        methods: {
            ad(data){
                this.$emit("getdata",data)
            },
            run(){
                alert('我是子组件的run方法')
            },
            grtparents(){
                //子组件获取父组件的方法
                alert(this.$parent.parent);
            },
            getNews(){
                this.$parent.getNews()
            }
        }
    }
</script>

<style scoped>

</style>
