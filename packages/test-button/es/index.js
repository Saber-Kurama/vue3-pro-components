import { openBlock, createElementBlock, defineComponent, createVNode, createTextVNode } from "vue";
var TestButton1_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
const _hoisted_1 = { class: "button1" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, "\u8FD9\u662F\u53E6\u5916\u4E00\u4E2Abutton");
}
var TestButton1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const TestButton = defineComponent({
  name: "TestButton",
  setup(props, {
    slots,
    emit
  }) {
    return () => {
      return createVNode("div", null, [createTextVNode("\u8FD9\u662F\u4E00\u4E2Atest "), createVNode(TestButton1, null, null)]);
    };
  }
});
export { TestButton as default };
