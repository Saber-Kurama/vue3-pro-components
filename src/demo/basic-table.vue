<!--
 * @Author: saber
 * @Date: 2021-11-04 14:09:38
 * @LastEditTime: 2021-11-04 20:48:50
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts" setup>
import { h } from "vue";
import SaberTable from "../../packages/table/src";
import SaberPagination from "../../packages/pagination/src";
import Table1 from './table1';
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
const pagination = {
  total: 10
}
</script>
<template>
  <div>
    <Table1 />
    <SaberPagination layout="prev, pager, next" :total="1000" />
    <SaberTable :columns="columns" :data="tableData" :pagination="pagination"></SaberTable>
  </div>
</template>
