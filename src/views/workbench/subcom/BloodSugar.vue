<template>
  <div class="blood-sugar2">
    <el-input v-model="input"  size="small" placeholder="床号,姓名及首字母" ></el-input>
    <el-button class="fr" type="primary" size="small" @click="addPatient()">患者建档</el-button>
    <add-dialog :showit="addDialog" @noShow="noDialog()"></add-dialog>
    <patient-info :patientInfoList=patientInfoList @toDetailInfo="toBs" @currentClass="giveColor"></patient-info>
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
  inject:['reload'],
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
      let bgdata = await this.$http.get('/api/patient/getbsInfo')
      bgdata = bgdata.data.list
      this.patientInfoList = data.data.list
      for(let i=0;i<this.patientInfoList.length;i++){
        for(let j=0;j<bgdata.length;j++){
          if(this.patientInfoList[i].id == bgdata[j].pid){
            this.patientInfoList[i]['bloodsugar'] = bgdata[j].bglv
          }
        }
      }
    },
    toBs(id){
      this.$store.commit('changeActiveNum',(id-1))
      this.$router.push('/hosManage/bloodsugar/bsinfo')
    },
    giveColor(bs_num,callback){
      let result = false
      if(bs_num<=10 || !bs_num){
        result = 'blue'
        // console.log(blue);
      }else if(bs_num>10 && bs_num<20){
        // return 'orange'
        result = 'orange'
      }else if(bs_num>20){
        // return 'red'
        result = 'red'
      }
      callback(result)
    }
  },
  created(){
    this.fetchpatientInfoList()
  }
}
</script>

<style lang="scss">
  .blood-sugar2 {
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

