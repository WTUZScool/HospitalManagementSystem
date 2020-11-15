<template>
  <div class="block">
      <el-date-picker
        align="left"
        v-model="value"
        type="daterange"
        :size="currentSize"
        unlink-panels
        :clearable= "false"
        range-separator="~"
        start-placeholder="检测开始日期"
        end-placeholder="检测结束日期"
        :picker-options="pickerOptions">
      </el-date-picker>
  </div>
</template>

<script>
export default {
  props:{
    currentSize:{
      type:String,
      default: ()=>{
        return 'mini'
      }
    },
    
  },
  data() {
    return {
      value:'',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '最近7天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
          }, {
            text: '最近14天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 14);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近21天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 21);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近30天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
    }
  },
  methods:{
    clearValue(){
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .block {
    float: left;
    margin-right: 5px;
  }
</style>
 