import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import type { App } from 'vue'
import { constantRoute } from './routes'
export const router = createRouter({
  history:
    import.meta.env.MODE === 'uat'
      ? createWebHashHistory()
      : createWebHistory(),
  routes: constantRoute,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
