<template>
  <el-button :type="buttonColor" :size="currentSize" :class="currentClass">{{title}}</el-button>
</template>

<script>
export default {
  props:{
    buttonColor:{
      type:String,
      default:()=>{
        return 'primary'
      }
    },
    title:{
      type:String,
      required:true
    },
    currentSize:{
      type:String,
      default:()=>{
        return 'mini'
      }
    },
    currentClass:{
      type:String,
      default:()=>{
        return ''
      }
    }
  }
}
</script>

<style lang="scss">
  .fl {
    float:left;
  }
  .fr {
    float: right;
  }
</style>