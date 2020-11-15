<template>
  <div class="blood-pressure2">
    暂未开放
    <!-- <el-input v-model="input"  size="small" placeholder="床号,姓名及首字母" ></el-input>
    <el-button class="fr" type="primary" size="small" @click="addPatient()">患者建档</el-button>
    <add-dialog :showit="addDialog" @noShow="noDialog()"></add-dialog>
    <patient-info :patientInfoList=patientInfoList @toDetailInfo="toBP" @currentClass="giveColor"></patient-info> -->
  </div>
</template>

<script>
import AddDialog from '@/components/largecom/AddDialog.vue'
import PatientInfo from '@/components/common/PatientInfo'

export default {
  components:{
    AddDialog,
    PatientInfo
  },
  data() {
    return {
      input:'',
      addDialog:false,
      patientInfoList:[]
    }
  },
  methods: {
    addPatient(){
      this.addDialog = true
    },
    noDialog(flag){
      this.addDialog = flag;
      this.reload()
    },
     async fetchpatientInfoList() {
      const data = await this.$http.get('/api/patient/getInfo')
      let bpdata = await this.$http.get('/api/patient/getbsInfo')
      bpdata = bpdata.data.list
      this.patientInfoList = data.data.list
      for(let i=0;i<this.patientInfoList.length;i++){
        for(let j=0;j<bpdata.length;j++){
          if(this.patientInfoList[i].id == bpdata[j].pid){
            this.patientInfoList[i]['bloodpressure'] = bpdata[j].hg1+'/'+bpdata[j].hg1
          }
        }
      }
    },
    toBP(id){
      this.$store.commit('changeActiveNum',(id-1))
      this.$router.push('/hosManage/bloodpressure')
    },
    giveColor(bs_num,callback){
      let result = 'blue'
      callback(result)
    }
  },
  created(){
    this.fetchpatientInfoList()
  }
}
</script>

<style lang="scss">
  .blood-pressure2 {
    height: 100%;
    background: #f7fdfb;
    margin-top: 10px;
    .el-input{
      width: 180px;
    }
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    
  }
</style>