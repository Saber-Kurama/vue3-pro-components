/*
 * @Author: saber
 * @Date: 2021-12-30 16:57:39
 * @LastEditTime: 2021-12-30 21:06:28
 * @LastEditors: saber
 * @Description: 
 */
// 
import TestButton from '../../../../test-button/src';
import '../../../../test-button/src/style';
// import TestButton from '../Button.vue';
export default {
  title: 'components/test-button',
  component: TestButton
}

const Template = (args: any) => ({
  components: { TestButton },
  setup() {
    return { args }
  },
  template: '<test-button v-bind="args"/>'
})
export const Primary = Template.bind({});
// @ts-ignore
Primary.storyName = '基本例子';
// @ts-ignore
Primary.args = {
  primary: true,
  label: 'Button',
}
