<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>
<script>
export default {
    name:'news',
    data(){
        return{
            name:'news'
        }
    },
    methods: {
        new(){
            alert('我是news方法')
        }
    }
}
</script>

