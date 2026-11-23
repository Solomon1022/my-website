# 贡献指南

感谢你对 Bulby English 的兴趣。

## 项目定位

这是一个纯黑白漫画风的英语学习网站：原生 HTML / CSS / JavaScript 前端，AI 能力通过 Vercel Serverless 代理调用 DeepSeek API，聊天与生词本数据全部存于浏览器本地。

## 开发流程

```bash
# 1. 克隆
git clone https://github.com/Solomon1022/my-website.git
cd my-website

# 2. 用 Live Server 打开 index.html，或直接用浏览器打开
```

本地调试 AI 对话时，需自行创建 `local-proxy.js`（已被 git 忽略）并填入你的 DeepSeek key：

```bash
node local-proxy.js
# 然后把 learn.html 中的 fetch 地址临时指向 http://localhost:3000/api/deepseek-proxy
# 提交前记得改回 /api/deepseek-proxy
```

## 代码约定

- 保持原生 HTML / CSS / JS，不引入构建工具或框架。
- 保持黑白漫画的视觉风格统一。
- **任何 API key 一律不得写入仓库**：生产环境从 Vercel 环境变量 `DEEPSEEK_API_KEY` 读取；本地开发放入 git 忽略的 `local-proxy.js`。
- 新增角色美术请放入 `images/`，并保持原创（不引入有版权的第三方素材）。

## 提交信息

使用清晰的中文或英文动词开头，如「新增 生词本导出」「修复 移动端聊天输入框遮挡」。
