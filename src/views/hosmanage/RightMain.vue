<template>
  <div class="right-main">
    <two-top-nav @navClick = "toPath" :infoList = InfoList></two-top-nav>
    <router-view/>
  </div>
</template>

<script>

import TwoTopNav from '@/components/common/TwoTopNav'
export default {
  data() {
    return {
      InfoList:[
        {info:'血糖',path:'/hosManage/bloodsugar'},
        {info:'血压',path:'/hosManage/bloodpressure'},
      ]
    }
  },
  components:{
    TwoTopNav
  },
  methods: {
    toPath(path) {
      this.$router.push(path)
    }
  },
}
</script>

<style>
  .right-main {
    float: right;
    margin-left: 20px;
    width: calc(100% - 235px);
    overflow: auto;
  }
</style>