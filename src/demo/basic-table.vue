<!--
 * @Author: saber
 * @Date: 2021-11-04 14:09:38
 * @LastEditTime: 2021-11-04 15:49:28
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts" setup>
import { h } from "vue";
import SaberTable from "../../packages/table/src/table";
const columns = [
  {
    label: '名称',
    prop: 'name',
    render: () => {
      return h('div', 'sss222')
    }
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
