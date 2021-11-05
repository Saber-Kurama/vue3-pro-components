/*
 * @Author: saber
 * @Date: 2021-11-04 14:08:45
 * @LastEditTime: 2021-11-05 11:57:18
 * @LastEditors: saber
 * @Description:
 */

import { defineComponent } from "vue";
import { ElPagination, ElTable, ElTableColumn } from "element-plus";

const Table1 = defineComponent({
  name: "Table1",
  setup() {
    return () => {
      const slots1 = {
        default: () => <div>A</div>,
        bar: () => <span>B</span>,
      };
      return (
        <div>
          asdasdasd=====
        <ElTable data={[{name: 'sss'}]}>
          <ElTableColumn v-slots={slots1}>
          </ElTableColumn>
        </ElTable>
        <ElPagination layout="total, sizes, prev, pager, next, jumper" total={10}></ElPagination>
        </div>
      );
    };
  },
});

export default Table1;
