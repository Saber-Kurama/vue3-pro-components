<!--
 * @Author: saber
 * @Date: 2021-11-05 10:03:26
 * @LastEditTime: 2021-11-08 17:43:45
 * @LastEditors: saber
 * @Description: 
-->

<script setup lang="ts">
import SbaerProTable from "@digitforce/pro-table";
import SbaerQueryHeader from "@digitforce/query-header";
import SbaerQueryTable from "@digitforce/query-table";
import { reactive, ref, watch } from "vue";
import { useQueryTable } from './useQueryTable'
import SearchForm  from '../../../packages/query-header/src/SearchForm'

const querytableRef = ref(null);
const queryData = reactive({
  name: "123",
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
  console.log("====requestDatarequestData", query);
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
// TODO: 目前先这样 后续修改成通过传递ref的方式
const { onSubmit, onReset, params, formRef} = useQueryTable(queryData)
const formRef1 = ref()
const onS = () => {
  console.log('????/', formRef1.value.formRef)
}
console.log('SearchForm', SearchForm)
</script>
<template>
  <div>
    <SbaerQueryHeader ref="formRef1" @submit="onS" @reset="onReset" :model="queryData">
      <ElFormItem label="name" prop='name'>
        <ElInput v-model="queryData.name"></ElInput>
      </ElFormItem>
      <ElFormItem label="name1" prop='name'>
        <ElInput v-model="queryData.name"></ElInput>
      </ElFormItem>
      <ElFormItem label="name1" prop='name'>
        <ElInput v-model="queryData.name"></ElInput>
      </ElFormItem>
    </SbaerQueryHeader>
    <SbaerQueryTable ref="querytableRef" :columns="columns" :request="requestData" :params="params.params"></SbaerQueryTable>
  </div>
</template>
