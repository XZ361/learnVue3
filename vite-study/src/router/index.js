import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
// 用工厂函数创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/',component:()=>import('views/home.vue')}
  ],
})

export default router