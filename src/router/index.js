import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect:'/workbench',
    component: () => import('@/views/Main'),
    children: [
      { path:'/workbench',component: ()=>import('@/views/workbench/WorkBench'),
        redirect:'/workbench/bloodsugar',
        children:[
          {
            path:'/workbench/bloodsugar',
            component:()=>import("@/views/workbench/subcom/BloodSugar")
          },
          {
            path:'/workbench/bloodpressure',
            component:()=>import("@/views/workbench/subcom/BloodPressure")
          },
        ]
      },
      { path:'/hosManage',component: ()=>import('@/views/hosmanage/HosManage'),
        redirect:'/hosManage/bloodsugar',
        children: [
          {
            path:'/hosManage/bloodsugar',
            component: ()=>import('@/views/hosmanage/subcom1/BloodSugar'),
            redirect: '/hosManage/bloodsugar/bsinfo',
            children: [
              {
                path:'/hosManage/bloodsugar/bsinfo',
                component: ()=>import('@/views/hosmanage/subcom1/subcom2/BsInfo')
              },
              {
                path:'/hosManage/bloodsugar/bslevel',
                component: ()=>import('@/views/hosmanage/subcom1/subcom2/BsLevel')
              },
            ]
          },
          {
            path:'/hosManage/bloodpressure',
            component: ()=>import('@/views/hosmanage/subcom1/BloodPressure'),
            redirect:'/hosManage/bloodpressure/bpinfo',
            children: [
              {
                path:'/hosManage/bloodpressure/bpinfo',
                component: ()=>import('@/views/hosmanage/subcom1/subcom2/BpInfo')
              },
              {
                path:'/hosManage/bloodpressure/bpmap',
                component: ()=>import('@/views/hosmanage/subcom1/subcom2/BpMap')
              },
            ]
          },
        ]
    
      },
      { path:'/warning',component: ()=>import('@/views/Warning') },
      // { path:'/outManage',component: ()=>import('@/views/OutManage') },
      // { path:'/statistics',component: ()=>import('@/views/Statistics') },
      // { path:'/deviceIndex',component: ()=>import('@/views/DeviceIndex') },
      // { path:'/patientInfo',component: ()=>import('@/views/PatientInfo') },
      // { path:'/ynSettings',component: ()=>import('@/views/YnSettings') },
      // { path:'/ynReferControl',component: ()=>import('@/views/YnReferControl') },
      //在这里加
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
