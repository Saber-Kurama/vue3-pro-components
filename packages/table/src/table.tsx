/*
 * @Author: Zhang Kai
 * @Date: 2021-11-04 13:55:25
 * @LastEditTime: 2021-11-10 18:44:07
 * @LastEditors: chengyanyin
 * @Description: 带分页的表格
 */

import { ElButton, ElPagination, ElTable, ElTableColumn } from 'element-plus';
import SaberPagination from '@digitforce/pagination';
import { PropType, toRefs } from 'vue';
import { defineComponent } from 'vue';
import { TableColumn } from './interface';
//TODO： 应该有自己的域 或者名字
import './index.scss';

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
      let { columns = [] } = props;
      return columns.map((col: any, index: number) => {
        // col 的其他参数 怎么传递呢？ 需要做什么转换吗
        // TODO: 没有做更好的校验
        const { render, slotRenderName, ...otherCol } = col;
        if (col.render) {
          return <ElTableColumn {...otherCol} v-slots={col.render}></ElTableColumn>;
        }
        // TODO: 考虑支持 slotRenderName
        if (col.slotRenderName) {
          return <ElTableColumn {...otherCol} v-slots={{ default: slots[col.slotRenderName] }}></ElTableColumn>;
        }
        return <ElTableColumn {...otherCol}></ElTableColumn>;
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
