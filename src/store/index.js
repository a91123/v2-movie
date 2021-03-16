import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { getFilmData } from '@/api/api'

// 異步管理狀態流程
// 1.this.$store.dispatch ('action名稱') (分發)
// 2. action (store){xxxxxx store.commit('mutation',data) }
// 3. mutation(state,data){state.狀態名稱=data}
// 同步的直接 this.$store.commit('mutation',data)即可
// store 在 main.js 裡 當 main.js引入store開始 store就會加入this底下!!!!
// 所以可以直接 this.$store 來進行狀態操作

// getter 等同 computed用法 用來過濾 查詢 例如熱門前三名 的電影
// computed{...mapstate['state']}即可訪問store的狀態 但要引入 import {mapstate} form 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 自定義的共享狀態
    isTabbarShow: true,
    isTicketBarShow: false,
    cominglist: [],
    hotFilm: [],
    total: 0
  },

  mutations: {
    // 唯一修改狀態的地方 vuextool 時光旅行 檢查方便 務必要使用 mutations更改state
    HideTabbar(state, data) {
      // 第一個參數為 狀態 第二個參數為 detail組件 commit HideTabbar 傳過來的值
      state.isTabbarShow = data
    },
    comingLismutations(state, data) {
      state.cominglist = data
    },
    TicketBarShow(state, data) {
      state.isTicketBarShow = data
    },
    hotFilmmutations(state, data) {
      state.hotFilm =
        state.hotFilm.length === 0
          ? data.films
          : [...state.hotFilm, ...data.films]
      state.total = data.total
    },
    refresh(state, data) {
      state.hotFilm = data
    }
  },
  actions: {
    getdata: async (store) => {
      await axios({
        url:
          'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=2799552',
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"1608811732429964881035265","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        store.commit('comingLismutations', res.data.data.films)
      })
    },
    getHotFilmData: async (store, payload) => {
      const url = `https://m.maizuo.com/gateway?cityId=${payload.id}&pageNum=${payload.page}&pageSize=10&type=1&k=6811818`
      const res = await getFilmData(url)
      const data = await res.json()
      store.commit('hotFilmmutations', {
        films: data.data.films,
        total: data.data.total
      })
    }
  },

  modules: {}
})
