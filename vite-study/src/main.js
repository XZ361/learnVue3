import { createApp, useAttrs } from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// 状态
import store from './store'
// 全局样式
import './styles/index.scss'

import element3 from 'plugins/element'

createApp(App).use(router).use(store).use(element3).mount('#app')
