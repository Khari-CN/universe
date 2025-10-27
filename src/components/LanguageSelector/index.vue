<template>
  <div>
    <div class="language" text-16>
      <div
        class="text-wrapper"
        flex
        items-center
        py-8
        px-20
        rounded-100
        b="1px solid #F2F2F6"
        :style="
          isShowLangMenu
            ? {
                background: '#E5EBFF',
                color: '#1A6FFB',
              }
            : {
                background: '#fff',
              }
        "
        cursor-pointer
        @click.stop="isShowLangMenu = !isShowLangMenu"
      >
        <div>{{ curLang }}</div>
        <icon-custom-arrow-bottom></icon-custom-arrow-bottom>
      </div>
      <transition>
        <div v-show="isShowLangMenu" absolute text-center>
          <icon-custom-arrow-top></icon-custom-arrow-top>
          <div
            class="select-wrapper"
            bg="#fff"
            rounded-12
            mt--10
            overflow-hidden
          >
            <div
              v-for="item in languageArr"
              px="28"
              h-40
              leading-40
              cursor-pointer
              hover="bg-#E5EBFF text-#1A6FFB"
              :style="
                curLang === item.name
                  ? {
                      fontWeight: '700',
                      background: '#E5EBFF',
                      color: '#1A6FFB',
                    }
                  : {}
              "
              @click="changeLanguage(item.key)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { storeToRefs } from 'pinia'
  import { useGlobalStore } from '@/store'
  import { LanguageMap } from '@/locales'

  const i18n = useI18n()
  const { isMobile, language } = storeToRefs(useGlobalStore())

  const isShowLangMenu = ref(false)
  const languageArr = [
    { name: '简体中文', key: LanguageMap.CN },
    { name: '繁體中文', key: LanguageMap.TW },
    { name: 'English', key: LanguageMap.EN },
  ]
  const changeLanguage = (lang: string) => {
    // i18n.locale.value = lang
    // localStorage.setItem('language', lang)
    // window.location.reload()
    return
  }

  const curLang = computed(() => {
    const item = languageArr.find((item) => item.key === i18n.locale.value)
    return item?.name
  })
</script>

<style scoped>
  .language {
    .select-wrapper {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
    }
  }
  @media screen and (max-width: 768px) {
    .language {
      .text-wrapper {
        padding: 1.5rem 2.5rem;
      }
    }
  }
</style>
