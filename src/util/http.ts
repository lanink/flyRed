import axios from 'axios';
import { MessageBox, Loading } from 'element-ui'

let loading: any;

const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0,0)'
    });
};

const service = axios.create({
    timeout: 5000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
});

service.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = JSON.stringify(config.data)
        }
        startLoading();
        return config;
    },

    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        loading.close();
        if (response.status === 200) {
            if (response.data.code != 0 && response.data.code != 1 && response.data.status != 200) {
                MessageBox.alert('出了点小问题，请联系管理员');
            } 
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

// 发送post请求
export function P(url: string, params?: any) {
    return new Promise((resolve, reject) => {
        service.post(url, params)
            .then(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

// 发送get请求
export function G(url: string, params?: any) {
    return new Promise((resolve, reject) => {
        service.get(url, { params })
            .then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
