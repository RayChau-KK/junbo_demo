# Super PM - 项目概览

## 🎯 项目简介

Super PM 是一款 AI 驱动的产品经理智能工作台，帮助产品经理高效管理工作资料，通过 AI 辅助完成产品架构设计、业务流程分析、需求文档编写和产品原型设计。

## 📊 项目状态

- **当前版本**: v1.0.0-alpha
- **开发阶段**: MVP 搭建中
- **最后更新**: 2026-01-15

## 🏗️ 技术架构

### 前端
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + shadcn/ui
- **编辑器**: Monaco Editor
- **流程图**: React Flow

### 后端
- **框架**: NestJS
- **语言**: TypeScript
- **ORM**: Prisma
- **数据库**: PostgreSQL 15
- **API 风格**: RESTful

### AI 能力
- **服务商**: Anthropic Claude
- **能力**: 文档生成、需求分析、智能问答

## 📁 项目结构

```
super-pm/
├── frontend/              # Next.js 前端应用
│   ├── src/
│   │   ├── app/          # App Router 页面
│   │   ├── components/   # React 组件
│   │   ├── lib/          # 工具库
│   │   └── styles/       # 样式文件
│   └── public/           # 静态资源
│
├── backend/              # NestJS 后端服务
│   ├── src/
│   │   ├── modules/      # 功能模块
│   │   ├── common/       # 公共模块
│   │   ├── config/       # 配置
│   │   ├── app.module.ts # 根模块
│   │   └── main.ts       # 入口文件
│   ├── prisma/           # 数据库 Schema
│   │   └── schema.prisma # Prisma 模型定义
│   └── uploads/          # 文件上传目录
│
├── docs/                 # 项目文档
│   ├── PRODUCT_DESIGN.md       # 产品设计文档
│   ├── DEVELOPMENT_GUIDE.md    # 开发指南
│   └── USER_GUIDE.md           # 用户手册
│
├── docker-compose.yml    # Docker 编排配置
├── .gitignore           # Git 忽略文件
└── README.md            # 项目说明
```

## ✨ 核心功能

### 已完成
- [x] 项目初始化和基础架构
- [x] 数据库模型设计（Prisma Schema）
- [x] Docker 开发环境配置
- [x] 项目文档编写

### 开发中
- [ ] 用户认证和授权
- [ ] 项目管理功能
- [ ] 文档编辑器集成
- [ ] AI 对话基础能力

### 计划中
- [ ] AI 生成 PRD
- [ ] 业务流程图绘制
- [ ] 低保真原型设计
- [ ] 多人协作功能

## 🎨 数据模型

### 核心实体关系

```
User (用户)
  ↓ 1:N
Project (项目)
  ↓ 1:N
├── Document (文档)
├── Requirement (需求)
└── Architecture (架构)
```

### 实体说明

1. **User** - 用户
   - 基本信息：邮箱、姓名、头像
   - 角色：管理员/普通用户

2. **Project** - 项目
   - 项目信息：名称、描述、状态
   - 状态：规划中/进行中/已完成/已归档

3. **Document** - 文档
   - 类型：笔记/PRD/架构/流程
   - 内容：Markdown 格式
   - 标签：支持多标签

4. **Requirement** - 需求
   - 优先级：低/中/高/紧急
   - 状态：草稿/评审中/已批准/已实现/已拒绝

5. **Architecture** - 架构
   - 类型：系统架构/业务架构/数据架构/技术架构
   - 图表：JSON 或 Mermaid 格式

## 🚀 快速开始

### 环境要求
- Node.js 18+
- pnpm 8+
- Docker Desktop
- PostgreSQL 14+ (可选)

### 启动步骤

1. **启动数据库**
```bash
docker-compose up -d
```

2. **配置后端**
```bash
cd backend
pnpm install
cp .env.example .env
# 编辑 .env 配置 ANTHROPIC_API_KEY
pnpm prisma generate
pnpm prisma migrate dev
pnpm run dev
```

3. **配置前端**
```bash
cd frontend
pnpm install
pnpm run dev
```

4. **访问应用**
- 前端: http://localhost:3000
- 后端: http://localhost:4000/api

## 📚 文档资源

- [产品设计文档](./docs/PRODUCT_DESIGN.md) - 了解产品定位、功能规划和业务流程
- [开发指南](./docs/DEVELOPMENT_GUIDE.md) - 开发环境配置和 API 规范
- [用户手册](./docs/USER_GUIDE.md) - 功能使用说明和最佳实践

## 🛣️ 开发路线图

### Phase 1: MVP 核心功能 (当前)
- 用户认证
- 项目和文档管理
- AI 基础对话
- 需求管理

### Phase 2: AI 深度集成
- AI 生成 PRD
- 需求智能分析
- 知识库 RAG
- 上下文优化

### Phase 3: 可视化增强
- 业务流程图
- 产品架构图
- 低保真原型
- 多格式导出

### Phase 4: 协作与分享
- 多人协作
- 权限管理
- 版本历史
- 分享和评论

## 🔐 环境配置

### 后端环境变量 (.env)

```env
# 数据库
DATABASE_URL="postgresql://superpm:superpm123@localhost:5432/superpm"

# 服务配置
PORT=4000
NODE_ENV=development

# 前端地址
FRONTEND_URL=http://localhost:3000

# AI 配置 (需要申请 Anthropic API Key)
ANTHROPIC_API_KEY=

# JWT 密钥
JWT_SECRET=your-secret-key

# 文件上传
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760
```

## 🤝 参与开发

本项目主要用于个人产品管理工作。如需定制开发，请 Fork 项目。

## 📝 许可证

MIT License

## 👨‍💻 关于作者

本项目由产品经理使用 Claude Code 辅助开发，旨在通过 AI 提升产品管理工作效率。

---

**最后更新**: 2026-01-15
**项目状态**: 🚧 开发中
