const path = require("path")
const CracoLessPlugin = require('craco-less');

// 生成绝对路径
const resolve = (pathName) => path.resolve(__dirname, pathName)

module.exports = {
  // less 配置
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  // webpcak 配置
  webpack: {
    alias: {
      // 使用绝对路径
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("scr/utils"),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}