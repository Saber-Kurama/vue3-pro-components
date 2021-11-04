<script setup lang="ts">
import { reactive, watch } from 'vue'
import Query from './Query.vue';
import QueryTable from './QueryTable.vue';
import SaberQueryTable from './QueryTable';

const queryData = reactive({
    name: 'saber'
})

watch(() => queryData.name, (newValues) => { console.log(newValues)})
// 这里可以使用一个 hook 将 query 和 querytable 做处理
// 这个 hook 传递了一个啥 返回一个query 方法和 一个 reset方法 param
// 响应数据
// query 组件的 查询事件 触发----> 如果有时间就调用 query ---> 触发table的查询调用
// table的数据来自 query 数据 params
</script>
<template>
 <div>
     <query @query="">
         <template #item1>
             <el-input v-model="queryData.name"></el-input>
         </template>
     </query>
     <query-table >
         <template #table>
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
         </template>
     </query-table>
     <SaberQueryTable>
         <div>-----</div>
     </SaberQueryTable>

 </div>
</template>