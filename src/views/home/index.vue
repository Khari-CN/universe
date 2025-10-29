<template>
  <div>
    <!-- 头部 -->
    <home-header></home-header>
    <!-- banner -->
    <template v-if="locale === LanguageMap.TW">
      <n-carousel v-if="!isMobile" autoplay :interval="2000">
        <img cursor-pointer w-full src="@/assets/images/home/banner1.png" />
        <img cursor-pointer w-full src="@/assets/images/home/banner2.png" />
        <img cursor-pointer w-full src="@/assets/images/home/banner3.png" />
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
      <n-carousel v-else :autoplay="true" :interval="2000">
        <img cursor-pointer w-full src="@/assets/images/home/m/banner1.png" />
        <img cursor-pointer w-full src="@/assets/images/home/m/banner2.png" />
        <img cursor-pointer w-full src="@/assets/images/home/m/banner3.png" />
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </template>
    <template v-if="locale === LanguageMap.EN">
      <n-carousel v-if="!isMobile" autoplay :interval="2000">
        <img cursor-pointer w-full src="@/assets/images/home/banner1-en.png" />
        <img cursor-pointer w-full src="@/assets/images/home/banner2-en.png" />
        <img cursor-pointer w-full src="@/assets/images/home/banner3-en.png" />
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
      <n-carousel v-else :autoplay="true" :interval="2000">
        <img
          cursor-pointer
          w-full
          src="@/assets/images/home/m/banner1-en.png"
        />
        <img
          cursor-pointer
          w-full
          src="@/assets/images/home/m/banner2-en.png"
        />
        <img
          cursor-pointer
          w-full
          src="@/assets/images/home/m/banner3-en.png"
        />
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </template>
    <template v-if="locale === LanguageMap.CN">
      <n-carousel v-if="!isMobile" autoplay :interval="2000">
        <img cursor-pointer w-full src="@/assets/images/home/banner1-zh.png" />
        <img cursor-pointer w-full src="@/assets/images/home/banner2-zh.png" />
        <img cursor-pointer w-full src="@/assets/images/home/banner3-zh.png" />
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
      <n-carousel v-else :autoplay="true" :interval="2000">
        <img
          cursor-pointer
          w-full
          src="@/assets/images/home/m/banner1-zh.png"
        />
        <img
          cursor-pointer
          w-full
          src="@/assets/images/home/m/banner2-zh.png"
        />
        <img
          cursor-pointer
          w-full
          src="@/assets/images/home/m/banner3-zh.png"
        />
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </template>

    <!-- service -->
    <div class="service-wrapper" py-80>
      <div class="service" max-w="1400" m-auto>
        <div class="title" text="center 48" font-700 leading-70>
          {{ $t('home.serviceTitle') }}
        </div>
        <div class="des" mt-40 text="16 #747677">
          {{ $t('home.serviceDes') }}
        </div>
        <div class="flex-wrapper" mt-40 flex justify-between gap-40>
          <div
            flex-1
            text="center"
            py-40
            bg="#fff"
            hover="bg-#E5EBFF text-#1A6FFB"
            b="1px solid #F2F2F6"
            cursor-pointer
            rounded-16
            @click="jumpTo({name: 'crm'})"
          >
            <img
              inline-block
              src="@/assets/images/home/service-icon1.png"
              alt=""
            />
            <div mt-30>
              {{ $t('home.crm') }}
              <br />
              (CRM）
            </div>
          </div>
          <div
            flex-1
            text="center"
            py-40
            bg="#fff"
            hover="bg-#E5EBFF text-#1A6FFB"
            b="1px solid #F2F2F6"
            cursor-pointer
            rounded-16
            @click="jumpTo({name: 'eCommerce'})"
          >
            <img
              inline-block
              src="@/assets/images/home/service-icon2.png"
              alt=""
            />
            <div mt-30>
              {{ $t('home.eCommerce') }}
              <br />
              (e-commerce)
            </div>
          </div>
          <div
            flex-1
            text="center"
            py-40
            bg="#fff"
            hover="bg-#E5EBFF text-#1A6FFB"
            b="1px solid #F2F2F6"
            cursor-pointer
            rounded-16
            @click="jumpTo({name: 'app'})"
          >
            <img
              inline-block
              src="@/assets/images/home/service-icon3.png"
              alt=""
            />
            <div mt-30>
              {{ $t('home.app') }}
              <br />
              (APP)
            </div>
          </div>
          <div
            flex-1
            text="center"
            py-40
            bg="#fff"
            hover="bg-#E5EBFF text-#1A6FFB"
            b="1px solid #F2F2F6"
            cursor-pointer
            rounded-16
            @click="jumpTo({name: 'customization'})"
          >
            <img
              inline-block
              src="@/assets/images/home/service-icon4.png"
              alt=""
            />
            <div mt-30>
              {{ $t('home.softwareCustom') }}
              <br />
              (Enterprise software customization)
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- about -->
    <div class="about-wrapper" py-80 bg="#ECFCFB">
      <div class="about" max-w="1400" m-auto>
        <div class="title" text="center 48" font-700 leading-70>
          {{ $t('home.aboutTitle') }}
        </div>
        <div class="flex-wrapper" mt-40 flex gap-40>
          <div flex-1 bg="#fff" rounded-16>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/home/about-icon1.png"
              alt=""
            />
            <div text-center py-25>
              <div text="18" font-700>{{ $t('home.aboutItem1Title') }}</div>
              <div text="#747677 16" px-35 mt-10>
                {{ $t('home.aboutItem1Des') }}
              </div>
            </div>
          </div>
          <div flex-1 bg="#fff" rounded-16>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/home/about-icon2.png"
              alt=""
            />
            <div text-center py-25>
              <div text="18" font-700>{{ $t('home.aboutItem2Title') }}</div>
              <div text="#747677 16" px-35 mt-10>
                {{ $t('home.aboutItem2Des') }}
              </div>
            </div>
          </div>
          <div flex-1 bg="#fff" rounded-16>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/home/about-icon3.png"
              alt=""
            />
            <div text-center py-25>
              <div text="18" font-700>{{ $t('home.aboutItem3Title') }}</div>
              <div text="#747677 16" px-35 mt-10>
                {{ $t('home.aboutItem3Des') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- client -->
    <div class="client-wrapper" py-80 bg="#ECFCFB">
      <div class="client" max-w="1400" m-auto>
        <div class="title" text="center 48" font-700 leading-70>
          {{ $t('home.clientTitle') }}
        </div>
        <div class="flex-wrapper" mt-40 flex gap-40 flex-wrap>
          <div class="c-shadow" flex-1 bg="#fff" rounded-16 p-30 min-w="30%">
            <img
              block
              w-full
              h-auto
              src="@/assets/images/home/client-icon1.png"
              alt=""
            />
            <div mt-20 relative px-40>
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                left-0
                top-0
                src="@/assets/images/home/quote1.png"
                alt=""
              />
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                right-0
                bottom-0
                src="@/assets/images/home/quote2.png"
                alt=""
              />
              <div text="16">
                {{ $t('home.clientDes1') }}
              </div>
            </div>
          </div>
          <div class="c-shadow" flex-1 bg="#fff" rounded-16 p-30 min-w="30%">
            <img
              block
              w-full
              h-auto
              src="@/assets/images/home/client-icon2.png"
              alt=""
            />
            <div mt-20 relative px-40>
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                left-0
                top-0
                src="@/assets/images/home/quote1.png"
                alt=""
              />
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                right-0
                bottom-0
                src="@/assets/images/home/quote2.png"
                alt=""
              />
              <div text="16">
                {{ $t('home.clientDes2') }}
              </div>
            </div>
          </div>
          <div class="c-shadow" flex-1 bg="#fff" rounded-16 p-30 min-w="30%">
            <img
              block
              w-full
              h-auto
              src="@/assets/images/home/client-icon3.png"
              alt=""
            />
            <div mt-20 relative px-40>
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                left-0
                top-0
                src="@/assets/images/home/quote1.png"
                alt=""
              />
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                right-0
                bottom-0
                src="@/assets/images/home/quote2.png"
                alt=""
              />
              <div text="16">
                {{ $t('home.clientDes3') }}
              </div>
            </div>
          </div>
          <div class="c-shadow" flex-1 bg="#fff" rounded-16 p-30 min-w="30%">
            <img
              block
              w-full
              h-auto
              src="@/assets/images/home/client-icon4.png"
              alt=""
            />
            <div mt-20 relative px-40>
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                left-0
                top-0
                src="@/assets/images/home/quote1.png"
                alt=""
              />
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                right-0
                bottom-0
                src="@/assets/images/home/quote2.png"
                alt=""
              />
              <div text="16">
                {{ $t('home.clientDes4') }}
              </div>
            </div>
          </div>
          <div class="c-shadow" flex-1 bg="#fff" rounded-16 p-30 min-w="30%">
            <img
              block
              w-full
              h-auto
              src="@/assets/images/home/client-icon5.png"
              alt=""
            />
            <div mt-20 relative px-40>
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                left-0
                top-0
                src="@/assets/images/home/quote1.png"
                alt=""
              />
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                right-0
                bottom-0
                src="@/assets/images/home/quote2.png"
                alt=""
              />
              <div text="16">
                {{ $t('home.clientDes5') }}
              </div>
            </div>
          </div>
          <div class="c-shadow" flex-1 bg="#fff" rounded-16 p-30 min-w="30%">
            <img
              block
              w-full
              h-auto
              src="@/assets/images/home/client-icon6.png"
              alt=""
            />
            <div mt-20 relative px-40>
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                left-0
                top-0
                src="@/assets/images/home/quote1.png"
                alt=""
              />
              <img
                v-if="!isMobile"
                w-30
                h-auto
                absolute
                right-0
                bottom-0
                src="@/assets/images/home/quote2.png"
                alt=""
              />
              <div text="16">
                {{ $t('home.clientDes6') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <home-footer></home-footer>
  </div>
</template>

<script setup lang="ts">
  import { LanguageMap } from '@/locales'
  import { useGlobalStore } from '@/store'
  import { jumpTo } from '@/utils'
  import { storeToRefs } from 'pinia'
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n()

  const globalStore = useGlobalStore()

  const { isMobile } = storeToRefs(globalStore)

  let timer: NodeJS.Timeout
  const platformActiveItemIndex = ref(1)

  onMounted(() => {
    console.log(locale.value)
    timer = setInterval(() => {
      platformActiveItemIndex.value > 8
        ? (platformActiveItemIndex.value = 1)
        : (platformActiveItemIndex.value += 1)
    }, 3000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })
</script>

<style scoped lang="scss">
  @use './mobile.scss';

  @media screen and (min-width: 768px) {
    .custom-dots {
      display: flex;
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
    }

    .custom-dots li {
      display: inline-block;
      width: 12px;
      height: 4px;
      margin: 0 3px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.4);
      transition:
        width 0.3s,
        background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .custom-dots li.is-active {
      width: 40px;
      background: #fff;
    }
    .service-wrapper {
      background: url('@/assets/images/home/service-bg.png') no-repeat center;
      background-size: cover;
    }
    .client-wrapper {
      background: url('@/assets/images/home/client-bg.png') no-repeat center;
      background-size: cover;
    }
  }
</style>
