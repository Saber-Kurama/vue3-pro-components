<!--
 * @Author: saber
 * @Date: 2021-11-04 14:43:09
 * @LastEditTime: 2021-11-04 15:48:52
 * @LastEditors: saber
 * @Description: 
-->
<script lang="ts" setup>
import SaberTable from "../../packages/table/src/table";
const columns = [
  {
    label: '名称',
    prop: 'name',
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
</script>
<template>
  <div>
    <SaberTable :columns="columns" :data="tableData" >
      <!-- <template #columns>
        <el-table-column label="名称" prop="name"></el-table-column>       
      </template> -->
      <!-- <template #name>
        <div>sss???</div>
      </template> -->
    </SaberTable>
  </div>
</template>