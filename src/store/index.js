import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户的登录状态信息
    user: JSON.parse(window.localStorage.getItem('TOUTIAO_USER')),
    // user: null
    active: '北京',
    id: 'AREA|88cff55c-aaa4-e2e0'
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      window.localStorage.setItem('TOUTIAO_USER', JSON.stringify(user))
    }
  },
  actions: {
  },
  modules: {
  }
})
