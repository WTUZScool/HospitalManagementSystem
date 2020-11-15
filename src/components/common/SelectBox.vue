<template>
    <el-select v-model="value" :size="currentSize" :placeholder="placeholder" :change="getValue(value)">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.prop">
      </el-option>
    </el-select>
</template>

<script>
export default {
  props:{
    options:{
      type:Array,
      // required:true
    },
    currentSize:{
      type:String,
      default: ()=>{
        return 'mini'
      }
    },
    placeholder:{
      type:String,
      // required:true
    },
  
  },
  data() {
    return {
      value:''
    }
  },
  methods: {
    clearValue() {
      this.value = ''
    },
    getValue(value){
      this.$emit('getValue',value)
    }
  },
}
</script>

<style>
  .el-select--small {
    margin-right: 5px;
  }
</style>