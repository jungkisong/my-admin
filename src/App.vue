<template>
  <div id="app">

    <el-container style="height: 100%;">
      <el-header>后台管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1']" router>
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>车评管理</template>
              <el-menu-item-group>
                <el-menu-item index="1-1" :route="{path: '/CarReview'}">车评管理</el-menu-item>
                <el-menu-item index="1-2" :route="{path: '/HelloWorld'}">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>沪ICP证</el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted () {
    console.log(this.$store.state.count)
  }
}
</script>

<style>
  html,
  body{
    height: 100%;
    margin: 0;
  }
  #app{
    height: 100%;
  }
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }
  .el-main {
    height: 100%;
    background-color: #E9EEF3;
    color: #333;
  }
</style>
