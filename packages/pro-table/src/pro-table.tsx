/*
 * @Author: saber
 * @Date: 2021-11-05 09:49:31
 * @LastEditTime: 2021-11-05 12:17:14
 * @LastEditors: saber
 * @Description: 
 */

import { defineComponent } from "vue";
import SaberQueryHeader from "@digitforce/query-header";
import { ElTable, ElTableColumn} from 'element-plus' 

const SaberProTable = defineComponent({
  name: "SaberProTable",
  props: {},
  setup(props, { slots }) {
    return () => {
      const slots1 = {
        default: () => <div>A</div>,
        bar: () => <span>B</span>,
      };
      return (
        <div>
          <SaberQueryHeader v-slots={{default: slots.query}}>           
          </SaberQueryHeader>
        </div>
      )
    }
  }
})

export default SaberProTable
