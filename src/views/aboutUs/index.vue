<template>
  <div>
    <home-header></home-header>
    <img
      v-if="!isMobile"
      block
      h-auto
      w-full
      src="@/assets/images/aboutUs/banner.png"
    />
    <img
      v-else
      block
      h-auto
      w-full
      src="@/assets/images/aboutUs/m/banner.png"
    />
    <div class="block1" max-w-1400 m-auto py-80>
      <div class="title" text="center 48" font-700 leading-70>
        {{ $t('aboutUs.block1Title') }}
      </div>
      <template v-if="!isMobile">
        <div flex my-40>
          <div w-700 c-shadow p-50 rounded-16>
            <div text="20" font-700>{{ $t('aboutUs.content1Title') }}</div>
            <div text="16 #747677" mt-8>
              {{ $t('aboutUs.content1Des') }}
            </div>
          </div>
          <img w-700 src="@/assets/images/aboutUs/block1-icon1.png" alt="" />
        </div>
        <div flex>
          <img w-700 src="@/assets/images/aboutUs/block1-icon2.png" alt="" />
          <div w-700 c-shadow p-50 rounded-16>
            <div text="20" font-700>{{ $t('aboutUs.content2Title') }}</div>
            <div text="16 #747677" mt-8>
              {{ $t('aboutUs.content2Des') }}
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div mt-20 c-shadow rounded-12>
          <img w-full src="@/assets/images/aboutUs/m/block1-icon1.png" alt="" />
          <div p-16>
            <div text="18" font-700>{{ $t('aboutUs.content1Title') }}</div>
            <div text="16 #747677" mt-5>
              {{ $t('aboutUs.content1Des') }}
            </div>
          </div>
        </div>
        <div mt-10 c-shadow rounded-12>
          <img w-full src="@/assets/images/aboutUs/m/block1-icon2.png" alt="" />
          <div p-16>
            <div text="18" font-700>{{ $t('aboutUs.content2Title') }}</div>
            <div text="16 #747677" mt-5>
              {{ $t('aboutUs.content2Des') }}
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="block2" h="480">
      <div class="wrapper" max-w="1400" m-auto py-80>
        <div class="title" text="center 48" font-700 leading-70>
          {{ $t('aboutUs.block2Title') }}
        </div>
        <div class="des" text="16" mt-40>
          {{ $t('aboutUs.block2Des1') }}
        </div>
        <div class="des" text="16" mt-15>
          {{ $t('aboutUs.block2Des2') }}
        </div>
      </div>
    </div>
    <div class="block3" max-w="1400" m-auto py-80>
      <div class="title" text="center 48" font-700 leading-70>
        {{ $t('aboutUs.block3Title') }}
      </div>
      <div class="flex-wrapper item1" flex gap-40 my-40>
        <div flex>
          <img
            v-if="!isMobile"
            w-340
            src="@/assets/images/aboutUs/block3-icon1.png"
            alt=""
          />
          <img v-else src="@/assets/images/aboutUs/m/block3-icon1.png" alt="" />
          <div
            class="content"
            text="center"
            px-40
            py-56
            w-340
            c-shadow
            rounded-r-16
          >
            <div class="title" text="20" font-700>
              {{ $t('aboutUs.block3Item1Title') }}
            </div>
            <div class="des" text="16 #747677 center" mt-8>
              {{ $t('aboutUs.block3Item1Des') }}
            </div>
          </div>
        </div>
        <div flex>
          <img
            w-340
            v-if="!isMobile"
            src="@/assets/images/aboutUs/block3-icon2.png"
            alt=""
          />
          <img v-else src="@/assets/images/aboutUs/m/block3-icon2.png" alt="" />

          <div
            class="content"
            text="center"
            px-40
            py-56
            w-340
            c-shadow
            rounded-r-16
          >
            <div class="title" text="20" font-700>
              {{ $t('aboutUs.block3Item2Title') }}
            </div>
            <div class="des" text="16 #747677" mt-8>
              {{ $t('aboutUs.block3Item2Des') }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex-wrapper item2" flex gap-40>
        <div flex>
          <div
            class="content"
            text="center"
            px-40
            py-56
            w-340
            c-shadow
            rounded-l-16
          >
            <div class="title" text="20" font-700>
              {{ $t('aboutUs.block3Item3Title') }}
            </div>
            <div class="des" text="16 #747677 center" mt-8>
              {{ $t('aboutUs.block3Item3Des') }}
            </div>
          </div>
          <img
            v-if="!isMobile"
            w-340
            src="@/assets/images/aboutUs/block3-icon3.png"
            alt=""
          />
          <img v-else src="@/assets/images/aboutUs/m/block3-icon3.png" alt="" />
        </div>
        <div flex>
          <div
            class="content"
            text="center"
            px-40
            py-56
            w-340
            c-shadow
            rounded-l-16
          >
            <div class="title" text="20" font-700>
              {{ $t('aboutUs.block3Item4Title') }}
            </div>
            <div class="des" text="16 #747677" mt-8>
              {{ $t('aboutUs.block3Item4Des') }}
            </div>
          </div>
          <img
            v-if="!isMobile"
            w-340
            src="@/assets/images/aboutUs/block3-icon4.png"
            alt=""
          />
          <img v-else src="@/assets/images/aboutUs/m/block3-icon4.png" alt="" />
        </div>
      </div>
    </div>
    <div class="block4" bg="#ECFCFB" py-80>
      <div max-w="1400" m-auto>
        <div class="title" text="center 48" font-700 leading-70>
          {{ $t('aboutUs.block4Title') }}
        </div>
        <div class="flex-wrapper wrapper" mt-40 flex gap-40>
          <div class="item1 item" flex-1 text="#fff" p-50 h-185>
            <div class="title" text-20 font-700>
              {{ $t('aboutUs.block4Item1Title') }}
            </div>
            <div class="des" mt-6 text-16 w-320>
              {{ $t('aboutUs.block4Item1Des') }}
            </div>
          </div>
          <div class="item2 item" flex-1 text="#fff" p-50 h-185>
            <div class="title" text-20 font-700>
              {{ $t('aboutUs.block4Item2Title') }}
            </div>
            <div class="des" mt-6 text-16 w-320>
              {{ $t('aboutUs.block4Item2Des') }}
            </div>
          </div>
        </div>
        <div class="flex-wrapper" mt-40 flex gap-40>
          <div class="item3 item" flex-1 text="#fff" p-50 h-185>
            <div class="title" text-20 font-700>
              {{ $t('aboutUs.block4Item3Title') }}
            </div>
            <div class="des" mt-6 text-16 w-320>
              {{ $t('aboutUs.block4Item3Des') }}
            </div>
          </div>
          <div class="item4 item" flex-1 text="#fff" px-50 py-38 h-185>
            <div class="title" text-20 font-700>
              {{ $t('aboutUs.block4Item4Title') }}
            </div>
            <div class="des" mt-6 text-16 w-320>
              {{ $t('aboutUs.block4Item4Des') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer" w-full py-80>
      <div class="title" font-700 text="center 48 #fff" leading-70>
        {{ $t('aboutUs.footerTitle') }}
      </div>
      <div class="des" text="16 #fff center" mt-20>
        {{ $t('aboutUs.footerDes') }}
      </div>
      <div
        class="content"
        m-auto
        mt-40
        h-380
        w="1400"
        flex
        items-center
        justify-center
      ></div>
    </div>
    <div class="copyright" text="center 16" leading-80>
      {{ $t('footer.copyright') }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGlobalStore } from '@/store'
  import { storeToRefs } from 'pinia'

  const globalStore = useGlobalStore()

  const { isMobile } = storeToRefs(globalStore)
</script>

<style scoped lang="scss">
  @use './mobile.scss';

  @media screen and (min-width: 768px) {
    .block2 {
      background: url('@/assets/images/aboutUs/block2-bg.png');
      background-size: cover;
    }
    .block4 {
      .item1 {
        background: url('@/assets/images/aboutUs/block4-bg1.png');
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/aboutUs/block4-bg2.png');
        background-size: cover;
      }
      .item3 {
        background: url('@/assets/images/aboutUs/block4-bg3.png');
        background-size: cover;
      }
      .item4 {
        background: url('@/assets/images/aboutUs/block4-bg4.png');
        background-size: cover;
      }
    }
    .footer {
      background: url('@/assets/images/footer/bg1.png') no-repeat;
      background-size: cover;
      .content {
        background: url('@/assets/images/aboutUs/footer.png') no-repeat;
        background-size: contain;
      }
    }
  }
</style>
