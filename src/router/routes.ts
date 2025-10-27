import type { RouteRecordRaw } from 'vue-router'
import i18n from '@/locales'

const { t } = i18n.global

export const menuRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: { title: t('header.home') },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: t('header.about') },
    component: () => import('@/views/aboutUs/index.vue'),
  },
  {
    path: '/service',
    name: 'service',
    redirect: '/service/crm',
    meta: { title: t('header.service') },
    children: [
      {
        path: 'crm',
        name: 'crm',
        meta: { title: t('header.crm') },
        component: () => import('@/views/service/crm/index.vue'),
      },
      {
        path: 'e-commerce',
        name: 'eCommerce',
        meta: { title: t('header.eCommerce') },
        component: () => import('@/views/service/commerce/index.vue'),
      },
      {
        path: 'app',
        name: 'app',
        meta: { title: t('header.app') },
        component: () => import('@/views/service/app/index.vue'),
      },
      {
        path: 'customization',
        name: 'customization',
        meta: { title: t('header.customization') },
        component: () => import('@/views/service/customization/index.vue'),
      },
    ],
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { title: t('header.contact') },
    component: () => import('@/views/contactUs/index.vue'),
  },
]

export const noFountRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'not-found',
  component: () => import('@/views/404/index.vue'),
}

export const constantRoute: RouteRecordRaw[] = [...menuRoute, noFountRoute]
