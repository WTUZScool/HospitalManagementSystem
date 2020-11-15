<template>
  <div class="bs-info">
    <soso-con></soso-con>
    <table-show :TimeInfoList=TimeInfoList></table-show>
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
        {label:'日期',prop:'date',width:'110px'},
        {label:'凌晨',prop:'beforeDawn'},
        {label:'早餐前',prop:'beforeBreakfast'},
        {label:'早餐后',prop:'afterBreakfast'},
        {label:'午餐前',prop:'beforeLunch'},
        {label:'午餐后',prop:'afterLunch'},
        {label:'晚餐前',prop:'beforeDinner'},
        {label:'晚餐后',prop:'afterDinner'},
        {label:'睡前',prop:'beforeSleep'},
        {label:'随机',prop:'random'},
        {label:'患者备注',prop:'remarks'},
      ],
    }
  },
}
</script>

<style lang="scss">
  .bs-info{
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
