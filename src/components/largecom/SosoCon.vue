<template>
  <div class="soso-con">
    <date-picker currentSize ='small'></date-picker>
    <select-box currentSize ='small' placeholder="全部检测时段" :options="TimeList"></select-box>
    <select-box currentSize ='small' placeholder="全部检测人" :options = "TimeList"></select-box>
    <color-button title="取消筛选" buttonColor="info" currentSize = 'small'/>
    <el-button class="fr" type="primary" size="small" @click="dialogFormVisible = true">录入数据</el-button>
    <el-button class="fr" type="primary" size="small">导出数据</el-button>
    <input-dialog :dialogFormVisible="dialogFormVisible" @noShow="noDialog()"></input-dialog>
    
    
  </div>
</template>

<script>
import DatePicker from '@/components/common/DatePicker'
import SelectBox from '@/components/common/SelectBox'
import ColorButton from '@/components/common/ColorButton'
import InputDialog from '@/components/common/InputDialog'

export default {
  components:{
    DatePicker,
    SelectBox,
    ColorButton,
    InputDialog
  },
  data() {
    return {
      TimeList:this.$store.state.TimeList,
      dialogFormVisible:false,
    }
  },
  methods: {
    noDialog(flag){
      this.dialogFormVisible = flag;
    }
  },
}
</script>

<style lang="scss" scoped>
  .soso-con {
    padding-bottom: 15px;
    border-bottom: 5px solid #ebedf1;
    margin-bottom: 15px;
  }
  .fr {
    float: right;
  }
</style>
