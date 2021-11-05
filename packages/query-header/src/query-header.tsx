/*
 * @Author: saber
 * @Date: 2021-11-05 09:44:18
 * @LastEditTime: 2021-11-05 17:00:04
 * @LastEditors: saber
 * @Description:
 */
import { defineComponent, reactive, ref, watch, computed } from "vue";
import { ElForm, ElRow, ElCol, ElButton, ElIcon } from "element-plus";
import { ArrowDown, ArrowUp } from "@element-plus/icons";

const SaberQueryHeader = defineComponent({
  name: "SaberQueryHeader",
  props: {
    /** 默认显示个数 */
    defaultShowItems: {
      type: Number,
      default: 0, // TODO：能是另外的一个值吗
    },
    /** 一行的个数 */
    num: {
      type: Number,
      default: 3, // 默认只能是 3 或者 4
    },
  },
  emits: [
    "submit",
    "reset"
  ],
  setup(props, { slots, emit }) {
    console.log('slots', slots)
    // 是否展开
    const advanced = ref(false);
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
      console.log('calcSubBtnOffsetcalcSubBtnOffset')
      const defaultShowItems = props.defaultShowItems || props.num - 1;
      const childrens = (slots.default && slots.default()) || [];
      console.log('childrens.length', childrens.length)
      const total =
        (advanced.value ? childrens.length + 1 : defaultShowItems) * span.value;
        
      const remainder = total % 24;
      console.log('remainderremainder', remainder)
      if (total < 24 || remainder === 0) {
        return 0;
      }
      console.log('remainderremainder', remainder)
      return 24 - remainder;
    };
    const toggleAdvanced = () => {
      advanced.value = !advanced.value;
    };
    // flex-direction: column;
    // text-align: left;
    // justify-content: center;
    // display: flex;
    return () => {
      return (
        <ElForm inline={true}>
          <ElRow gutter={24}>
            {defaultShowSlots.value.map((vnode, index) => {
              return (
                <ElCol md={{ span: span.value }} key={index + "defalu"}>
                  {vnode}
                </ElCol>
              );
            })}
            {advanced.value &&
              advancedShowSlots.value.map((vnode, index) => {
                return (
                  <ElCol md={{ span: span.value }} key={index + "advance"}>
                    {vnode}
                  </ElCol>
                );
              })}
            <ElCol md={{ span: span.value, offset: calcSubBtnOffset() }}>
              <ElButton onClick={() => {
                emit('submit')
              }}>查询</ElButton>
              <ElButton onClick={() => {
                emit('reset')
              }}>重置</ElButton>
              {advancedShowSlots.value.length ? (
                <a
                  style={{
                    width: "52px",
                    marginLeft: "8px",
                    textAlign: "center",
                    color: "blue",
                  }}
                  onClick={toggleAdvanced}
                >
                  {advanced.value ? "收缩" : "展开"}
                  <ElIcon>
                    {advanced.value ? <ArrowUp /> : <ArrowDown />}
                  </ElIcon>
                </a>
              ) : (
                ""
              )}
            </ElCol>
          </ElRow>
        </ElForm>
      );
    };
  },
});

export default SaberQueryHeader;
