<template>
  <div class="patient-info">
    <div class="item" v-for="item in patientInfoList" @click="toDetailInfo(item.id)">
      <div class="item-h" :class="currentClass(item.bloodsugar)">
        <div class="id">{{item.id}}</div>
        <div class="name">{{item.name}}</div>
      </div>
      <div class="item-info">
        <span class="sex">{{item.sex}}</span>
        <span class="bing">{{item.illness}}</span>
        <div class="bloodsugar">{{item.bloodsugar}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    patientInfoList:{
      type:Array,
      required:true
    }
  },
  // inject: ['reload'],
  methods: {
    // async fetchpatientInfoList() {
    //   const data = await this.$http.get('/api/patient/getInfo')
    //   let bgdata = await this.$http.get('/api/patient/getbgInfo')
    //   bgdata = bgdata.data.list
    //   // console.log(bgdata);
    //   this.patientInfoList = data.data.list
    //   for(let i=0;i<this.patientInfoList.length;i++){
    //     for(let j=0;j<bgdata.length;j++){
    //       if(this.patientInfoList[i].id == bgdata[j].pid){
    //         this.patientInfoList[i]['bloodsugar'] = bgdata[j].bglv
    //       }
    //     }
    //   }
    // },
    toDetailInfo(id){
      this.$emit('toDetailInfo',id)
    },
    currentClass(bs_num){
      let result = false
      this.$emit("currentClass",bs_num,val=>{result = val})
      return result
      // if(bg_num<=10 || !bg_num){
      //   return 'blue'
      //   console.log(blue);
      // }else if(bg_num>10 && bg_num<20){
      //   return 'orange'
      // }else if(bg_num>20){
      //   return 'red'
      // }
    }
  },
  
 
}
</script>

<style lang="scss">
  .patient-info {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin:20px 0 0 20px ;
    .item {
      .red {
        background: #fe7474;
      }
      .blue {
        background-color: #3eb6f2;
      }
      .orange {
        background-color: #ffa54e;
      }
      border-radius: 10px 10px 0 0;
      // border:1px solid #333;
      margin: 20px 20px;
      min-width: 180px;
      overflow: hidden;
      .id{
        float: left;
      }
      .name {
        float: right;
      }
      .item-h{
        height: 40px;
        line-height: 40px;
        color: #FFF;
        padding: 0 10px;
      }
      .item-info{
        margin-top: 10px;
        padding: 0 10px;
        height: 90px;
        background-color: #fff;
        .sex {
          margin-right: 20px;
        }
      }
      .bloodsugar{
        margin-top: 10px;
        font-size: 18px;
      }
    }
    
  }
</style>