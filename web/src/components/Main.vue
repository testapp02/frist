<template>
  <el-container>
    <el-header style="height:10vh;">
      <div class="head">人体进化仪后台管理平台</div>
      <div class="user">
        <span>欢迎您！（{{user}}）</span>
        <div class="button">
          <el-button type="success" disabled style="width: 100px">消息（{{xiaoxi}}）</el-button>
          <el-button type="success" disabled style="width: 100px">刷新</el-button>
          <el-button type="success" disabled style="width: 100px">退出</el-button>
        </div>
      </div>
    </el-header>
    <el-container class="box">
      <el-aside width="200px">
        <Menu>

        </Menu>
      </el-aside>
      <el-main style="background: #fff;">
        <router-view>

        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components:{
      Menu
  },
    data(){
      return {
          user:"xilong",
          xiaoxi:"2"
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    position:relative;
  }
  .head{
    width: 500px;
    font-size: 24px;
    line-height: 10vh;
    float: left;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height:90vh;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    height:90vh;

  }
  .user{
    width: 400px;
    height: 10vh;
    float:right;
  }
  .user span{
    height:4vh;
    line-height: 4vh;
  }
  .button{
    width: 100%;
    height: 6vh;
  }

  .box{
    width: 100vw;
    height: 90vh;
  }
</style>
