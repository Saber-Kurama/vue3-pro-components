/*
 * @Author: saber
 * @Date: 2021-11-04 14:08:45
 * @LastEditTime: 2021-11-04 20:37:27
 * @LastEditors: saber
 * @Description: 
 */

import { defineComponent } from "vue"
import { ElPagination } from 'element-plus';

const Table1 = defineComponent({
  name: "Table1",
  setup() {
    return () => {
     return (
      <ElPagination background layout="prev, pager, next" total={1000}>
      </ElPagination>
     )
    }
  }
})

export default Table1;