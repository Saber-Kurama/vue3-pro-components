/*
 * @Author: saber
 * @Date: 2021-11-04 11:48:18
 * @LastEditTime: 2021-11-04 11:48:20
 * @LastEditors: saber
 * @Description: 
 */
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})
