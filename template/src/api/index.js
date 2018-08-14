import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/': '/api'
axios.defaults.timeout = 30000

axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

const baseRequest = (config) => {
  return axios.request(config)
    .then(response => {
      const { status, statusText, data } = response
      if (status === 200 && statusText === 'OK') {
        return data
      }
    })
    .catch(error => {
      console.log('axios error: ', e)
    })
}

export default {
  get (url, params, config) {
    return baseRequest({
      method: 'get',
      url,
      params,
      ...config
    })
  },
  post (url, data, config) {
    return baseRequest({
      method: 'post',
      url,
      data,
      ...config
    })
  }
}
