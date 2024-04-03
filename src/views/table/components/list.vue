<template>
  <el-row>
    <el-col
      style="margin-bottom: 20px"
      :span="6"
      v-for="(item, index) in Data"
      :key="index"
      :xs="24"
      :sm="12"
      :md="12"
      :lg="8"
      :xl="6"
    >
      <el-card style="width: 334px; height: 105px">
        <div style="display: flex">
          <div
            style="
              padding-right: 10px;
              display: flex;
              align-items: center;
              flex: 1;
            "
          >
            <img
              src="../../../assets/image.jpg"
              alt=""
              style="width: 65px; height: auto"
            />
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              text-align: left;
              flex: 3;
            "
          >
            <div>
              <span style="font-size: 18px; color: #000">{{
                item.prjName
              }}</span>
            </div>
            <div style="font-size: 14px; color: #909399">
              <span>项目经理：{{ item.prjManager }}</span>
            </div>
            <div style="font-size: 14px; color: #909399">
              <span>立项日期：{{ item.prjManager }}</span>
            </div>
            <div
              v-if="
                item.taskCount !== null ||
                item.taskDoneCount !== null ||
                item.taskDoingCount !== null
              "
              style="font-size: 14px; color: #909399"
            >
              <span>任务：{{ item.taskCount }}</span
              >&nbsp; <span>完成：{{ item.taskDoneCount }}</span
              >&nbsp;
              <span>进行：{{ item.taskDoingCount }}</span>
            </div>
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: right;
            "
          >
            <div style="font-size: 14px">
              <div
                v-if="item.projectStatus === 'approving'"
                style="display: flex; align-items: center"
              >
                <div class="circle"></div>
                审批中
              </div>
              <div style="display: flex; align-items: center" v-else>
                <div class="circles"></div>
                进行中
              </div>
            </div>
            <div style="display: flex; justify-content: right">
              <el-icon><Star color="yellow" /></el-icon>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup>
import Data from "../data.json";
</script>
<style scoped>
::v-deep .el-card__body {
  padding: 10px;
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
  background-color: #198ffc;
  border-radius: 50%;
}
</style>
