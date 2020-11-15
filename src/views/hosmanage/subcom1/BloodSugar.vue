<template>
  <div class="blood-sugar">
    <two-top-nav @navClick = "toPath" :infoList = BsInfoList></two-top-nav>
    <router-view/>
  </div>
</template>

<script>

import TwoTopNav from '@/components/common/TwoTopNav'
export default {
  components:{
    TwoTopNav
  },
  data() {
    return {
      BsInfoList:[
        {info:'血糖数据',path:'/hosManage/bloodsugar/bsinfo'},
        {info:'血糖水平分析',path:'/hosManage/bloodsugar/bslevel'},
      ]
    }
  },
  methods: {
    toPath(path) {
      this.$router.push(path)
    }
  },
}
</script>

<style lang="scss">
  .blood-sugar{
    .el-menu-item {
      font-weight: normal !important;
      height: 40px  !important;
      line-height: 40px  !important;
    }
  }
</style>

