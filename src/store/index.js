import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    active_num:-1,
    patientList:[],
    
    tableData:[
      { date:'2020-09-18' },
      { date:'2020-09-18' },
      { date:'2020-09-18' },
      { date:'2020-09-18' },
      { date:'2020-09-18' },
      { date:'2020-09-18' },
      { date:'2020-09-18' },

    ],
    TimeInfoList:[
      {label:'日期',prop:'date',width:'110px'},
      {label:'凌晨',prop:'beforeDawn'},
      {label:'早餐前',prop:'beforeBreakfast'},
      {label:'早餐后',prop:'afterBreakfast'},
      {label:'午餐前',prop:'beforeLunch'},
      {label:'午餐后',prop:'afterLunch'},
      {label:'晚餐前',prop:'beforeDinner'},
      {label:'晚餐后',prop:'afterDinner'},
      {label:'睡前',prop:'beforeSleep'},
      {label:'随机',prop:'random'},
      {label:'患者备注',prop:'remarks'},
    ],
    TimeList:[
      {value:1,label:'凌晨',prop:'beforeDawn'},
      {value:2,label:'早餐前',prop:'beforeBreakfast'},
      {value:3,label:'早餐后',prop:'afterBreakfast'},
      {value:4,label:'午餐前',prop:'beforeLunch'},
      {value:5,label:'午餐后',prop:'afterLunch'},
      {value:6,label:'晚餐前',prop:'beforeDinner'},
      {value:7,label:'晚餐后',prop:'afterDinner'},
      {value:8,label:'睡前',prop:'beforeSleep'},
      {value:9,label:'随机',prop:'random'},
    ],
    patientBuild:false,
  },
  mutations: {
    changeBuild(state,flag){
      state.patientBuild = flag
    },
    changeActiveNum(state,num){
      state.active_num = num
      // console.log(state.active_num);
    },
  },
  actions: {
  },
  modules: {
  }
})
