// import axios qs
// @ts-ignore
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'


const ErrorHandler = (status, error) => {
  switch (status) {
    case 400:
      return error.data.message
    case 401:
      return error.data.message
    case 403:
      return error.data.message
    case 404:
      return error.data.message
    case 500:
      return error.data.message
    case 503:
      return error.data.message
    default:
      console.log(error)
      break
  }
}


// new axios instance
const instance = axios.create({
  baseURL: 'http://localhost:8989/',
  timeout: 5000
})

// add a request interceptor
instance.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  // token
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // @ts-ignore
  return Promise.reject(error)
})

// add response interceptor
instance.interceptors.response.use(
  response => {
    return response
  }
  , function (error) {
    // @ts-ignore
    let response = error
    ErrorHandler(response.status, response.info)
  }
)

export default instance
