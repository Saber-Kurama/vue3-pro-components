/*
 * @Author: saber
 * @Date: 2021-12-22 18:12:13
 * @LastEditTime: 2021-12-24 17:44:06
 * @LastEditors: saber
 * @Description: 
 */
import { defineComponent, reactive, ref, watch, computed } from 'vue';
import TestButton1 from './TestButton1.vue';

const TestButton = defineComponent({
  name: 'TestButton',
  setup(props, { slots, emit }) {
    return () => {
      return (
        <div>这是一个test <TestButton1 /></div>
      )
    }
  }
});

export default TestButton;
