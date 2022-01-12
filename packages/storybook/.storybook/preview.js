/*
 * @Author: saber
 * @Date: 2021-12-24 19:05:33
 * @LastEditTime: 2022-01-12 14:36:48
 * @LastEditors: saber
 * @Description: 
 */
// 引入了全局样式
import '@digitforce/element-plus-digittheme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}