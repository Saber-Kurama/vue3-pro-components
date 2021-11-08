/*
 * @Author: saber
 * @Date: 2021-11-04 21:21:44
 * @LastEditTime: 2021-11-08 21:55:53
 * @LastEditors: saber
 * @Description:
 */

import { defineComponent, PropType, reactive, ref, watch } from "vue";
import SaberTable from "@digitforce/table";
import { TableColumn } from "@digitforce/table/src/interface";

export default defineComponent({
  name: "SaberQueryTable",
  props: {
    params: {
      type: Object,
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => [],
    },
    request: {
      type: Object,
    },
  },
  setup(props, { expose }) {
    // 表格数据
    const tableData = ref([]);
    // 当前页数
    const pageNum = ref(1);
    // 当前条数
    const pageSize = ref(10);

    const fetchData = async () => {
      // 后面要判断是否是函数
      if (props.request) {
        const { data, success, total } = await props.request.call(null, {
          ...props.params,
          pageNum: pageNum.value,
          pageSize: pageSize.value
        });
        console.log('datadata', data)
        if (success) {
          tableData.value = data;
        }
      }
    };
    fetchData();
    const pagination = {
      total: 10
    };
    watch(() => props.params, () => {
      console.log('-------')
      if(pageNum.value === 1){
        fetchData()
      }else {
        pageNum.value = 1;
      }
      // pageSize.value = 10
      // fetchData()
    }, {deep: true})
    watch([pageNum, pageSize], (newVal, oldVal) => {
      console.log({ newVal, oldVal })
      fetchData()
    })
    // reload
    const reload = () => {
      console.log('刷新')
    }
    const reloadAndRest = () => {
      console.log('重置刷新')
    }

    const reset = () => {
      console.log('重置')
    }
    // 导出功能
    expose({
      reload,
      reloadAndRest,
      reset
    })
    return () => {
      return (
        <>
          <SaberTable
            columns={props.columns}
            data={tableData.value}
            pagination={pagination}
            onPageSizeChange={(size: number) => {
              pageSize.value = size
            }}
            onPageCurrentChange={(page: number) => {
              pageNum.value = page
            }}
          ></SaberTable>
        </>
      );
    };
  },
});
