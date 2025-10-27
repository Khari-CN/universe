import { defineConfig, presetAttributify, presetWind3, presetIcons } from 'unocss';
// import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  rules: [['c-shadow', { 'box-shadow': '0px 0px 10px 0px rgba(0,0,0,0.06)' }]],
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal'
  },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons()
    // presetRemToPx({
    //   baseFontSize: 3 // 1rem = 3px
    // })
  ],
});