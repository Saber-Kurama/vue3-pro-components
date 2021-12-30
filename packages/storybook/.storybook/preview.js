/*
 * @Author: saber
 * @Date: 2021-12-24 19:05:33
 * @LastEditTime: 2021-12-30 21:45:11
 * @LastEditors: saber
 * @Description: 
 */
// 引入了全局样式
import 'element-plus/dist/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}