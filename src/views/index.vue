<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"> <MenuIndex></MenuIndex> </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
:deep(.el-container) {
  height: 100%;
}
</style>
