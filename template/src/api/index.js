import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/': '/api'
axios.defaults.timeout = 30000

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log('error = ', error)

  return Promise.reject(error)
})

export default {
  get (url, config) {
    return axios.get(url, {
      ...config
    })
  },
  post (url, data, config) {
    return axios.post(url, data, {
      ...config
    })
  }
}
