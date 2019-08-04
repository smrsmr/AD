<template>
    <div class="main">
        <el-container>
            <el-aside width="200px">
                <p>
                    <router-link to="/article/add">商品列表</router-link>
                </p>
                <p>
                    <router-link to="/article/details">商品详情</router-link>
                </p>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 0 auto;
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    p {
      list-style: none;
      width: 100%;
      margin: 17px auto;
      text-align: center;
      cursor: pointer;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    height: 200px;
  }
}
</style>


