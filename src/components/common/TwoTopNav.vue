<template>
  <div class="two-top-nav">
    <el-menu 
      class="el-menu-demo" 
      mode="horizontal"
      text-color="#666666"
    >
    <el-menu-item
      class="second-nav"
      v-for="(item,index) in infoList"
      :key="index"
      :class="{'active':index===activeNum}"
      @click="navClick(item.path,index)"
    >{{item.info}}</el-menu-item>
    </el-menu>
  
  </div>
</template>

<script>
export default {
  props:{
    infoList:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      activeNum: 0,
    }
  },
  methods: {
    navClick(path,index){
      this.activeNum = index
      // console.log(index);
      this.$emit('navClick',path,index)
      // console.log(index);
    }
  },
}
</script>

<style lang="scss" scoped>
  .second-nav {
    height: 54px !important;
    font-weight: 700;
    width:auto !important;
    padding: 0 5px ;
  }
  .active {
    color: #0091ff !important;
    border-bottom: 1px solid #0091ff !important;
  }
</style>
 
