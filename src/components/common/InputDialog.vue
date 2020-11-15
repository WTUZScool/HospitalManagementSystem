<template>
  <div class="input-dialog">
    <el-dialog title="录入数据" :visible.sync="dialogFormVisible" :show-close="false" :close-on-click-modal='false'>
      <el-form :model="form">
        <el-form-item label="检测时间">
          <div class="block">
            <el-date-picker
              size="small"
              v-model="date"
              value-format="yyyy-MM-dd"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="检测时段">
          <select-box currentSize ='small' placeholder="检测时段" :options="TimeList" @getValue= "showAboutValue"></select-box>
        </el-form-item>
        <el-form-item label="血糖值">
          <el-input v-model="bgvalue" placeholder="" size="small" ></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="remark" placeholder=""  size="small"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="noShow()">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SelectBox from '@/components/common/SelectBox'

export default {
  components:{
    SelectBox
  },
  props:{
    dialogFormVisible:{
      type:Boolean,
    }
  },
  inject:['reload'],
  data() {
    return {
      date:'',
      bgvalue:'',
      remark:'',
      form:{
        
      },
      TimeList:this.$store.state.TimeList,
      TimeInfoList:this.$store.state.TimeInfoList,
      timeValue:'',
      InfoObj:{
        date:'',
      }
    }
  },
  methods: {
    noShow(){
      this.$emit('noShow',this.dialogFormVisible);
    },
    add(){
      // let inputInfo = [this.value1,this.TimeInfoList[this.timeValue].prop,this.input1,this.input2]
      // console.log(inputInfo);
      // this.InfoObj.date = inputInfo[0]
      // this.InfoObj[inputInfo[1]] = inputInfo[2]
      // console.log(this.InfoObj);
      // this.$store.state.tableData.unshift(this.InfoObj)
      let params = {
        bglv:this.bgvalue,
        checkdate:this.date,
        checktime:this.timeValue,
        remarks:this.remark,
        pid:(this.$store.state.active_num+1)
      }
      // console.log(params);
      // console.log(this.$store.state.active_num+1);
      this.$http.post('/api/patient/addbslv',params)
      this.reload()
      this.noShow()
      
    },
    showAboutValue(value){
      this.timeValue = value
    },

  },
}
</script>

<style lang="scss">
  .input-dialog {
    .el-input {
      width: 200px;
    }
    .el-form-item__label{
      text-align: right;
      width: 80px;
    }
  }
</style>
