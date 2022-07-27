export default {
  namespaced: true,
  state: {
    userinfo: {
      user: '',
      token: ''
    },
    mutations: {
      setUser: (state, userinfo) => {
        state.userinfo = userinfo
      },
      // clear user data
      clearUserinfo: (state) => {
        state.userinfo = {
          user: '',
          token: ''
        }
      }
    }
  }
}
