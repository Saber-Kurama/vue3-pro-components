<!--
 * @Author: saber
 * @Date: 2021-11-05 10:03:26
 * @LastEditTime: 2021-11-05 15:21:28
 * @LastEditors: saber
 * @Description: 
-->

<script setup lang="ts">
import SbaerProTable from "@digitforce/pro-table";
import SbaerQueryHeader from "@digitforce/query-header";
import SbaerQueryTable from "@digitforce/query-table";
import { reactive, watch } from "vue";
const queryData = reactive({
  name: "",
  age: 0
});

const columns = [
  {
    label: "名称",
    prop: "name",
    // render: () => {
    //   return h("div", "sss222");
    // },
  },
  {
    label: "日期",
    prop: "date",
  },
];
const requestData = async (query: any) => {
  console.log("requestDatarequestData", query);
  return {
    data: [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ],
    success: true,
    total: 10,
  };
};
let paramsProxy = reactive({
  params: {}
})
const onSubmit = () => {
  console.log('onSubmit====')
  // params = reactive({...queryData})
  paramsProxy.params = { ...queryData}
  console.log(paramsProxy.params, 'paramsProxy.params')
  
}
watch(() => paramsProxy.params, (newVal, preVal) => {
  console.log('params???', newVal, preVal)
}, {deep: true})
// setTimeout(() => {
//   paramsProxy.params.name = 'saber'
// }, 10000)
</script>
<template>
  <div>
    <SbaerQueryHeader @submit="onSubmit">
      <ElFormItem label="name">
        <ElInput v-model="queryData.name"></ElInput>
      </ElFormItem>
      <ElFormItem label="name1">
        <ElInput v-model="queryData.name"></ElInput>
      </ElFormItem>
      <ElFormItem label="name1">
        <ElInput v-model="queryData.name"></ElInput>
      </ElFormItem>
    </SbaerQueryHeader>
    <SbaerQueryTable :columns="columns" :request="requestData" :params="paramsProxy.params"></SbaerQueryTable>
  </div>
</template>
