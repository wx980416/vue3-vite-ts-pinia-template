<template>
  <div class="container1">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="5" :xl="5">
        <div class="box"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="box"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="7" :xl="7">
        <div class="box"></div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="5" :xl="5">
        <div class="box"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="box"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="7" :xl="7">
        <div class="box"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container1 {
  width: 100%;
  background-color: #f8f8f8;

  .box {
    height: 335px;
    border: 1px solid #333333;
    margin-top: 10px;
  }
}
</style>
