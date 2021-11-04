/*
 * @Author: saber
 * @Date: 2021-11-04 13:55:25
 * @LastEditTime: 2021-11-04 14:52:31
 * @LastEditors: saber
 * @Description: 带分页的表格
 */

import { ElButton, ElTable, ElTableColumn } from "element-plus";
import { PropType, toRefs } from "vue";
import { defineComponent } from "vue";
import { TableColumn } from "./interface";

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
    ...ElTable.props,
  },
  setup(props, {slots}) {
    let {columns, ...restProps} = props
    // return () => {
    //   <div>
    //     <div>asdasd</div>
    //     {/* <ElTable {...restProps}>

    //     </ElTable> */}
    //   </div>
    // }
    restProps = restProps ? restProps : {}
    console.log('columns', columns)
    console.log('slots', slots)
    const renderTable = () => {
      if(slots.columns){
        return slots.columns && slots.columns() 
      }
      return columns.map((col: any, index: number) => {
          return <ElTableColumn label={col.label} prop={col.prop} key={col.key || index}></ElTableColumn>
        })
    
    }
    return () => (
      <div>
        <ElTable {...restProps}>
          {renderTable}
        </ElTable>
        <ElButton>asdasd</ElButton>
      </div>
  )
  }
})