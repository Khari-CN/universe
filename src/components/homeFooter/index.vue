<template>
  <div class="wrapper" w-full py-80>
    <div class="title" font-700 text="center 48 #fff" leading-70>
      {{ $t('footer.title') }}
    </div>
    <div class="des" text="16 #fff center" mt-20>
      {{ $t('footer.des') }}
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
    >
      <n-button
        class="text-20"
        h-60
        min-w-274
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
</template>

<script setup lang="ts"></script>

<style scoped>
  .wrapper {
    background: url('@/assets/images/footer/bg1.png') no-repeat;
    background-size: cover;
    .content {
      background: url('@/assets/images/footer/bg2.png') no-repeat;
      background-size: contain;
    }
  }
  @media screen and (max-width: 768px) {
    .wrapper {
      background: url('@/assets/images/footer/m/bg1.png') no-repeat;
      background-size: cover;
      padding: 5rem 4rem;
      width: 100%;
      .title {
        font-size: 6rem;
        line-height: 9rem;
      }
      .des {
        margin-top: 2.5rem;
        font-size: 3.4rem;
      }

      .content {
        background: url('@/assets/images/footer/m/bg2.png') no-repeat;
        background-size: contain;
        width: 100%;
        margin-top: 5rem;
        height: 50rem;
        padding-top: 20rem;
      }
    }
    .copyright {
      font-size: 3.5rem;
      line-height: 5rem;
      padding: 5rem 8rem;
    }
  }
</style>
