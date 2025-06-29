<template>
  <div class="menu">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in menuData" :key="item.id">
        <RecursiveMenuItem :item="item" />
      </template>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import RecursiveMenuItem from "./RecursiveMenuItem.vue";

// 菜单数据类型定义
interface MenuItem {
  id: string;
  title: string;
  icon?: string;
  path?: string;
  disabled?: boolean;
  children?: MenuItem[];
}

// 菜单数据
const menuData = ref<MenuItem[]>([
  {
    id: "1",
    title: "系统管理",
    icon: "Setting",
    children: [
      {
        id: "1-1",
        title: "用户管理",
        path: "/user",
        children: [
          {
            id: "1-1-1",
            title: "用户列表",
            path: "/user/list",
          },
          {
            id: "1-1-2",
            title: "添加用户",
            path: "/user/add",
          },
        ],
      },
      {
        id: "1-2",
        title: "角色管理",
        path: "/role",
      },
      {
        id: "1-3",
        title: "权限管理",
        path: "/permission",
        children: [
          {
            id: "1-3-1",
            title: "菜单权限",
            path: "/permission/menu",
          },
          {
            id: "1-3-2",
            title: "按钮权限",
            path: "/permission/button",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "内容管理",
    icon: "Document",
    children: [
      {
        id: "2-1",
        title: "文章管理",
        path: "/article",
      },
      {
        id: "2-2",
        title: "分类管理",
        path: "/category",
      },
    ],
  },
  {
    id: "3",
    title: "数据统计",
    icon: "DataAnalysis",
    path: "/statistics",
  },
  {
    id: "4",
    title: "系统设置",
    icon: "Tools",
    disabled: true,
  },
  {
    id: "3",
    title: "数据统计",
    icon: "DataAnalysis",
    path: "/statistics",
  },
  {
    id: "4",
    title: "系统设置",
    icon: "Tools",
    disabled: true,
  },
  {
    id: "3",
    title: "数据统计",
    icon: "DataAnalysis",
    path: "/statistics",
  },
  {
    id: "4",
    title: "系统设置",
    icon: "Tools",
    disabled: true,
  },
  {
    id: "3",
    title: "数据统计",
    icon: "DataAnalysis",
    path: "/statistics",
  },
  {
    id: "4",
    title: "系统设置",
    icon: "Tools",
    disabled: true,
  },
  {
    id: "3",
    title: "数据统计",
    icon: "DataAnalysis",
    path: "/statistics",
  },
  {
    id: "4",
    title: "系统设置",
    icon: "Tools",
    disabled: true,
  },
  {
    id: "3",
    title: "数据统计",
    icon: "DataAnalysis",
    path: "/statistics",
  },
  {
    id: "4",
    title: "系统设置",
    icon: "Tools",
    disabled: true,
  },
]);

// 当前激活的菜单项
const defaultActive = ref("1-1-1");

// 处理菜单打开事件
const handleOpen = (key: string, keyPath: string[]) => {
  console.log("菜单打开:", key, keyPath);
};

// 处理菜单关闭事件
const handleClose = (key: string, keyPath: string[]) => {
  console.log("菜单关闭:", key, keyPath);
};

defineOptions({
  name: "MenuIndex",
});
</script>

<style lang="scss" scoped>
.menu {
  @include Height(100%);
}
ul {
  @include Height(100%);
}
</style>
