<template>
  <div class="person-list">
    <ul>
      <li style="padding: 0px 5px;">
        <div class="list-title">
          内分泌科
          </div>
            <div
              class="p_it"
              v-for="(item,index) in PaiList"
              :key="index"
              @click="addClassName(index)"
              :class="{'active': active_num===index }"
            >
            {{item.name}}
            <span></span>
          <div style="float:right;">{{item.id}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_num: this.$store.state.active_num,
      PaiList:[]
    }
  },
  inject:['reload'],
  methods:{
    addClassName(index) {
      this.active_num = index;
      this.$store.commit('changeActiveNum',index)
      this.reload()
      // this.$store.commit('changeTableData',true)
      // console.log(this.$store.state.active_num);
    },
    async fetchpatientInfoList() {
      const data = await this.$http.get('/api/patient/getInfo')
      this.PaiList = data.data.list
      // console.log(this.active_num);
      // console.log(this.patientInfoList);
    }
  },
  created(){
    this.fetchpatientInfoList()
  }
}
</script>

<style lang="scss" scoped>
  .person-list {
    height: calc(100% - 210px);
    overflow-y: hidden;
  }
  .list-title {
    padding: 15px 0;
    font-size: 14px;
    color: #333333;
    // text-align: center;
    border-bottom: 1px solid #dfdfdf;
  }
  .p_it {
    box-sizing: border-box;;
    margin: 3px 0;
    padding: 6px;
    cursor: pointer;
    font-size: 12px;
    border: 1px solid #fff;
  }
  .active {
    border: 1px solid #09f;
    border-radius: 4px;
  }
</style>
