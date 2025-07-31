import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { fileURLToPath } from "url";
import path from "path";

// 当前模块文件的绝对路径
const __filename = fileURLToPath(import.meta.url);
// 当前模块目录路径，相当于 CommonJS 的 __dirname
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@gosh/components": path.join(
        __dirname,
        "../../gosh-libs/components/src"
      ),
      "@gosh/icons": path.join(__dirname, "../../gosh-libs/icons/src"),
      "@gosh/utils": path.join(__dirname, "../../gosh-libs/utils/src"),
    },
  },
});
