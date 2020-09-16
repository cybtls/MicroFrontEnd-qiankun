import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, setDefaultMountApp, start } from "qiankun"

registerMicroApps(
    [
        {
            // 应用名称
            name: 'qiankunVue',
            // 加载的js
            entry: '//localhost:9999',
            // 挂载到哪里
            container: '#qiankunVue',
            // 路径
            activeRule: '/vue',
            // 传参 子应用可以接受
            props: {
                data: '我是父应用传的数据'
            }
        },
        {
            // 应用名称
            name: 'qiankunReact',
            // 加载的js
            entry: '//localhost:10000',
            // 挂载到哪里
            container: '#qiankunReact',
            // 路径
            activeRule: '/react',
            // 传参 子应用可以接受
            props: {
                data: '我是父应用传的数据'
            }
        },
    ]
)
// 设置默认子应用
// setDefaultMountApp("/vue");

start({
    // 取消预加载
    prefetch:false
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#main-app')