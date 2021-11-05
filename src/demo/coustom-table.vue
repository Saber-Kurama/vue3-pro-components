<!--
 * @Author: saber
 * @Date: 2021-11-04 14:43:09
 * @LastEditTime: 2021-11-05 12:07:26
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
    render: { 
        default: () => h('div', '----xxxxqqqqasdasd'),
        xxxx: () => h('div', '----xxxxqqqqasdasdxxxxxx') 
      }
  },
  {
    label: '日期',
    prop: 'date',

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
  total: 10,
}
</script>
<template>
  <div>
    <SaberTable :columns="columns" :data="tableData" :pagination="pagination">
    </SaberTable>
  </div>
</template>