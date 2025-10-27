<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useGlobalStore } from './store'
  import { isMobileDevice } from './utils'
  import type { GlobalThemeOverrides } from 'naive-ui'

  const globalStore = useGlobalStore()

  onBeforeMount(() => {
    globalStore.isMobile = isMobileDevice()
    console.log('isMobile', globalStore.isMobile)
    window.onresize = () => {
      globalStore.isMobile = isMobileDevice()
      console.log('isMobile', globalStore.isMobile)
    }
  })

  const themeOverrides: GlobalThemeOverrides = {
    Input: {
      borderHover: '1px solid #1A6FFB',
      borderFocus: '1px solid #1A6FFB'
    }
  }
</script>

<template>
  <n-config-provider
    inline-theme-disabled
    :theme-overrides="themeOverrides"
    class="h-full"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </n-config-provider>
</template>

<style></style>
