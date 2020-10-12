import Vue from 'vue'
import VueRouter from 'vue-router'

const TestVant = () => import('../components/TestVant')
const VantButton = () => import('../view/button/VantButton')
const VantCell = () => import('../view/cell/VantCell')
const VantIcon = () => import('../view/icon/VantIcon')
const VantImage = () => import('../view/image/VantImage')
const VantLayout = () => import('../view/layout/VantLayout')
const VantPopup = () => import('../view/popup/VantPopup')
const VantStyle = () => import('../view/style/VantStyle')
const VantToast = () => import('../view/toast/VantToast')
const VantPullRefresh = () => import('../view/pullrefresh/VantPullRefresh')
const VantList = () => import('../view/list/VantList')

Vue.use(VueRouter)

//在此处设置路由跳转的内容，在下面的router中引用了此处的routes
const routes = [
  {
    path: '/',
    redirect: '/TestVant'
  },
  {
    path: '/TestVant',
    component: TestVant
  },
  {
    path: '/vantbutton',
    component: VantButton
  },
  {
    path: '/vantcell',
    component: VantCell
  },
  {
    path: '/vanticon',
    component: VantIcon
  },
  {
    path: '/vantimage',
    component: VantImage
  },
  {
    path: '/vantlayout',
    component: VantLayout
  },
  {
    path: '/vantpopup',
    component: VantPopup
  },
  {
    path: '/vantstyle',
    component: VantStyle
  },
  {
    path: '/vanttoast',
    component: VantToast
  },
  {
    path: '/vantpullrefresh',
    component: VantPullRefresh
  },
  {
    path: '/vantlist',
    component: VantList
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

