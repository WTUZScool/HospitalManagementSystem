<template>
  <div class="add-dialog" >
    <el-dialog title="添加患者" :visible.sync="showit" :show-close="false" :close-on-click-modal="false">
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="编号" :label-width="formLabelWidth">
        <el-input v-model="form.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-select v-model="form.sex" placeholder="请选择性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入院诊断" :label-width="formLabelWidth">
        <el-select v-model="form.desc">
          <el-option label="I型糖尿病" value="I型糖尿病"></el-option>
          <el-option label="II型糖尿病" value="II型糖尿病"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="noShow()">取 消</el-button>
      <el-button type="primary" @click="addPatients(form)">确 定</el-button>
    </div>
</el-dialog>
  </div>
</template>

<script>
export default {
  props:{
    showit:{
      type:Boolean,
      default:false
    }
  },
  // inject: ['reload'],
  data() {
    return {
      //  dialogFormVisible: false,
        form: {
          name: '',
          sex: '',
          desc: '',
          id:''
        },
        formLabelWidth: '120px'
    }
  },
  methods: {
    noShow(){
      this.$emit('noShow',this.showit);
    },
    addPatients(form){
      let params = {
        name:form.name,
        sex:form.sex,
        illness:form.desc,
        id:form.id
      }
      this.$http.post('/api/patient/add',params)
      
      this.noShow()
      // this.reload()
    }
  },
  
}
</script>

<style>

</style>