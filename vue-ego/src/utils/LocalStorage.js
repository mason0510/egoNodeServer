import store from '../store'
let user = localStorage.getItem('user')
if (user) {
  user = JSON.parse(user)
  // store.commit('../store/LoginModule/setUser', user)
}
