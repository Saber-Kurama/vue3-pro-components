/*
 * @Author: Zhang Kai
 * @Date: 2021-10-25 17:29:24
 * @LastEditors: saber
 * @LastEditTime: 2021-11-05 12:08:21
 * @FilePath: 
 */
import { defineComponent, PropType, ref } from 'vue';
import './index.scss';
import { ElPagination } from 'element-plus';

const Pagination = defineComponent({
  name: 'SaberPagination',
  props: {
    ...ElPagination.props,
    /* 总条目数 */
    total: {
      type: Number
      // require: true
    },
    /* 组件布局，子组件名用逗号分隔 */
    layout: {
      type: String as PropType<string>,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    /* 每页显示个数选择器的选项设置 */
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 50]
    }
  },
  emits: ['currentChange', 'sizeChange'],
  setup: (props, { slots, attrs, emit }) => {
    return () => {
      const { total, layout, pageSizes } = props;
      return (
        <>
          <ElPagination
            {...props}
            background
            total={total}
            layout={layout}
            pageSizes={pageSizes}
            onSizeChange={(size: number) => emit('sizeChange', size)}
            onCurrentChange={(page: number) => emit('currentChange', page)}
          />
        </>
      );
    };
  }
});

export default Pagination;
