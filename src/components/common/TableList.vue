<template>
  <div class="table-list">
    <el-table border size="small"  :cell-style="{background:'#fff'}"  :data="tableData"  :fit="true"  >
      <el-table-column
        :min-width="item.width"
        :label="item.label"
        v-for="(item,index) in TimeInfoList"
        :key="index"
        :prop ='item.prop'
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  props:{
    TimeInfoList:{
      type:Array
    }
  },
  data() {
    return {
      // tableData:this.$store.state.tableData,
      tableData:[],
      active_num :this.$store.state.active_num,
      TimeInfoList:this.$store.state.TimeInfoList
      // TimeInfoList:[]
    }
  },
  methods: {
    // merge({ row, column, rowIndex, columnIndex }){
    //   if(columnIndex === 10 ) {
    //     if(rowIndex === 0) {
    //       return [this.tableData.length,1]
    //     }
    //   }
    // },
    async fetchtableData() {
      if(this.active_num != -1){
        let data = await this.$http.post('/api/patient/getInfoById',{pid:(this.active_num+1)})
        // console.log(this.active_num+1);
        data = data.data.list
        
        // console.log(data);
        for(let i=0;i<data.length;i++){
            if(data){
              let dataParmas = {
                date:data[i].checkdate,
              }
              dataParmas[data[i].checktime] = data[i].bglv
              dataParmas['remarks'] = data[i].remarks
              
              // console.log(dataParmas);
              this.tableData.unshift(dataParmas)
            }
        }
        
        
      }
    },
    
  },
  created() {
    this.fetchtableData()
  },
}
</script>

<style lang="scss">
  .table-list {
    .el_table {
      width:calc(100% - 225px);
    }
    .el-table__header {
      th {
        text-align: center;
        font-weight: normal;
        background: #f7f7fd;
        color: #333333;
      }
    } 
    .el-table td {
      height: 30px;
      padding: 0;
      text-align: center;
      color: #333333;
      font-size: 12px;
    }
    
    
  }
</style>
