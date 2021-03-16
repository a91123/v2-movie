import Vue from 'vue'
import VueRouter from 'vue-router'
import film from '@/views/film'
import member from '@/views/member'
import commingSoon from '@/views/film/commingSoon'
import detail from '@/views/detail'
import hot from '../views/film/hot'
import cinema from '../views/cinema'
import city from '@/views/city'
// @ = 從src資料夾開使 代碼看起來較簡潔 ../=跳回上一層也是可以這樣寫
Vue.use(VueRouter)
// const auth = {
//   isLogin() {
//     return true
//   }
// }
const routes = [
  {
    path: '/film',
    component: film,
    children: [
      {
        // /shoplist/food  (完整寫法 可省略)
        path: 'hot',
        component: hot
      },
      {
        path: 'commingSoon',
        component: commingSoon
      },
      {
        path: '',
        redirect: 'hot'
      }
    ]
  },
  {
    path: '/cinema',
    component: cinema
  },
  {
    path: '/detail/:id',
    component: detail,
    name: 'detail',
    props: true
  },
  {
    path: '/member',
    component: member
  },
  {
    path: '/city',
    component: city
  },

  {
    // 如果前面的都不匹配自動重新定向到指定頁面
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局路由守衛
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (to.path === '/todo') {
//     console.log('止步')
//     if (auth.isLogin()) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
