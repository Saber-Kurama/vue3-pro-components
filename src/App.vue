<!--
 * @Author: saber
 * @Date: 2021-11-04 11:58:43
 * @LastEditTime: 2021-11-05 12:13:59
 * @LastEditors: saber
 * @Description: 
-->
<script setup lang="ts">
import BasicTable from './demo/basic-table.vue';
import CoustomTable from './demo/coustom-table.vue';
import BasicQueryHeader from './demo/basic-query-header.vue';
import BasicProTable from './demo/pro-table/basic-pro-table.vue';
import Table1 from './demo/table1';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>

  <!-- <BasicTable></BasicTable> -->
  <!-- <CoustomTable></CoustomTable> -->
  <BasicProTable></BasicProTable>
  <!-- <Table1></Table1> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
