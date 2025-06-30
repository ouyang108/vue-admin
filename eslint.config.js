import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig, globalIgnores } from "eslint/config";
// import autoImportConfig from "./.eslintrc-auto-import.json";

export default defineConfig([
  globalIgnores([".history/"]),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // ...autoImportConfig,
      },
    },
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    ignores: ["dist/**", "node_modules/**", "**/*.d.ts", ".history/**"],
  },
  {
    rules: {
      // 不允许使用var
      "no-var": "error",
      // 未使用的变量
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_", // 忽略以下划线开头的未使用变量
        },
      ],
      // 常量必须const
      "prefer-const": "error",
      // 必须每一行末尾有分号
      semi: ["error", "always"],
      // 圈复杂度
      complexity: ["error", 15],
      "no-undef": "off", //由于eslint无法识别.d.ts声明文件中定义的变量，暂时关闭
      // 允许使用any
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off", // 在生产环境中禁止使用 console

      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // 在生产环境中禁止使用 debugger
      // 限制换行必须是LF
      "linebreak-style": ["error", "unix"],

      "vue/multi-word-component-names": "off", // 关闭组件名称必须是多词的规则
      // 属性顺序
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION", // `is` 和 `v-is`
            "LIST_RENDERING", // 列表渲染
            "CONDITIONALS", // 条件渲染
            "RENDER_MODIFIERS", // 渲染修饰符
            "GLOBAL", // 全局属性
            "UNIQUE", // 唯一属性
            "TWO_WAY_BINDING", // 双向绑定
            "OTHER_DIRECTIVES", // 其他指令
            "OTHER_ATTR", // 其他属性
            "EVENTS", // 事件
            "CONTENT", // 内容
          ],
        },
      ],
    },
  },
]);
