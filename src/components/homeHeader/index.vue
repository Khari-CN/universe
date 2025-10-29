<template>
  <div
    class="title-wrapper"
    w-full
    bg="#fff"
    fixed
    pl-80
    pr-100
    py-25
    flex
    items-center
    justify-between
    z-999
  >
    <icon-custom-logo
      v-if="!isMobile || route.name === 'home'"
      class="logo"
      h-50
      cursor-pointer
      @click="router.push({ name: 'home' })"
    ></icon-custom-logo>
    <language-selector v-else></language-selector>
    <div class="menu" flex items-center gap-60 text-20>
      <n-dropdown
        v-for="menu in menuRoute"
        id="title-dropdown"
        trigger="click"
        :options="
          menu.children?.map((item) => ({
            label: item.meta?.title,
            key: item.name as string,
          }))
        "
        :render-label="renderLabel"
        :theme-overrides="dropdownOverrides"
        :node-props="nodeProps"
        @select="handleSelect"
      >
        <div
          cursor-pointer
          hover:c-blue
          @click="titleClick(menu)"
          :style="{
            color: menu.children?.some((item) => item.name === route.name)
              ? '#60a5fa'
              : '',
          }"
        >
          {{ menu.meta?.title }}
        </div>
      </n-dropdown>
    </div>
    <div
      v-if="isMobile && route.name !== 'home'"
      absolute
      left="50%"
      translate-x="-50%"
    >
      <n-dropdown
        trigger="click"
        :options="
          currentMenu?.children?.map((item) => ({
            label: item.meta?.title,
            key: item.name as string,
          }))
        "
        :render-label="renderLabel2"
        @select="handleSelect"
      >
        <div flex items-center>
          <span font-600 text-17>{{ currentMenu?.meta?.title }}</span>
          <icon-custom-triangle
            v-if="currentMenu?.children"
            w-16
            h-16
          ></icon-custom-triangle>
        </div>
      </n-dropdown>
    </div>
    <div flex items-center gap-16>
      <language-selector
        v-if="!(isMobile && route.name !== 'home')"
      ></language-selector>
      <icon-custom-menu
        v-if="isMobile && !isShowMobileMenu"
        class="menu-icon"
        w-24px
        h-24px
        @click.stop="isShowMobileMenu = !isShowMobileMenu"
      ></icon-custom-menu>
      <icon-custom-cancel
        v-if="isMobile && isShowMobileMenu"
        class="menu-icon"
        w-24px
        h-24px
        @click.stop="isShowMobileMenu = !isShowMobileMenu"
      ></icon-custom-cancel>
    </div>
  </div>
  <div
    v-show="isShowMobileMenu"
    shadow-xl
    rounded-b-24
    w-full
    fixed
    top-44
    z-999
    overflow-hidden
    bg="#fff"
  >
    <div
      v-for="item in menuRoute"
      border-t="1px solid #E9EAEB"
      leading-52
      text="16"
    >
      <div
        flex
        items-center
        pl="40%"
        :style="{
          color:
            item.name === route.name ||
            item.children?.some((item) => item.name === route.name)
              ? '#fff'
              : '',
          background:
            item.name === route.name ||
            item.children?.some((item) => item.name === route.name)
              ? '#48a0e1'
              : '',
        }"
        @click.stop="openSubMenu(item)"
      >
        <span>
          {{ item.meta?.title }}
        </span>
        <icon-custom-arrow-bottom
          v-if="item.children && item.children.length > 0"
          w-30
          h-30
        ></icon-custom-arrow-bottom>
      </div>
      <div
        v-for="child in item.children"
        pl="40%"
        :style="{
          display: selectedSubMenu === item.name ? 'block' : 'none',
          color: child.name === route.name ? '#48a0e1' : '',
        }"
        bg="#F3F6F9"
        @click="handleSelect(child.name as string)"
      >
        {{ child.meta?.title }}
      </div>
    </div>
  </div>
  <div class="empty" h-100></div>
</template>

<script setup lang="ts">
  import { router } from '@/router'
  import { useGlobalStore } from '@/store'
  import { storeToRefs } from 'pinia'
  import { menuRoute } from '@/router/routes'
  import { useRoute, type RouteRecordRaw } from 'vue-router'
  import { computed, h, onMounted, ref } from 'vue'
  import type { DropdownOption, DropdownProps } from 'naive-ui'
  import { jumpTo } from '@/utils'

  const isShowLangMenu = ref(false)

  const route = useRoute()

  const isShowMobileMenu = ref(false)

  const { isMobile, language } = storeToRefs(useGlobalStore())
  const renderLabel = (option: DropdownOption) => {
    return h(
      'span',
      {
        style: {
          color: option.key === route.name && !isMobile.value ? '#fff' : '',
        },
      },
      { default: () => option.label }
    )
  }
  const renderLabel2 = (option: DropdownOption) => {
    return h(
      'div',
      {
        style: {
          color: option.key === route.name ? '#1A6FFB' : '',
        },
      },
      { default: () => option.label }
    )
  }
  const currentMenu = computed(() => {
    console.log(menuRoute, route.name)
    return menuRoute.find(
      (menu) =>
        menu.name === route.name ||
        menu.children?.some((item) => item.name === route.name)
    )
  })

  const handleSelect = (key: string) => {
    isShowMobileMenu.value = false
    if (key === route.name) return
    window.scrollTo({ top: 0 })
    router.push({ name: key })
  }

  type DropdownThemeOverrides = NonNullable<DropdownProps['themeOverrides']>
  const dropdownOverrides: DropdownThemeOverrides = {
    optionColorHover: '#48a0e1',
    optionTextColorHover: '#fff',
  }

  const nodeProps = (option: DropdownOption) => {
    return {
      id: option.key === route.name ? 'selected-item' : '',
    }
  }

  const selectedSubMenu = ref()

  const openSubMenu = (routeRow: RouteRecordRaw) => {
    if (routeRow.children && routeRow.children.length > 0) {
      if (routeRow.name === selectedSubMenu.value) {
        selectedSubMenu.value = ''
      } else {
        selectedSubMenu.value = routeRow.name
      }
    } else {
      jumpTo({ name: routeRow.name })
    }
  }

  const titleClick = (menu: RouteRecordRaw) => {
    if (!menu.children) {
      jumpTo({ name: menu.name })
    }
  }

  onMounted(() => {
    window.addEventListener('click', () => {
      selectedSubMenu.value = ''
      isShowMobileMenu.value = false
      isShowLangMenu.value = false
    })
  })
</script>

<style scoped lang="scss">
  @media screen and (max-width: 768px) {
    .empty {
      height: 11rem;
    }
    .title-wrapper {
      height: 11rem;
      padding: 0.5rem 4rem;
      .logo {
        height: 8rem;
        width: auto;
      }
      .menu {
        display: none;
      }
      .language {
        .text-wrapper {
          padding: 1.5rem 2.5rem;
        }
      }
    }
  }
</style>
