import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
import viteCompression from "vite-plugin-compression";
// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue"],
        dts: "src/auto-import.d.ts",
        resolvers: [ElementPlusResolver()],
        eslintrc: {
          enabled: true, //生成eslint配置
          filepath: "./.eslintrc-auto-import.json", // 指定生成的 ESLint 配置文件路径
        },
      }),
      Components({
        dts: "src/components.d.ts",
        resolvers: [ElementPlusResolver()],
      }),
      viteCompression({
        verbose: true, // 默认即可
        disable: false, //开启压缩(不禁用)，默认即可
        deleteOriginFile: false, //删除源文件
        algorithm: "gzip", //压缩算法
        ext: ".gz", //文件类型
        threshold: 1024, // 对大于 1kb 的文件进行压缩
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: mode == "production" ? true : false,
          drop_debugger: true,
        },
      },
    },
  });
};
