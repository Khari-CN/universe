<template>
  <div>
    <home-header></home-header>
    <template v-if="locale === 'zh_TW'">
      <img
        v-if="!isMobile"
        block
        h-auto
        w-full
        src="@/assets/images/contactUs/banner.png"
      />
      <img
        v-else
        block
        h-auto
        w-full
        src="@/assets/images/contactUs/m/banner.png"
      />
    </template>

    <template v-if="locale === 'en_US'">
      <img
        v-if="!isMobile"
        block
        h-auto
        w-full
        src="@/assets/images/contactUs/banner-en.png"
      />
      <img
        v-else
        block
        h-auto
        w-full
        src="@/assets/images/contactUs/m/banner-en.png"
      />
    </template>
    <template v-if="locale === 'zh_CN'">
      <img
        v-if="!isMobile"
        block
        h-auto
        w-full
        src="@/assets/images/contactUs/banner-zh.png"
      />
      <img
        v-else
        block
        h-auto
        w-full
        src="@/assets/images/contactUs/m/banner-zh.png"
      />
    </template>

    <div class="block1" max-w-1400 m-auto py-80>
      <div class="title" text="center 30" w-1020 font-700 leading-43 m-auto>
        {{ $t('contact.block1Title') }}
      </div>
      <div class="sub" text="#FF7B00 30 center" font-700 mt-20>
        {{ $t('contact.block1SubTitle') }}
      </div>
      <div class="flex-wrapper" flex mt-40 gap-40 flex-wrap>
        <div flex-1 min-w-680 flex p-40 gap-20 rounded-16 c-shadow>
          <img
            w-100
            h-100
            src="@/assets/images/contactUs/block1-icon1.png"
            alt=""
          />
          <div>
            <div class="title" text="20" font-700>
              {{ $t('contact.block1Item1Title') }}
            </div>
            <div class="des" text="16 #747677" mt-5>
              {{ $t('contact.block1Item1Des') }}
            </div>
            <n-button class="btn" color="#1A6FFB" ghost round h-40 mt-20>{{
              $t('contact.block1Item1Btn')
            }}</n-button>
          </div>
        </div>
        <div flex-1 min-w-680 flex p-40 gap-20 rounded-16 c-shadow>
          <img
            w-100
            h-100
            src="@/assets/images/contactUs/block1-icon2.png"
            alt=""
          />
          <div>
            <div class="title" text="20" font-700>
              {{ $t('contact.block1Item2Title') }}
            </div>
            <div class="des" text="16 #747677" mt-5>
              {{ $t('contact.block1Item2Des') }}
            </div>
            <n-button class="btn" color="#1A6FFB" ghost round h-40 mt-20>{{
              $t('contact.block1Item2Btn')
            }}</n-button>
          </div>
        </div>
        <div flex-1 min-w-680 flex p-40 gap-20 rounded-16 c-shadow>
          <img
            w-100
            h-100
            src="@/assets/images/contactUs/block1-icon3.png"
            alt=""
          />
          <div>
            <div class="title" text="20" font-700>
              {{ $t('contact.block1Item3Title') }}
            </div>
            <div class="des" text="16 #747677" mt-5>
              {{ $t('contact.block1Item3Des') }}
            </div>
            <n-button class="btn" color="#1A6FFB" ghost round h-40 mt-20>{{
              $t('contact.block1Item3Btn')
            }}</n-button>
          </div>
        </div>
        <div flex-1 min-w-680 flex p-40 gap-20 rounded-16 c-shadow>
          <img
            w-100
            h-100
            src="@/assets/images/contactUs/block1-icon1.png"
            alt=""
          />
          <div>
            <div class="title" text="20" font-700>
              {{ $t('contact.block1Item4Title') }}
            </div>
            <div class="des" text="16 #747677" mt-5>
              {{ $t('contact.block1Item4Des') }}
            </div>
            <n-button class="btn" color="#1A6FFB" ghost round h-40 mt-20>
              support@metauil.com
            </n-button>
          </div>
        </div>
      </div>
    </div>

    <div class="block2" py-80>
      <div class="wrapper" w-1400 m-auto>
        <div class="title" text="48 center" font-700 leading-70>
          {{ $t('contact.block2Title') }}
        </div>
        <div class="form-wrapper" mt-40 bg="#FFFFFF" p-40 pb-0>
          <n-form ref="formRef" label-placement="top" size="large">
            <n-grid :cols="isMobile ? 12 : 24" :x-gap="isMobile ? 0 : 40">
              <n-form-item-gi :span="12" :label="$t('contact.input1Label')">
                <n-input />
              </n-form-item-gi>
              <n-form-item-gi :span="12" :label="$t('contact.input2Label')">
                <n-input />
              </n-form-item-gi>
              <n-form-item-gi :span="12" :label="$t('contact.input3Label')">
                <n-input />
              </n-form-item-gi>
              <n-form-item-gi :span="12" :label="$t('contact.input4Label')">
                <n-input />
              </n-form-item-gi>
              <n-form-item-gi :span="12" :label="$t('contact.input5Label')">
                <n-input />
              </n-form-item-gi>
              <n-form-item-gi :span="12" :label="$t('contact.input6Label')">
                <n-input />
              </n-form-item-gi>
              <n-form-item-gi :span="24" :label="$t('contact.input7Label')">
                <n-input
                  class="text-input"
                  h-200
                  :resizable="false"
                  type="textarea"
                />
              </n-form-item-gi>
              <n-form-item-gi :span="24" :label="$t('contact.input8Label')">
                <n-input />
              </n-form-item-gi>
            </n-grid>
          </n-form>
          <div text-center>
            <n-button class="btn" color="#1A6FFB" w-240 h-70 round text-24>{{
              $t('contact.submit')
            }}</n-button>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright" text="center 16" leading-80 bg="#ECFCFB">
      {{ $t('footer.copyright') }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGlobalStore } from '@/store'
  import { storeToRefs } from 'pinia'
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()
  const globalStore = useGlobalStore()

  const { isMobile } = storeToRefs(globalStore)
</script>

<style scoped lang="scss">
  @use './mobile.scss';
  .block2 {
    background: linear-gradient(
      180deg,
      #ecfcfb 0%,
      rgba(236, 252, 251, 0) 100%
    );
  }
  @media screen and (min-width: 768px) {
  }
</style>
