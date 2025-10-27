import { defineStore } from 'pinia'
import { defaultLang } from '@/locales'

export type GlobalStoreState = {
  isMobile: boolean
  language: 'zh_TW' | 'zh_CN' | 'en_US'
}

export const useGlobalStore = defineStore('globalStore', {
  state: (): GlobalStoreState => ({
    isMobile: false,
    language: defaultLang as GlobalStoreState['language'],
  }),
  getters: {},
  actions: {},
})
