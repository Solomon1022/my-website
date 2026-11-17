# Bulby English · ENGLISH MANGA

**English** | [中文](#中文)

> A black-and-white manga-style English learning website — pick an original anime companion and learn through AI conversation, from elementary school all the way to GRE.

---

## English

### Overview

Bulby English is a pure black-and-white manga-style English learning web app. You choose an original anime companion with a distinct personality, then learn English by chatting with it. The AI auto-corrects your sentences, collects vocabulary, and adapts to your level — from elementary school up to GRE / IELTS / BEC.

Two learning modes are available: **Deep Learning** (structured practice) and **Entertainment-Immersive** (casual conversation). All chat history and vocabulary is stored locally in your browser, isolated per companion.

**Live Demo:** [www.sequflow.com](https://www.sequflow.com) *(served under the SequFlow main domain)*

### Key Features

- **Original Anime Companions** — multiple hand-drawn characters with unique personalities and separate chat databases
- **All-Level Exam Modes** — elementary, middle/high school, CET-4/6, IELTS, BEC, GRE
- **Dual Learning Modes** — Deep Learning / Entertainment-Immersive
- **Real-Time AI Chat** — auto-correction, keyword collection, per-companion history
- **Vocabulary Book** — click any word to collect it; manage in a dedicated panel
- **Global Companion Bulby** — a draggable, interactive mascot that follows you across pages
- **Zero-Cost Serverless Architecture** — static frontend + Vercel Serverless proxy, no dedicated backend

### Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML / CSS / JavaScript |
| UI Style | Original black-and-white manga design |
| AI | DeepSeek API (V3 chat model) |
| Backend | Vercel Serverless Functions (Node.js) |
| Deployment | GitHub + Vercel automatic deployment |
| Storage | Browser `localStorage` (isolated per companion) |

### Getting Started

```bash
# 1. Clone
git clone https://github.com/Solomon1022/my-website.git
cd my-website

# 2. (Optional) Start the local AI proxy for development
#    local-proxy.js is git-ignored — create your own and add your DeepSeek key:
#
#    node local-proxy.js
#
#    Then point the fetch address in learn.html to http://localhost:3000/api/deepseek-proxy

# 3. Open index.html with Live Server, or directly in your browser
```

For production, the frontend calls `/api/deepseek-proxy` (a Vercel Serverless Function) which reads the key from the `DEEPSEEK_API_KEY` environment variable — the key never touches the browser.

### Project Structure

```
my-website/
├── index.html          # Landing page (ENGLISH MANGA)
├── learn.html          # Main learning / chat page
├── api/
│   └── deepseek-proxy.js   # Vercel Serverless Function — server-side key
├── css/  js/  images/      # Styles, scripts, original artwork
├── Bulby.css  Bulby.js     # Global companion (draggable mascot)
├── style.css  script.js    # Landing page assets
└── local-proxy.js          # (git-ignored) local dev proxy — put your key here
```

### Data & Privacy

- No account system; no personally identifiable information is collected.
- All chat records live only in your browser's `localStorage` and can be cleared at any time.
- AI requests are forwarded through a backend proxy; no chat content is stored on the server.
- No third-party tracking, advertising, or analytics SDKs.
- All character artwork is original and protected by copyright.

### License

MIT

---

## 中文

### 项目简介

Bulby English 是一个纯黑白漫画风的英语学习网站。你可以选择一位原创动漫伙伴，通过与它对话来学习英语——AI 会自动纠正你的句子、收集生词，并根据你的水平（小学到 GRE / 雅思 / BEC）调整对话难度。

提供两种学习模式：**深度学习**（结构化练习）与**娱乐沉浸**（自由对话）。所有聊天记录与生词本都保存在浏览器本地，并按伙伴隔离存储。

**在线体验：** [www.sequflow.com](https://www.sequflow.com)（挂载在 SequFlow 主域名下）

### 核心功能

- **原创动漫伙伴**：多位手绘角色，性格各异，聊天数据库相互独立
- **全阶段考试模式**：小学、初高中、四六级、雅思、BEC、GRE
- **双学习模式**：深度学习 / 娱乐沉浸
- **实时 AI 对话**：自动纠错、关键词收集、按伙伴保存历史
- **生词本**：点击生词即收藏，专属面板统一管理
- **全局伙伴 Bulby**：可拖拽、可互动的吉祥物，跨页面陪伴
- **零成本 Serverless 架构**：纯静态前端 + Vercel Serverless 代理，无需独立后端

### 技术栈

| 层级 | 技术 |
|---|---|
| 前端 | 原生 HTML / CSS / JavaScript |
| UI 风格 | 原创黑白漫画设计 |
| AI | DeepSeek API（V3 对话模型） |
| 后端 | Vercel Serverless Functions（Node.js） |
| 部署 | GitHub + Vercel 自动部署 |
| 存储 | 浏览器 `localStorage`（按伙伴隔离） |

### 快速开始

```bash
# 1. 克隆
git clone https://github.com/Solomon1022/my-website.git
cd my-website

# 2.（可选）启动本地 AI 代理用于开发
#    local-proxy.js 已被 git 忽略，请自行创建并填入你的 DeepSeek key：
#
#    node local-proxy.js
#
#    然后把 learn.html 中的 fetch 地址改为 http://localhost:3000/api/deepseek-proxy

# 3. 用 Live Server 打开 index.html，或直接用浏览器打开
```

生产环境下，前端调用 `/api/deepseek-proxy`（Vercel Serverless Function），从环境变量 `DEEPSEEK_API_KEY` 读取密钥——key 不会暴露到浏览器。

### 目录结构

```
my-website/
├── index.html          # 落地页（ENGLISH MANGA）
├── learn.html          # 主学习 / 对话页面
├── api/
│   └── deepseek-proxy.js   # Vercel Serverless Function，服务端持有 key
├── css/  js/  images/      # 样式、脚本、原创美术资源
├── Bulby.css  Bulby.js     # 全局伙伴（可拖拽吉祥物）
├── style.css  script.js    # 落地页资源
└── local-proxy.js          # （已 git 忽略）本地开发代理，key 放这里
```

### 数据与隐私

- 不设账号系统，不收集任何个人身份信息。
- 所有 AI 对话记录仅保存在浏览器 `localStorage`，可随时清除。
- AI 请求经后端代理转发，服务器不存储聊天内容。
- 未集成第三方追踪、广告或行为分析 SDK。
- 所有角色美术均为原创手绘，受版权保护。

### License

MIT
