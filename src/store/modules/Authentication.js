import { ENV } from '@/store/config'

const state = {
  formSignIn: {
    email: '',
    password: ''
  }
}

const getters = {
  // SIGN IN
  valueSignInEmail: state => { return state.formSignIn.email },
  valueSignInPassword: state => { return state.formSignIn.password }
}

const mutations = {
  // SIGN IN
  updateSignInEmail (state, email) { state.formSignIn.email = email },
  updateSignInPassword (state, password) { state.formSignIn.password = password }
}

const actions = {
  _xhrPostSignIn ({commit}, data) {
    return new Promise((resolve, reject) => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = {
        email: data.email,
        password: data.password
      }
      this.axios.post(`${ENV.API_URL}api/admin/login`, body, options)
        .then(
          response => {
            resolve(response)
          }
        )
        .catch(
          error => {
            reject(error)
          }
        )
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
