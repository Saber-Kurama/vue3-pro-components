/*
 * @Author: saber
 * @Date: 2021-12-22 18:45:57
 * @LastEditTime: 2021-12-30 20:53:21
 * @LastEditors: saber
 * @Description: 
 */
const path = require('path');
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    // Return the altered config
    console.log(' config.module.rules[4]',  config.module.rules[0].use[0].options)
    // config.module.rules[4].use[0].options.transpileOnly = false;
    config.module.rules[0].use[0].options.plugins.push('@vue/babel-plugin-jsx');
    // config.module.rules[0].use[1] = config.module.rules[4].use[0]; 
    // config.module.rules[4].use[0] = config.module.rules[0].use[0] 
    return config;
  },
  "framework": "@storybook/vue3",
  "core": {
    "builder": "webpack5"
  }
}