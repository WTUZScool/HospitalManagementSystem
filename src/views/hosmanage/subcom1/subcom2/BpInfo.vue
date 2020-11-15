<template>
  <div class="bp-info">
    <!-- <soso-con></soso-con> -->
    <!-- <table-show :TimeInfoList=TimeInfoList></table-show> -->
  </div>
</template>

<script>
import SosoCon from '@/components/largecom/SosoCon'
import TableShow from '@/components/largecom/TableShow'

export default {
  components:{
    SosoCon,
    TableShow
  },
  data() {
    return {
      TimeInfoList:[
         {label:'检测日期',prop:'date',width:'110px'},
        {label:'检测时间',prop:'beforeDawn'},
        {label:'收缩压',prop:'beforeBreakfast'},
        {label:'舒张压',prop:'afterBreakfast'},
        {label:'心率',prop:'beforeLunch'},
        {label:'血压水平',prop:'afterLunch'},
        {label:'检测人',prop:'beforeDinner'},
        {label:'方式',prop:'afterDinner'},
        {label:'备注',prop:'beforeSleep'},
        {label:'操作',prop:'random'},
        
      ]
    }
  },
}
</script>

<style lang="scss">
  .bp-info{
    margin-top: 15px;
    margin-right: 15px;
    .el-picker-panel  {
      left: 205px !important;
    }
    .el-select {
      width: 150px;
    }
    .el-menu-item {
      width: 100px !important;
      text-align: center !important;
    }
  } 
</style>