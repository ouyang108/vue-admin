<template>
  <div>
    <!-- 如果有子菜单，渲染为子菜单 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 0"
      :index="item.id"
    >
      <template #title>
        <el-icon v-if="item.icon">
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.title }}</span>
      </template>
      <!-- 递归渲染子菜单 -->
      <template v-for="child in item.children" :key="child.id">
        <RecursiveMenuItem :item="child" />
      </template>
    </el-sub-menu>

    <!-- 如果没有子菜单，渲染为普通菜单项 -->
    <el-menu-item
      v-else
      :index="item.id"
      :disabled="item.disabled"
      @click="handleClick"
    >
      <el-icon v-if="item.icon">
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
// 菜单项数据类型定义
interface MenuItem {
  id: string;
  title: string;
  icon?: string;
  path?: string;
  disabled?: boolean;
  children?: MenuItem[];
}

// 定义props
interface Props {
  item: MenuItem;
}

const props = defineProps<Props>();

// 处理菜单项点击事件
const handleClick = () => {
  if (props.item.path) {
    // 这里可以添加路由跳转逻辑
    console.log("跳转到:", props.item.path);
  }
};

defineOptions({
  name: "RecursiveMenuItem",
});
</script>

<style lang="scss" scoped>
// 可以添加自定义样式
</style>
