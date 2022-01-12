/*
 * @Author: saber
 * @Date: 2022-01-12 10:47:22
 * @LastEditTime: 2022-01-12 14:30:28
 * @LastEditors: saber
 * @Description: 
 */
const filepath = '/Users/saber/coding/mygithub/element-plus-digitforce-theme/themes/digittheme'
function readPackage (pkg, context) {
  // context 中只有一个 log 函数
  // console.log('pkg---', pkg)
  if(pkg.name=="" && pkg.dependencies['@digitforce/element-plus-digittheme']) {
    // TODO: 如何更新新版本，是否需要判断版本，例如: 版本和正在开发的版本相同就是用本地的，或者通过一个变量
    context.log('依赖：@digitforce/element-plus-digittheme')
    pkg.dependencies['@digitforce/element-plus-digittheme'] = `file://${filepath}`
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
}