/*
 * @Author: saber
 * @Date: 2021-12-30 16:57:39
 * @LastEditTime: 2022-01-12 14:41:29
 * @LastEditors: saber
 * @Description: 
 */
// 
import TestButton from '../../../../test-button/src';
import { ElButton } from 'element-plus';
import '../../../../test-button/src/style';
// import TestButton from '../Button.vue';
export default {
  title: 'components/test-button',
  component: TestButton
}

const Template = (args: any) => ({
  components: { TestButton, ElButton },
  setup() {
    return { args }
  },
  template: '<div><test-button v-bind="args"/><el-button>xxx</el-button></div>'
})
export const Primary = Template.bind({});
// @ts-ignore
Primary.storyName = '基本例子';
// @ts-ignore
Primary.args = {
  primary: true,
  label: 'Button',
}
