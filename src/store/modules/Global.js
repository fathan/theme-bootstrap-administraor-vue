import * as mutationTypes from '../mutation-types'

const state = {
  menuBig: false
}

const getters = {
  menuBig: state => { return state.menuBig }
}

const mutations = {
  [mutationTypes.UPDATE_MENU_BIG] (state, data) {
    state.menuBig = data
  }
}

const actions = {
  handleMenuBig ({ commit }, data) {
    commit(mutationTypes.UPDATE_MENU_BIG, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
