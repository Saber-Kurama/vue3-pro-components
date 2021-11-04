/*
 * @Author: saber
 * @Date: 2021-11-04 21:21:44
 * @LastEditTime: 2021-11-04 22:24:18
 * @LastEditors: saber
 * @Description:
 */

import { defineComponent, reactive, ref, watch } from "vue";
import SaberTable from "@digitforce/table";

export default defineComponent({
  name: "SaberQueryTable",
  props: {
    params: {
      type: Object,
    },
    request: {
      type: Object,
    },
  },
  setup(props) {
    console.log('???>>.xxx')
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
    const columns = [
      {
        label: "名称",
        prop: "name",
      },
      {
        label: "日期",
        prop: "date",
      },
    ];
    let tableData1 = reactive([
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ]);
    setTimeout(() => {
      tableData1 = [
        {
          date: "2016-05-03",
          name: "Tomssssss",
          address: "No. 189, Grove St, Los Angeles",
        },
      ] 
    }, 3000)
    const pagination = {
      total: 10
    };
    watch([pageNum, pageSize, props.params], (newVal, oldVal) => {
      console.log({ newVal, oldVal })
      fetchData()
    })
    return () => {
      return (
        <>
          <div>asdasd</div>
          <SaberTable
            columns={columns}
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
