/*
 * @Author: saber
 * @Date: 2021-12-30 21:11:24
 * @LastEditTime: 2021-12-30 21:41:05
 * @LastEditors: saber
 * @Description: 
 */
import Pagination from '../../../../pagination/src';
import '../../../../pagination/src/style';
// import TestButton from '../Button.vue';
export default {
  title: 'components/Pagination 分页',
  component: Pagination
}

const Template = (args: any) => ({
  components: { Pagination },
  setup() {
    return { args }
  },
  template: '<Pagination v-bind="args"/>'
})
export const Base = Template.bind({});
// @ts-ignore
Base.storyName = '基本例子';
// @ts-ignore
Base.args = {
  layout: 'prev, pager, next',
  total: 50
  // primary: true,
  // label: 'Button',
}
