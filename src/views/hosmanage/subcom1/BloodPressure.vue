<template>
  <div class="blood-pressure">
    暂未开放
    <!-- <two-top-nav @navClick = "toPath" :infoList = BpInfoList></two-top-nav> -->
    <!-- <router-view/> -->
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
      BpInfoList:[
        {info:'血压数据',path:'/hosManage/bloodpressure/bpinfo'},
        {info:'血压图',path:'/hosManage/bloodpressure/bpmap'},
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

<style>

</style>