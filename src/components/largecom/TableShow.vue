<template>
  <div class="table-show">
    <!-- <two-top-nav :infoList = InfoList @navClick = "currentShow" /> -->
    <table-list :TimeInfoList=TimeInfoList  v-show="!activeNum" />
    <!-- <special-mode v-show = "activeNum"></special-mode> -->
  </div>
</template>

<script>
import TwoTopNav from '@/components/common/TwoTopNav'
import TableList from '@/components/common/TableList'
import SpecialMode from '@/components/largecom/SpecialMode'


export default {
  components:{
    TwoTopNav,
    TableList,
    SpecialMode
  },
  props:{
    TimeInfoList:{
      type:Array
    }
  },
  data() {
    return {
      activeNum:0,
      InfoList:[
        {info:'常规模式'},
        {info:'特殊模式'},
      ]
    }
  },
  methods: {
    currentShow(path,index){
      // console.log(this.activeNum);
      this.activeNum = index
      // console.log(this.activeNum);
      // console.log(this.index);
      // this.activeNum = activeNum
     
    }
  },
}
</script>

<style>

</style>