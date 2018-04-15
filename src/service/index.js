import axios from 'axios'
import config from './config'
import store from '../store'
import * as api from './api'

const service = axios.create(config)
service.interceptors.request.use(
  config => {
    store.changeLoading(true)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  async response => {
    store.changeLoading(false)
    return { ...response }
  },
  error => {
    store.changeLoading(false)
    return Promise.reject(error)
  }
)

export default api

export const httpInstance = {
  get(url, params, config) {
    return service.get(url, { params, ...config })
  },
  post(url, params, config) {
    return service.post(url, params, config)
  },
  delete(url, params, config) {
    return service.delete(url, { params, ...config })
  },
  // FIXME: remove me
  jsonp(url, params = {}) {
    return new Promise((resolve, reject) => {
      const callback = getRandomString(10)
      /**
       *
       * 获取随机的字符串
       * @param {any} length
       * @returns
       */
      function getRandomString(length) {
        const alphabet = Array.from(Array(26), (item, index) => {
          return String.fromCharCode(index + 97)
        })
        return Array.from(Array(length)).reduce(str => {
          return (str += alphabet[(Math.random() * alphabet.length) | 0])
        }, '')
      }

      /**
       *
       * 获取请求地址
       * @param {any} url
       * @returns
       */
      function getRequestUrl(url) {
        const keys = Object.keys(params)
        const cb = keys.length
          ? `&callback=${callback}`
          : `?callback=${callback}`
        return (
          keys.reduce((url, key) => {
            if (!/\?/.test(url)) url += '?'
            return `${url}&${key}=${key}`
          }, url) + cb
        )
      }
      const requestScript = document.createElement('script')
      requestScript.setAttribute('src', getRequestUrl(url))
      document.body.append(requestScript)

      window[callback] = function jsonpCallback(data) {
        try {
          resolve(data)
        } catch (e) {
          reject(e)
        } finally {
          delete window[callback]
        }
      }
    })
  }
}
