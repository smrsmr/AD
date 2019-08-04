<template>
    <div class="main">
        <h3>进行中{{len}}</h3>
        <v-nav></v-nav>
        <ul>
            <li v-for="(item,key) in lists" :key="key" v-if="!item.check" ref="getLen">
               <input type="checkbox" :checked="item.check" v-model="item.check" @click="getLen()"><span> {{item.title}}</span>
            </li>
        </ul>
        <hr>
        <br>
        <h3>已完成{{ok}}</h3>
        <ul>
            <li v-for="(item,key) in lists" :key="key" v-if="item.check"  ref="okLen">
               <input type="checkbox" :checked="item.check" v-model="item.check" @click="setLen()"><span> {{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import nav from './Nav'
    export default {
        name:'lists',
        data(){
            return {
                name:'lists',
                lists:[
                   {title:'vue',check:false},
                   {title:'angular',check:false},
                   {title:'react',check:false},
                   {title:'java',check:true},
                   {title:'php',check:true},
                   {title:'javascript',check:true},
                   {title:'NodeJs',check:true},
                ],
                len:0, /**进行中的值 */
                ok:0,/**完成的值 */
            }
        },
        methods: {
            getLen(){
                this.len = this.$refs.getLen.length-1;
                this.ok++;
            },
            setLen(){
                this.len++;
                this.ok = this.$refs.okLen.length-1;
            }
        },
        created () {
            for(let i=0;i<this.lists.length;i++){
                if(!this.lists[i].check){
                    this.len++;
                }else{
                    this.ok++;
                }
            }
        },
       computed: {
           
       },
       components: {
           'v-nav':nav
       },
    }
</script>

<style scoped>
    .main {
        width: 1000px;
        height: 400px;
        margin: 0 auto;
    }
    ul li {
        list-style: none;
        text-align: center;
        width: 400px;
        margin: 0 auto;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
    }
    ul li input {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
</style>
