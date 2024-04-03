<template>
  <el-table
    :data="Data"
    stripe
    style="width: 100%; border: 1px solid #eff2f8; border-radius: 5px"
  >
    <el-table-column label="所属品类" width="180">
      <template v-slot="{ row }">
        <el-icon><Star color="yellow" /></el-icon>
        <span style="margin-left: 10px">{{ row.productCategory }}</span>
      </template>
    </el-table-column>
    <el-table-column label="项目类别" prop="prjCategory" />
    <el-table-column label="项目编号" prop="Address" width="150" />
    <el-table-column label="项目名称" prop="prjName" width="150" />
    <el-table-column label="项目状态" prop="Date" width="180">
      <template v-slot="{ row }">
        <div
          v-if="row.projectStatus === 'approving'"
          style="display: flex; align-items: center"
        >
          <div class="circle"></div>
          审批中
        </div>
        <div v-else style="display: flex; align-items: center">
          <div class="circles"></div>
          进行中
        </div>
      </template>
    </el-table-column>
    <el-table-column label="项目经理" prop="prjManager" width="180" />
    <el-table-column label="所属部门" prop="department" width="150" />
    <el-table-column label="项目计划时间" prop="Address">
      <template v-slot="{ row }">
        <span>{{ row.prjStartDate }}</span>
        ~
        <span>{{ row.prjEndDate }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup>
import Data from "../data.json";
</script>
<style scoped>
::v-deep .el-table {
  border: 1px solid var(--el-table-text-color);
}
.circle {
  width: 8px;
  height: 8px;
  background-color: #d1412a;
  border-radius: 50%;
}
.circles {
  width: 8px;
  height: 8px;
  background-color: #5e9bd6;
  border-radius: 50%;
}
</style>
