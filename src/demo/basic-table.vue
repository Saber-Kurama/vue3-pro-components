<!--
 * @Author: saber
 * @Date: 2021-11-04 14:09:38
 * @LastEditTime: 2021-11-04 14:42:29
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts" setup>
import SaberTable from "../../packages/table/src/table";
const columns = [
  {
    label: '名称',
    prop: 'name'
  },
  {
    label: '日期',
    prop: 'date'
  },
]
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>
<template>
  <div>
    <SaberTable :columns="columns" :data="tableData"></SaberTable>
  </div>
</template>
