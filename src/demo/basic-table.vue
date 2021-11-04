<!--
 * @Author: saber
 * @Date: 2021-11-04 14:09:38
 * @LastEditTime: 2021-11-04 22:06:15
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts" setup>
import { h } from "vue";
import SaberTable from "../../packages/table/src";
import SaberPagination from "../../packages/pagination/src";
import SaberQueryTable from "../../packages/query-table/src";
import Table1 from "./table1";
const columns = [
  {
    label: "名称",
    prop: "name",
    render: () => {
      return h("div", "sss222");
    },
  },
  {
    label: "日期",
    prop: "date",
  },
];
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const pagination = {
  total: 10,
};
const requestData = async () => {
  console.log("requestDatarequestData");
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
</script>
<template>
  <div>
    <ElPagination layout="prev, pager, next" :total="1000"></ElPagination>
    <SaberPagination layout="prev, pager, next" :total="1000" />
    <SaberQueryTable :request="requestData" />
  </div>
</template>
