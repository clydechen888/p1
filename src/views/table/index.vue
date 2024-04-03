<template>
  <div style="display: flex; justify-content: right; margin-bottom: 20px">
    <el-radio-group v-model="radio">
      <el-radio-button label="卡片" value="card" />
      <el-radio-button label="列表" value="list" />
    </el-radio-group>
  </div>
  <Table v-if="radio === 'list'" />
  <List v-else />
</template>

<script setup>
import Table from "./components/table.vue";
import List from "./components/list.vue";
import { ref } from "vue";
const radio = ref("card");
</script>
<style scoped>
::v-deep .el-radio-button__original-radio:checked + .el-radio-button__inner {
  background-color: #ffffff;
  color: var(--el-color-primary);
}
</style>
