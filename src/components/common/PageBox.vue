<template>
  <div class="page-box">
    <button class="el-button el-button--default el-button--small">
      <i class="el-icon-d-arrow-left"></i>
      </button>
      <span>{{currentPage}}</span>
      <button class="el-button el-button--default el-button--small">
        <i class="el-icon-d-arrow-right"></i>
      </button>
      <div class="el-input el-input--small">
        <input type="text" autocomplete="off" class="el-input__inner">
      </div>
      <button class="el-button el-button--default el-button--small">
        跳转
      </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
       currentPage: '1/2',
    }
  },
}
</script>

<style lang="scss">
  .page-box {
    margin-top: 10px;
    span {
      margin: 0 5px;
      // display: block;
      height: 32px;
      line-height: 32px;
      color: #333;
      font-size: 14px;
    }
    .el-input {
      margin: 0 5px;
      width: 40px;
    }
    .el-button {
      height: 32px;
      padding: 9px;
    }
  }
</style>

