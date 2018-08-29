import * as mutationTypes from '../mutation-types'

const state = {
  menuBig: false,
  paddingLeftContent: '230px',
  widthSidebar: '230px',
  textMenu: true
}

const getters = {
  menuBig: state => { return state.menuBig },
  paddingLeftContent: state => { return state.paddingLeftContent },
  widthSidebar: state => { return state.widthSidebar },
  textMenu: state => { return state.textMenu }
}

const mutations = {
  [mutationTypes.UPDATE_MENU_BIG] (state, data) {
    state.menuBig = data
  },
  [mutationTypes.PADDING_LEFT_CONTENT] (state, data) {
    state.paddingLeftContent = data
  },
  [mutationTypes.WIDTH_SIDEBAR] (state, data) {
    state.widthSidebar = data
  },
  [mutationTypes.TEXT_MENU] (state, data) {
    state.textMenu = data
  }
}

const actions = {
  handleMenuBig ({ commit }, data) {
    commit(mutationTypes.UPDATE_MENU_BIG, data)
  },
  handlePaddingLeftContent ({ commit }, data) {
    commit(mutationTypes.PADDING_LEFT_CONTENT, data)
  },
  handleWidthSidebar ({ commit }, data) {
    commit(mutationTypes.WIDTH_SIDEBAR, data)
  },
  handleTextMenu ({ commit }, data) {
    commit(mutationTypes.TEXT_MENU, data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
