<script setup lang="ts">
    const fetchUlr = () => {
        console.log('调用接口')
    }
    const fenye = () => {
        console.log('调用了一个分页')
        // 调用查询接口
    }
    // props传递过来是查询 一些值
    // 这里 params 和 query
    const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ];
      // ref 的方法 
      // 重新刷新
      // 同样 也可以用 分页 和 table 一起做 用 hook 的方式
      // 1. 分页的方法会触发 请求(请求参数 会带上 params 和 query )
      // 问题是query 是怎么来的。 一个是 props 传递过来 ？
</script>

<template>
    <div>
        <el-table :data="tableData">
            <slot name="table"></slot>
        </el-table>
        <el-button @click="fenye">假设是分页</el-button>
    </div>
</template>