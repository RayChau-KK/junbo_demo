# Super PM - AI 产品经理智能助手

## 📖 项目简介

Super PM 是一个 AI 驱动的产品经理工作台，帮助产品经理高效管理工作资料，并通过 AI 辅助完成产品架构设计、业务流程分析、需求文档编写和产品原型设计。

## ✨ 核心功能

- 📚 **知识库管理** - 集中管理工作资料、产品文档
- 🏗️ **产品架构设计** - AI 辅助生成和可视化产品架构
- 🔄 **业务流程图** - 智能分析和绘制业务流程
- 📝 **需求文档生成** - 自动化 PRD 编写和模板管理
- 🎨 **原型设计** - 低保真原型绘制和导出
- 🤖 **AI 智能助手** - 基于 Claude 的智能问答和内容生成

## 🛠️ 技术栈

### 前端
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- React Flow (流程图)
- Monaco Editor (文档编辑)

### 后端
- Node.js + NestJS
- PostgreSQL + Prisma ORM
- Claude API (AI 能力)

### 开发工具
- Docker & Docker Compose
- pnpm (包管理器)

## 📁 项目结构

```
super-pm/
├── frontend/          # Next.js 前端应用
├── backend/           # NestJS 后端服务
├── docs/             # 项目文档
├── docker-compose.yml # Docker 编排配置
└── README.md         # 项目说明
```

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+
- Docker & Docker Compose (可选)
- PostgreSQL 14+ (或使用 Docker)

### 安装步骤

1. **克隆项目**
```bash
cd super-pm
```

2. **启动数据库** (使用 Docker)
```bash
docker-compose up -d postgres
```

3. **安装依赖并启动后端**
```bash
cd backend
pnpm install
pnpm run dev
```

4. **安装依赖并启动前端**
```bash
cd frontend
pnpm install
pnpm run dev
```

5. **访问应用**
- 前端: http://localhost:3000
- 后端 API: http://localhost:4000

## 📝 开发计划

- [x] 项目初始化
- [ ] 前端基础框架搭建
- [ ] 后端 API 服务搭建
- [ ] 数据库设计和迁移
- [ ] 知识库管理功能
- [ ] AI 能力集成
- [ ] 流程图和原型设计功能

## 🔧 配置说明

项目配置文件将在 `backend/.env` 中设置：

```env
# 数据库配置
DATABASE_URL="postgresql://user:password@localhost:5432/superpm"

# AI 配置
ANTHROPIC_API_KEY="your_api_key_here"

# 服务端口
PORT=4000
```

## 📖 使用文档

详细使用文档请查看 [docs](./docs) 目录。

## 🤝 贡献指南

本项目主要用于个人产品管理工作，暂不接受外部贡献。

## 📄 许可证

MIT License

---

**Note**: 本项目由 Claude Code 辅助开发
