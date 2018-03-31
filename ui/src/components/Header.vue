<template>
  <div class="app_header">
    <el-row>
      <el-col :span="12">
        <div class="header-left">
          <div class="my-box">
          <a href="/">HOME</a>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="header-right">
          <div class="my-box">
            <el-button @click="openPage('/u/mark')" type="text">{{account.realName}}</el-button>
            <el-button type="text">简历</el-button>
            <el-button type="text">设置</el-button>
            <el-button type="text">退出</el-button>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  // 组件名字
  name: 'app-header',
  // Vue 实例的数据对象
  data () {
    return {

    }
  },
  // 计算属性
  computed: {
    account () {
      return this.$store.state.global.account
    }
  },
  // 方法
  methods: {
    openPage (url) {
      window.location = url
    }
  },
  // 声明组件
  components: {

  },
  // 组件挂载到实例上去之后调用的钩子
  mounted () {

  }

}
</script>

<style lang="less">

  @import "../less/variables.less";
  .app_header {
    a {
      text-decoration: none;
    }
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color:#fff;

    .my-box {
      padding: 0 20px;
    }

    .header-left {
      display: inline-block;
      width: 100%;
      height: 50px;
      background-color:@warning-color;
      border: none;
      // padding: 0 20px;
    }
    .header-right {
      color: #fff;
      display: inline-block;
      width: 100%;
      height: 50px;
      text-align: right;
      background-color: blue;
      .el-button {
        color: @white;
      }
      // padding: 0 20px;
    }
  }
</style>
