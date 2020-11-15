<template>
  <div class="top-nav">
    <div class="left">
      <div class="logo">
        {{title}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </div>
    <div class="center">
      <el-menu class="el-menu-demo demo" mode="horizontal" active-text-color="#0273c8">
        <el-menu-item class="el-menu-item"
          @click="navClick(item.path)"
          v-for="(item,index) in NavList" :key="index"
          :class="{ 'active':item.path === $route.path }"
        >{{item.name}}</el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <el-menu 
        class="el-menu-demo" 
        mode="horizontal"
        menu-trigger="click"
        text-color="#fff"
        active-text-color="#0273c8"
      >
        <el-menu-item class="warning-num">
          <i class="el-icon-message-solid"></i>
          {{warning_num}}</el-menu-item>
        <el-submenu index='2'>
          <template slot="title" class="drop">
            <img width="26" height="26" src="https://enuo-emsp-long-term.oss-cn-qingdao.aliyuncs.com/emsp-default-cust-icon.png" alt="">
            {{doc_name}}</template>
          <el-menu-item index="2-1">个人中心</el-menu-item>
          <el-menu-item index="2-2">修改密码</el-menu-item>
          <el-menu-item index="2-3">退出</el-menu-item>
        </el-submenu>
        <el-menu-item>院外管理</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      warning_num:107,
      doc_name:'陈燕飞',
      title:'内分泌科',
      NavList:[
        {name:'工作台',path:'/workbench'},
        {name:'住院管理',path:'/hosManage'},
        {name:'报警管理',path:'/warning'},
        {name:'历史记录',path:'/outManage'},
        {name:'统计数据',path:'/statistics'},
        {name:'设备管理',path:'/deviceIndex'},
        {name:'门诊筛查',path:'/patientInfo'},
        {name:'系统管理',path:'/ynSettings'},
        {name:'转诊管理',path:'/ynReferControl'},
      ],
    }
  },
  methods: {
    navClick(path) {
      this.$emit('navClick',path)
    }
  }
}
</script>

<style>
  .el-menu-item i {
    color: #ffffff;
  }
  .el-submenu__title {
    color: #ffffff !important;
    padding: 0px 20px 0 0 !important;
  }
  .el-submenu__title:hover {
    background-color: #1e89e3 !important;
    color: #ffffff !important;
  }
  .el-icon-arrow-down:before {
    color: #ffffff;
  }
  .el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    width: 135px !important;
    min-width: 0 !important;
  }
  .el-menu--popup .el-menu-item {
    /* background-color: #1e89e3 !important; */
    color: #000000 !important;
    text-align: center;
  }
</style>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .top-nav {
    width:100%;
    height: 60px;
    flex-shrink: 0;
    display: flex;
    background-color: #1e89e3;
  }
  .logo{
    width: 220px;
    height: 60px;
    line-height: 60px;
    display: inline-block;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
  }
  .el-menu-demo {
    height: 60px;
    background-color: #1e89e3;
    overflow: hidden;
    border-bottom: 0px !important;
  }
  .demo1 {
    min-width: 500px;
  }
  .el-menu-demo .el-menu-item {
    text-align: center;
    width: 80px;
    color: #ffffff;
    font-size: 16px;
    border-bottom: 0px;
  }
  .el-menu-demo .el-menu-item:hover {
    background-color: #0081e3;
    color: #ffffff;
  }
  .right {
    position: absolute;
    right: 0;
  }
  .drop{
    color: #ffffff;
  }
  .warning-num {
    font-size: 12px !important;
    color: #fe7474 !important;
  }
  .active {
    background-color:  #0273c8 !important;
    color: #ffffff !important;
    font-weight: 700;
  }
</style>