<template>
  <div class="work-bench">
    <two-top-nav :infoList=InfoList @navClick = "toPath"></two-top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import HeaderWB from "@/components/dy/HeaderWB"
import TwoTopNav from "@/components/common/TwoTopNav"

export default {
  components:{
    TwoTopNav
  },

  data() {
    return {
      isRouterAlive:true,
       InfoList:[
        {info:'血糖',path:'/workbench/bloodsugar'},
        {info:'血压',path:'/workbench/bloodpressure'},
        {info:'动态血糖',path:'/workbench/bloodpressure'},
        {info:'动态血压',path:'/workbench/bloodpressure'},
        {info:'血尿酸',path:'/workbench/bloodpressure'},
        {info:'血酮',path:'/workbench/bloodpressure'},
      ]
    }
  },
  methods: {
    toPath(path) {
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss" scoped>
  .work-bench{
    margin-left: 20px;
    margin-right: 10px;
  }
</style>
