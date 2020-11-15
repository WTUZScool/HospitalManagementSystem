<template>
  <div class="aside clearfix">
    <!-- <select-box :options="options1" placeholder="请选择科室" ref="select1"></select-box> -->
    <date-picker currentSize ='mini' ref="date"></date-picker>
    <select-box :options="options2" placeholder="请选择责任医生"  ref="select2"></select-box>
    <el-input v-model="input" placeholder="床号、姓名及首字母" size="mini" prefix-icon="el-input__icon el-icon-search"></el-input>
    <div class="button">  
      <el-button type="primary" size="mini" @click="clearAll()">清除条件</el-button>
      <el-button type="primary" size="mini">批量导出</el-button>
    </div>
    <person-list></person-list>
    <page-box></page-box>
  </div>
</template>

<script>
import SelectBox from '@/components/common/SelectBox'
import DatePicker from '@/components/common/DatePicker'
import PersonList from '@/components/common/PersonList'
import PageBox from '@/components/common/PageBox'

export default {
  components:{
    SelectBox,
    DatePicker,
    PersonList,
    PageBox
  },
  data() {
    return {
      input:'',
      options2:[
        {value:'1',label: '石广山'},
        {value:'2',label: '郝飞'},
        {value:'3',label: '尚为光'},],
      options1: [
        {value:'1',label: '内分泌科'},
        {value:'2',label: '内分泌科>内一'}, {value:'3',label: '内分泌科>内二'}, 
        {value:'4',label: '内分泌科>分级诊疗'}, {value:'5',label: '内分泌科>分级诊疗>王庄乡卫生院'}, 
        {value:'6',label: '内分泌科>分级诊疗>香花镇卫生院>'}, 
        {value:'7',label: '内分泌科>肾病科'}],
    }
  },
  methods: {
    clearAll() {
      this.$refs.select1.clearValue()
      this.$refs.date.clearValue()
      this.$refs.select2.clearValue()
      this.input = ''
    }
  },
}
</script>

<style lang="scss">
  .aside{
    .el-select ,.el-select--mini {
      margin-bottom: 5px;
      width:100%;
    }
    .el-range-editor--mini {
      width: 205px;
    }
    .block {
      margin-bottom: 5px;
    }
    .el-range-input {
      width: 80px !important;
    }
  }
  .clearfix::after{
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    font-size: 0;
  }
</style>

<style lang="scss" scoped>
  .aside {
    padding:10px;
    border-right: 1px solid #dfdfdf;
    height: 625px;
    width:205px;
  }
  .change1 {
    margin-bottom: 5px;
  }
  .button {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  

  .person-list::-webkit-scrollbar {
      width: 10px;
      height: 4px;
      background-color: #f5f5f5;
  }
  .person-list::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #aaa;
  }
  .person-list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background: #fff;
  }
  
</style>

