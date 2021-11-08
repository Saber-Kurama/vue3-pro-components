/*
 * @Author: Zhang Kai
 * @Date: 2021-11-05 20:58:49
 * @LastEditors: saber
 * @LastEditTime: 2021-11-08 20:14:28
 * @FilePath: /vue3-pro-components/packages/query-header/src/SearchForm.tsx
 */
import { defineComponent, reactive, ref, watch, computed, watchEffect } from 'vue';
import { ElForm, ElRow, ElCol, ElButton, ElIcon } from 'element-plus';
import { ArrowDown, ArrowUp } from '@element-plus/icons';

const SaberQueryHeader = defineComponent({
  name: 'SaberQueryHeader',
  props: {
    /** 默认显示个数 */
    defaultShowItems: {
      type: Number,
      default: 0 // TODO：能是另外的一个值吗
    },
    /** 一行的个数 */
    num: {
      type: Number,
      default: 3 // 默认只能是 3 或者 4
    },
    model: {
      type: Object,
      default: () => {}
    },
  },
  emits: ['submit', 'reset'],
  setup(props, { slots, emit, expose }) {
    console.log('slots', slots);
    // 是否展开
    const advanced = ref(false);
    const formRef = ref(null);
    // 每一个的 span 的值  栅格占位格数
    const span = computed(() => {
      return 24 / props.num;
    });
    /**
     * @description 默认显示的插槽
     */
    const defaultShowSlots = computed(() => {
      // TODO: 需要过滤掉 注释等一些组件 或者说只能要 type等于字符串的 这个
      const defaultShowItems = props.defaultShowItems || props.num - 1;
      const childrens = (slots.default && slots.default()) || [];
      return childrens.slice(0, defaultShowItems) || [];
    });

    /**
     * @description 显示更多的插槽
     */
    const advancedShowSlots = computed(() => {
      const defaultShowItems = props.defaultShowItems || props.num - 1;
      const childrens = (slots.default && slots.default()) || [];
      return childrens.slice(defaultShowItems);
    });

    /**
     * 偏移量
     */
    const calcSubBtnOffset = () => {
      const defaultShowItems = props.defaultShowItems || props.num - 1;
      const childrens = (slots.default && slots.default()) || [];
      const total =
        (advanced.value ? childrens.length + 1 : defaultShowItems) * span.value;

      const remainder = total % 24;
      if (total < 24 || remainder === 0) {
        return 0;
      }
      console.log('remainderremainder', remainder);
      return 24 - remainder;
    };
    const toggleAdvanced = () => {
      advanced.value = !advanced.value;
    };
    expose({
      formRef,
    });
    const restFn = () => {
   
        console.log('submitsubmit', formRef.value)
        // @ts-ignore
        formRef.value?.resetFields();
        emit('reset');
      
    }
    return () => {
      const { model } = props;
      console.log('modelmodel', model)
      return (
        <ElForm
          ref={formRef}
          label-position={'right'}
          model={model}
          labelWidth="100px"
        >
          <ElRow gutter={20}>
            {defaultShowSlots.value.map((vnode, index) => {
              return (
                <ElCol
                  md={{ span: span.value, offset: 0 }}
                  key={index + 'defalut'}
                >
                  {vnode}
                </ElCol>
              );
            })}
            {advanced.value &&
              advancedShowSlots.value.map((vnode, index) => {
                return (
                  <ElCol
                    md={{ span: span.value, offset: 0 }}
                    key={index + 'advance'}
                  >
                    {vnode}
                  </ElCol>
                );
              })}
            <ElCol
              style={{ textAlign: 'right' }}
              md={{ span: span.value, offset: calcSubBtnOffset() }}
            >
              <ElButton
                onClick={restFn}
              >
                重置
              </ElButton>
              <ElButton
                type="primary"
                onClick={() => { 
                  emit('submit');
                }}
              >
                查询
              </ElButton>

              {advancedShowSlots.value.length ? (
                <ElButton onClick={toggleAdvanced} type="text">
                  {advanced.value ? '收缩' : '展开'}
                  <ElIcon color="#396EFE">
                    {advanced.value ? <ArrowUp /> : <ArrowDown />}
                  </ElIcon>
                </ElButton>
              ) : (
                ''
              )}
            </ElCol>
          </ElRow>
        </ElForm>
      );
    };
  }
});

export default SaberQueryHeader;
