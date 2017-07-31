import * as types from './types'

export default {
  UserLogin ({ commit }, data) {
    commit(types.LOGIN, data)
  },

  UserLogout ({ commit }) {
    commit(types.LOGOUT)
  },

  UserID ({ commit }, data) {
    commit(types.USERID, data)
  }
}
