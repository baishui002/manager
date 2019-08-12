/*
ajax 请求函数模块
*/
import axios from 'axios'
import { Loading, Message } from 'element-ui'
/**
 * 向外部暴漏一个函数 ajax
 * @param {*} url 请求路径，默认为空
 * @param {*} data 请求参数，默认为空对象
 * @param {*} type 请求方法，默认为GET
 */
let loading
 function startLoading() {
     loading = Loading.service({
         text: '加载中...',
         lock: true,
         background: 'rgba(0,0,0,0.7)'
     })
 }

function endLoading() {
    loading.close()
}

axios.defaults.baseURL = '/api'

//添加请求拦截器
axios.interceptors.request.use(function (config) {
    startLoading()
    const { data } = config
    return config

  }, function (error) {
  
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(response => {
    endLoading()
    // 对响应数据做点什么
    return response;
}, error => {
    endLoading()
    return Promise.reject(error);
});

export default function ajax(url = '', data = {}, type = 'GET') {
    // 返回值 Promise对象 （异步返回的数据是response.data，而不是response）
    return new Promise((resolve, reject) => {
        // （利用axios）异步执行ajax请求
        let promise // 这个内部的promise用来保存axios的返回值(promise对象)
        if (type === 'GET') {
            // 准备 url query 参数数据
            let dataStr = '' // 数据拼接字符串，将data连接到url
            data.s = Math.random();
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            //   url = url + '&s=' + Math.random();
            // 发送 get 请求
            promise = axios.get(url)
        } else {
            // 发送 post 请求
            promise = axios.post(url, data)
        }
        promise.then(response => {
            // 成功回调resolve()
            resolve(response.data)
        })
            .catch(error => {
                // 失败回调reject()
                reject(error)
            })
    })
}
