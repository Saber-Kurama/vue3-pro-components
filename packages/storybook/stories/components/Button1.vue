<!--
 * @Author: saber
 * @Date: 2021-12-22 20:38:08
 * @LastEditTime: 2021-12-22 21:43:43
 * @LastEditors: saber
 * @Description: 
-->
<script setup lang="ts">
  import { ref } from 'vue';
  let name = ref('saber');
</script>
<template>
  <div class="saber">这是一个buttonn {{ name }}</div>
</template>
<style lang="scss">
  .saber{
    color: red;
  }
</style>