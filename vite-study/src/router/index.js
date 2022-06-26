import { createRouter, createWebHistory } from 'vue-router'
import Layout from 'layouts/index.vue'
// there is also createWebHashHistory and createMemoryHistory
// 用工厂函数创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
      { 
      path: "/",
      redirect: "/home",
      component: Layout,
      meta: { title: "导航", icon: "el-icon-s-home" },
      children: [
        {
          path: "home",
          component: () => import("views/home.vue"),
          name: "Home",
          meta: { title: "首页", icon: "el-icon-s-home" },
          children: [
            {
              path: ":id",
              component: () => import("views/detail.vue"),
              name: "Detail",
              hidden: true,
              meta: {
                title: "详情",
                icon: "el-icon-s-home",
                activeMenu: "/home",
              },
            },
          ],
        },
      ],
    }
  ],
})

export default router