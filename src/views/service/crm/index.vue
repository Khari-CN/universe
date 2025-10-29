<template>
  <div>
    <home-header></home-header>
    <template v-if="locale === 'zh_TW'">
      <img
        v-if="!isMobile"
        block
        h-auto
        w-full
        src="@/assets/images/crm/banner.png"
      />
      <img v-else block h-auto w-full src="@/assets/images/crm/m/banner.png" />
    </template>
    <template v-if="locale === 'en_US'">
      <img
        v-if="!isMobile"
        block
        h-auto
        w-full
        src="@/assets/images/crm/banner-en.png"
      />
      <img
        v-else
        block
        h-auto
        w-full
        src="@/assets/images/crm/m/banner-en.png"
      />
    </template>
    <template v-if="locale === 'zh_CN'">
      <img
        v-if="!isMobile"
        block
        h-auto
        w-full
        src="@/assets/images/crm/banner-zh.png"
      />
      <img
        v-else
        block
        h-auto
        w-full
        src="@/assets/images/crm/m/banner-zh.png"
      />
    </template>

    <div class="block1" max-w-1400 m-auto py-80>
      <div class="title" text="center 30" w-1000 font-700 leading-43 m-auto>
        {{ $t('crm.block1Title') }}
      </div>
      <div class="sub" text="#FF7B00 30 center" font-700 mt-20>
        {{ $t('crm.block1SubTitle') }}
      </div>
      <div class="flex-wrapper" flex my-40 gap-40 flex-wrap>
        <div class="item1 item" flex-1 h-180 p-50 rounded-16 min-w="44%">
          <div class="title" text="20" font-700>
            {{ $t('crm.block1Item1Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('crm.block1Item1Des') }}
          </div>
        </div>
        <div class="item2 item" flex-1 h-180 p-50 rounded-16 min-w="50%">
          <div class="title" text="20" font-700>
            {{ $t('crm.block1Item2Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('crm.block1Item2Des') }}
          </div>
        </div>
        <div class="item3 item" flex-1 h-180 p-50 rounded-16>
          <div class="title" text="20" font-700>
            {{ $t('crm.block1Item3Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('crm.block1Item3Des') }}
          </div>
        </div>
        <div class="item4 item" flex-1 h-180 p-50 rounded-16>
          <div class="title" text="20" font-700>
            {{ $t('crm.block1Item4Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('crm.block1Item4Des') }}
          </div>
        </div>
        <div class="item5 item" flex-1 h-180 p-50 rounded-16>
          <div class="title" text="20" font-700>
            {{ $t('crm.block1Item5Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('crm.block1Item5Des') }}
          </div>
        </div>
      </div>
    </div>

    <div class="block2" py-80 bg="#ECFCFB">
      <div class="wrapper" max-w="1400" m-auto>
        <div class="title" text="center 48" font-700 leading-70>
          <template v-if="!isMobile">
            <span>{{ $t('crm.block2Title1') }}</span>
            <span pl-30>{{ $t('crm.block2Title2') }}</span>
          </template>
          <template v-else>
            <span>{{ $t('crm.block2Title1') }}</span> <br />
            <span>{{ $t('crm.block2Title2') }}</span>
          </template>
        </div>
        <div class="flex-wrapper" mt-40 flex gap-40 flex-wrap>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/crm/block2-icon1.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('crm.block2Item1Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('crm.block2Item1Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/crm/block2-icon2.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('crm.block2Item2Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('crm.block2Item2Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/crm/block2-icon3.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('crm.block2Item3Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('crm.block2Item3Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/crm/block2-icon4.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('crm.block2Item4Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('crm.block2Item4Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/crm/block2-icon5.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('crm.block2Item5Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('crm.block2Item5Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/crm/block2-icon6.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('crm.block2Item6Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('crm.block2Item6Des') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block3" py-80 max-w="1400" m-auto>
      <div class="title" text="center 48" font-700 leading-70>
        {{ $t('crm.block3Title') }}
      </div>
      <div class="flex-wrapper" flex gap-40 mt-40>
        <div
          flex-1
          rounded-16
          b="1px solid #F2F2F6"
          pt-50
          px-30
          pb-40
          text="center"
        >
          <img
            inline-block
            w-120
            h-120
            src="@/assets/images/crm/block3-icon1.png"
            alt=""
          />
          <div class="title" text="20" font-700 mt-30 mb-10>
            {{ $t('crm.block3Item1Title') }}
          </div>
          <div class="des" text="16 #747677">
            {{ $t('crm.block3Item1Des') }}
          </div>
        </div>
        <div
          flex-1
          rounded-16
          b="1px solid #F2F2F6"
          pt-50
          px-30
          pb-40
          text="center"
        >
          <img
            inline-block
            w-120
            h-120
            src="@/assets/images/crm/block3-icon2.png"
            alt=""
          />
          <div class="title" text="20" font-700 mt-30 mb-10>
            {{ $t('crm.block3Item2Title') }}
          </div>
          <div class="des" text="16 #747677">
            {{ $t('crm.block3Item2Des') }}
          </div>
        </div>
        <div
          flex-1
          rounded-16
          b="1px solid #F2F2F6"
          pt-50
          px-30
          pb-40
          text="center"
        >
          <img
            inline-block
            w-120
            h-120
            src="@/assets/images/crm/block3-icon3.png"
            alt=""
          />
          <div class="title" text="20" font-700 mt-30 mb-10>
            {{ $t('crm.block3Item3Title') }}
          </div>
          <div class="des" text="16 #747677">
            {{ $t('crm.block3Item3Des') }}
          </div>
        </div>
        <div
          flex-1
          rounded-16
          b="1px solid #F2F2F6"
          pt-50
          px-30
          pb-40
          text="center"
        >
          <img
            inline-block
            w-120
            h-120
            src="@/assets/images/crm/block3-icon4.png"
            alt=""
          />
          <div class="title" text="20" font-700 mt-30 mb-10>
            {{ $t('crm.block3Item4Title') }}
          </div>
          <div class="des" text="16 #747677">
            {{ $t('crm.block3Item4Des') }}
          </div>
        </div>
      </div>
    </div>
    <div class="block4" w-full py-80>
      <div class="title" font-700 text="center 48 #fff" leading-70>
        {{ $t('crm.block4Title') }}
      </div>
      <div class="des" text="30 #fff center" mt-20 mb-40>
        {{ $t('crm.block4SubTitle') }}
      </div>
      <div class="sub" text="30 #fff center" font-700>
        {{ $t('crm.block4Title2') }}
      </div>
      <div
        class="flex-wrapper"
        m-auto
        mt-40
        h-368
        w="1400"
        flex
        gap-40
        text="center #fff"
      >
        <div class="item1 item" rounded-16 flex-1 h-368 pt-40>
          <div text="30" font-700>{{ $t('crm.block4Item1Title') }}</div>
          <div text="16" mt-10>{{ $t('crm.block4Item1Des') }}</div>
        </div>
        <div class="item2 item" rounded-16 flex-1 h-368 pt-40 text="center">
          <div text="30" font-700>{{ $t('crm.block4Item2Title') }}</div>
          <div text="16" mt-10>{{ $t('crm.block4Item2Des') }}</div>
        </div>
        <div class="item3 item" rounded-16 flex-1 h-368 pt-40 text="center">
          <div text="30" font-700>{{ $t('crm.block4Item3Title') }}</div>
          <div text="16" mt-10>{{ $t('crm.block4Item3Des') }}</div>
        </div>
      </div>
    </div>
    <div class="copyright" text="center 16" leading-80>
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
  .block1 {
    .item{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .item1 {
      background: linear-gradient(90deg, #f2f9fd 0%, #d9e6fd 100%);
    }
    .item2 {
      background: linear-gradient(90deg, #ecfbf5 0%, #d9f5fc 100%);
    }
    .item3 {
      background: linear-gradient(90deg, #fef8f0 0%, #f9edde 100%);
    }
    .item4 {
      background: linear-gradient(90deg, #effbfd 0%, #e3f1fe 100%);
    }
    .item5 {
      background: linear-gradient(90deg, #f6f2fe 0%, #e4dffc 100%);
    }
  }
  @media screen and (min-width: 768px) {
    .block2 {
      .item {
        min-width: 30%;
      }
    }

    .block4 {
      background: url('@/assets/images/footer/bg1.png') no-repeat;
      background-size: cover;
      .item1 {
        background: url('@/assets/images/crm/block4-bg1.png') no-repeat;
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/crm/block4-bg2.png') no-repeat;
        background-size: cover;
      }
      .item3 {
        background: url('@/assets/images/crm/block4-bg3.png') no-repeat;
        background-size: cover;
      }
    }
  }
</style>
