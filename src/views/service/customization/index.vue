<template>
  <div>
    <home-header></home-header>
    <img
      v-if="!isMobile"
      block
      h-auto
      w-full
      src="@/assets/images/customization/banner.png"
    />
    <img
      v-else
      block
      h-auto
      w-full
      src="@/assets/images/customization/m/banner.png"
    />
    <div class="block1" max-w-1400 m-auto py-80>
      <div class="title" text="center 30" w-900 font-700 leading-43 m-auto>
        {{ $t('customization.block1Title') }}
      </div>
      <div class="sub" text="#FF7B00 30 center" font-700 mt-20>
        {{ $t('customization.block1SubTitle') }}
      </div>
      <div class="flex-wrapper" flex my-40 gap-40 flex-wrap>
        <div class="item1 item" flex-1 h-180 p-50 rounded-16 min-w="45%">
          <div class="title" text="20" font-700>
            {{ $t('customization.block1Item1Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('customization.block1Item1Des') }}
          </div>
        </div>
        <div class="item2 item" flex-1 h-180 p-50 rounded-16 min-w="45%">
          <div class="title" text="20" font-700>
            {{ $t('customization.block1Item2Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('customization.block1Item2Des') }}
          </div>
        </div>
        <div class="item3 item" flex-1 h-180 p-50 rounded-16>
          <div class="title" text="20" font-700>
            {{ $t('customization.block1Item3Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('customization.block1Item3Des') }}
          </div>
        </div>
        <div class="item4 item" flex-1 h-180 p-50 rounded-16>
          <div class="title" text="20" font-700>
            {{ $t('customization.block1Item4Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('customization.block1Item4Des') }}
          </div>
        </div>
        <div class="item5 item" flex-1 h-180 p-50 rounded-16>
          <div class="title" text="20" font-700>
            {{ $t('customization.block1Item5Title') }}
          </div>
          <div class="des" text="16 #747677" mt-6>
            {{ $t('customization.block1Item5Des') }}
          </div>
        </div>
      </div>
    </div>

    <div class="block2" py-80 bg="#ECFCFB">
      <div class="wrapper" max-w="1400" m-auto>
        <div class="title" text="center 48" font-700 leading-70>
          {{ $t('customization.block2Title', ['&nbsp;&nbsp;']) }}
        </div>
        <div class="flex-wrapper" mt-40 flex gap-40 flex-wrap>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/customization/block2-icon1.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('customization.block2Item1Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('customization.block2Item1Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/customization/block2-icon2.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('customization.block2Item2Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('customization.block2Item2Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/customization/block2-icon3.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('customization.block2Item3Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('customization.block2Item3Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/customization/block2-icon4.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('customization.block2Item4Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('customization.block2Item4Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/customization/block2-icon5.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('customization.block2Item5Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('customization.block2Item5Des') }}
              </div>
            </div>
          </div>
          <div class="c-shadow item" flex-1 bg="#fff" rounded-16 p-30>
            <img
              block
              w-full
              h-auto
              src="@/assets/images/customization/block2-icon6.png"
              alt=""
            />
            <div class="content" mt-20 text="center">
              <div class="title" text="20" font-700>
                {{ $t('customization.block2Item6Title') }}
              </div>
              <div class="des" text="16 #747677" mt-6>
                {{ $t('customization.block2Item6Des') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block3" py-80 max-w="1400" m-auto>
      <div text="center 48" font-700 leading-70>
        {{ $t('customization.block3Title', ['&nbsp;&nbsp;']) }}
      </div>
      <div class="flex-wrapper" flex gap-40 mt-40 flex-wrap>
        <div
          flex-1
          min-w-440
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
            src="@/assets/images/customization/block3-icon1.png"
            alt=""
          />
          <div text="20" font-700 mt-30 mb-10>
            {{ $t('customization.block3Item1Title') }}
          </div>
          <div text="16 #747677">{{ $t('customization.block3Item1Des') }}</div>
        </div>
        <div
          flex-1
          min-w-440
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
            src="@/assets/images/customization/block3-icon2.png"
            alt=""
          />
          <div text="20" font-700 mt-30 mb-10>
            {{ $t('customization.block3Item2Title') }}
          </div>
          <div text="16 #747677">{{ $t('customization.block3Item2Des') }}</div>
        </div>
        <div
          flex-1
          min-w-440
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
            src="@/assets/images/customization/block3-icon3.png"
            alt=""
          />
          <div text="20" font-700 mt-30 mb-10>
            {{ $t('customization.block3Item3Title') }}
          </div>
          <div text="16 #747677">{{ $t('customization.block3Item3Des') }}</div>
        </div>
        <div
          flex-1
          min-w-440
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
            src="@/assets/images/customization/block3-icon4.png"
            alt=""
          />
          <div text="20" font-700 mt-30 mb-10>
            {{ $t('customization.block3Item4Title') }}
          </div>
          <div text="16 #747677">{{ $t('customization.block3Item4Des') }}</div>
        </div>
        <div
          flex-1
          min-w-440
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
            src="@/assets/images/customization/block3-icon5.png"
            alt=""
          />
          <div text="20" font-700 mt-30 mb-10>
            {{ $t('customization.block3Item5Title') }}
          </div>
          <div text="16 #747677">{{ $t('customization.block3Item5Des') }}</div>
        </div>
        <div
          flex-1
          min-w-440
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
            src="@/assets/images/customization/block3-icon6.png"
            alt=""
          />
          <div text="20" font-700 mt-30 mb-10>
            {{ $t('customization.block3Item6Title') }}
          </div>
          <div text="16 #747677">{{ $t('customization.block3Item6Des') }}</div>
        </div>
      </div>
    </div>
    <div class="block4" bg="#ECFCFB" py-80>
      <div max-w="1400" m-auto>
        <div class="title" text="center 48" font-700 leading-70>
          {{ $t('customization.block4Title') }}
        </div>
        <div class="flex-wrapper" mt-40 flex gap-40>
          <div class="item1 item" flex-1 text="#fff" p-50 h-185>
            <div class="title" text-20 font-700>
              {{ $t('customization.block4Item1Title') }}
            </div>
            <div class="des" mt-6 text-16 w-320>
              {{ $t('customization.block4Item1Des') }}
            </div>
          </div>
          <div class="item2 item" flex-1 text="#fff" p-50 h-185>
            <div class="title" text-20 font-700>
              {{ $t('customization.block4Item2Title') }}
            </div>
            <div class="des" mt-6 text-16 w-320>
              {{ $t('customization.block4Item2Des') }}
            </div>
          </div>
          <div class="item3 item" flex-1 text="#fff" p-50 h-185>
            <div class="title" text-20 font-700>
              {{ $t('customization.block4Item3Title') }}
            </div>
            <div class="des" mt-6 text-16 w-320>
              {{ $t('customization.block4Item3Des') }}
            </div>
          </div>
          <div class="item4 item" flex-1 text="#fff" px-50 py-38 h-185>
            <div class="title" text-20 font-700>
              {{ $t('customization.block4Item4Title') }}
            </div>
            <div class="des" mt-6 text-16 w-320>
              {{ $t('customization.block4Item4Des') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block5" bg="#F7FEFD">
      <div class="wrapper" max-w="1400" m-auto py-80 text-center>
        <div class="title" font-700 text="center 48 #fff" leading-70>
          {{ $t('customization.block5Title') }}
        </div>
        <div class="flex-wrapper" flex mt-40 items-center>
          <div class="item" w="250" text="center">
            <div
              class="item-title"
              rounded-12
              leading-70
              text="20 #fff"
              font-700
            >
              {{ $t('customization.block5Item1Title') }}
            </div>
            <div class="des" text="16" p-30 bg="#fff" rounded-12 mt--14 pt-44>
              {{ $t('customization.block5Item1Sub') }}
            </div>
          </div>
          <img
            v-if="!isMobile"
            w-35
            pt-60
            src="@/assets/images/app/arrow.png"
            alt=""
          />
          <img v-else src="@/assets/images/customization/m/arrow.png" alt="" />
          <div class="item" w="250" text="center">
            <div
              class="item-title"
              rounded-12
              leading-70
              text="20 #fff"
              font-700
            >
              {{ $t('customization.block5Item2Title') }}
            </div>
            <div class="des" text="16" p-30 bg="#fff" rounded-12 mt--14 pt-44>
              {{ $t('customization.block5Item2Sub') }}
            </div>
          </div>
          <img
            v-if="!isMobile"
            w-35
            pt-60
            src="@/assets/images/app/arrow.png"
            alt=""
          />
          <img v-else src="@/assets/images/customization/m/arrow.png" alt="" />
          <div class="item" w="250" text="center">
            <div
              class="item-title"
              rounded-12
              leading-70
              text="20 #fff"
              font-700
            >
              {{ $t('customization.block5Item3Title') }}
            </div>
            <div class="des" text="16" p-30 bg="#fff" rounded-12 mt--14 pt-44>
              {{ $t('customization.block5Item3Sub') }}
            </div>
          </div>
          <img
            v-if="!isMobile"
            w-35
            pt-60
            src="@/assets/images/app/arrow.png"
            alt=""
          />
          <img v-else src="@/assets/images/customization/m/arrow.png" alt="" />
          <div class="item" w="250" text="center">
            <div
              class="item-title"
              rounded-12
              leading-70
              text="20 #fff"
              font-700
            >
              {{ $t('customization.block5Item4Title') }}
            </div>
            <div class="des" text="16" p-30 bg="#fff" rounded-12 mt--14 pt-44>
              {{ $t('customization.block5Item4Sub') }}
            </div>
          </div>
          <img
            v-if="!isMobile"
            w-35
            pt-60
            src="@/assets/images/app/arrow.png"
            alt=""
          />
          <img v-else src="@/assets/images/customization/m/arrow.png" alt="" />
          <div class="item" w="250" text="center">
            <div
              class="item-title"
              rounded-12
              leading-70
              text="20 #fff"
              font-700
            >
              {{ $t('customization.block5Item5Title') }}
            </div>
            <div class="des" text="16" p-30 bg="#fff" rounded-12 mt--14 pt-44>
              {{ $t('customization.block5Item5Sub') }}
            </div>
          </div>
        </div>
        <n-button
          class="text-20 btn"
          mt-40
          h-60
          w-274
          round
          color="#FFC300"
          text-color="#171A1D"
          font-700
          >{{ $t('footer.btn') }}</n-button
        >
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

  const globalStore = useGlobalStore()

  const { isMobile } = storeToRefs(globalStore)
</script>

<style scoped lang="scss">
  @use './mobile.scss';
  .block1 {
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
  .block5 {
    background: url('@/assets/images/footer/bg1.png') no-repeat;
    background-size: cover;
    .item-title {
      position: relative;
      background: linear-gradient(270deg, #4893ff 0%, #44ebcf 100%);
    }
  }
  @media screen and (min-width: 768px) {
    .block2 {
      .item {
        min-width: 30%;
      }
    }
    .block4 {
      .item1 {
        background: url('@/assets/images/customization/block4-bg1.png');
        background-size: cover;
      }
      .item2 {
        background: url('@/assets/images/customization/block4-bg2.png');
        background-size: cover;
      }
      .item3 {
        background: url('@/assets/images/customization/block4-bg3.png');
        background-size: cover;
      }
      .item4 {
        background: url('@/assets/images/customization/block4-bg4.png');
        background-size: cover;
      }
    }
  }
</style>
