<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="allpage">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'mb',
    data () {
      return {
        currentPage: 1,
        currData:10,
        currpage: 1
      }
    },
    props:["allpage","currentpage"],
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.currData=val;
        this.$emit("clickGet",this.currpage,this.currData);
      },
      handleCurrentChange(val) {
        this.currpage=val;
        this.$emit("clickGet",this.currpage,this.currData);
      }
    },
    created:function () {

    }
  }
</script>
<style scoped>
.block {
  margin-top: 40px;
}
</style>
