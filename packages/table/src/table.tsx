/*
 * @Author: Zhang Kai
 * @Date: 2021-11-04 13:55:25
 * @LastEditTime: 2021-12-31 10:46:51
 * @LastEditors: saber
 * @Description: 带分页的表格
 */

import { ElButton, ElPagination, ElTable, ElTableColumn } from 'element-plus';
import SaberPagination from '@digitforce/pagination';
import { PropType, toRefs } from 'vue';
import { defineComponent } from 'vue';
import { TableColumn } from './interface';


export default defineComponent({
  name: 'SaberTable',
  props: {
    /**
     * @zh 表格的列描述信息
     * @en Column info of the table
     */
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => [],
    },
    hasPagination: {
      type: Boolean,
      default: true,
    },
    pagination: { ...ElPagination.props },
    ...ElTable.props,
  },
  emits: ['pageCurrentChange', 'pageSizeChange'],
  setup(props, { emit, slots }) {
    // 创建table
    const renderTable = () => {
      // 支持 模板的语法
      if (slots.columns) {
        return slots.columns && slots.columns();
      }
      const { rowKey } = props;
      let { columns = [] } = props;
      return columns.map((col: any, index: number) => {
        // col 的其他参数 怎么传递呢？ 需要做什么转换吗
        // TODO: 没有做更好的校验
        const { render, slotRenderName, ...otherCol } = col;
        const key = col[rowKey] || col.key || col.prop || index; // 每一个 columns 的 key
        const newCol = { ...otherCol, key }; // 一个新的 col
        if (col.render) {
          newCol.slots = col.render;
        } else if (col.slotRenderName) {
          // TODO: 考虑支持 slotRenderName
          newCol.slots = { default: slots[col.slotRenderName] };
        } else if (col.prop instanceof Array) {
          // 支持 prop 传参为 string[]
          newCol.prop = col.prop.join('.');
          newCol.slots = {
            default: ({ row }: any) => {
              let current = row;
              for (let i = 0; i < col.prop.length; i++) {
                if (!current) return null;
                const prop = col.prop[i];
                current = current[prop];
              }
              return current;
            },
          };
        }
        return <ElTableColumn {...newCol} v-slots={newCol.slots}></ElTableColumn>;
      });
    };
    return () => {
      let { columns, pagination, hasPagination, ...restProps } = props;
      console.log(pagination);
      restProps = restProps ? restProps : {};
      console.log('propspropspropsprops', props.data);
      return (
        <div class='table-container'>
          <ElTable {...restProps}>{renderTable}</ElTable>
          {hasPagination && (
            <div class='Pagination'>
              <SaberPagination
                {...pagination}
                onCurrentChange={(page: number) => emit('pageCurrentChange', page)}
                onSizeChange={(size: number) => emit('pageSizeChange', size)}
              />
            </div>
          )}
        </div>
      );
    };
  },
});
