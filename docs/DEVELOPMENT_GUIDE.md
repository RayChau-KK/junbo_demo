# Super PM 开发指南

## 环境准备

### 必需软件
- Node.js 18+ (推荐使用 LTS 版本)
- pnpm 8+ (快速的包管理器)
- Git
- Docker Desktop (Windows/Mac) 或 Docker + Docker Compose (Linux)
- PostgreSQL 14+ (可选，可使用 Docker)

### 推荐工具
- VS Code (推荐编辑器)
- DBeaver 或 TablePlus (数据库管理工具)
- Postman 或 Insomnia (API 测试工具)

## 快速开始

### 1. 安装 pnpm

```bash
# Windows (PowerShell)
iwr https://get.pnpm.io/install.ps1 -useb | iex

# macOS/Linux
curl -fsSL https://get.pnpm.io/install.sh | sh -

# 或使用 npm 安装
npm install -g pnpm
```

### 2. 启动数据库

使用 Docker Compose 一键启动数据库：

```bash
# 在项目根目录执行
docker-compose up -d

# 查看容器状态
docker-compose ps

# 查看日志
docker-compose logs -f postgres
```

如果不使用 Docker，请自行安装 PostgreSQL 并创建数据库：

```sql
CREATE DATABASE superpm;
CREATE USER superpm WITH PASSWORD 'superpm123';
GRANT ALL PRIVILEGES ON DATABASE superpm TO superpm;
```

### 3. 配置后端

```bash
# 进入后端目录
cd backend

# 复制环境变量文件
cp .env.example .env

# 编辑 .env 文件，配置 ANTHROPIC_API_KEY
# ANTHROPIC_API_KEY=sk-ant-xxxxx

# 安装依赖
pnpm install

# 生成 Prisma Client
pnpm prisma generate

# 执行数据库迁移
pnpm prisma migrate dev --name init

# 启动开发服务器
pnpm run dev
```

后端服务将运行在 `http://localhost:4000`

### 4. 配置前端

```bash
# 打开新终端，进入前端目录
cd frontend

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev
```

前端服务将运行在 `http://localhost:3000`

### 5. 访问应用

- 前端界面: http://localhost:3000
- 后端 API: http://localhost:4000/api
- 数据库: localhost:5432

## 开发工作流

### 数据库相关

```bash
# 查看数据库表
pnpm prisma studio

# 创建新的迁移
pnpm prisma migrate dev --name <migration_name>

# 重置数据库
pnpm prisma migrate reset

# 生成 Prisma Client
pnpm prisma generate
```

### 后端开发

```bash
# 开发模式（热重载）
pnpm run dev

# 构建生产版本
pnpm run build

# 运行生产版本
pnpm run start:prod

# 代码格式化
pnpm run lint
```

### 前端开发

```bash
# 开发模式
pnpm run dev

# 构建生产版本
pnpm run build

# 运行生产版本
pnpm run start

# 代码检查
pnpm run lint
```

## 项目结构详解

### 后端结构

```
backend/
├── src/
│   ├── modules/          # 功能模块
│   │   ├── auth/         # 认证模块
│   │   ├── users/        # 用户模块
│   │   ├── projects/     # 项目模块
│   │   ├── documents/    # 文档模块
│   │   └── ai/           # AI 服务模块
│   ├── common/           # 公共模块
│   │   ├── prisma.service.ts
│   │   ├── guards/       # 守卫
│   │   └── decorators/   # 装饰器
│   ├── config/           # 配置
│   ├── app.module.ts     # 根模块
│   └── main.ts           # 入口文件
├── prisma/
│   └── schema.prisma     # 数据库模型
├── uploads/              # 文件上传目录
└── dist/                 # 构建输出
```

### 前端结构

```
frontend/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (auth)/       # 认证相关页面
│   │   ├── (dashboard)/  # 主工作台页面
│   │   ├── layout.tsx    # 根布局
│   │   └── page.tsx      # 首页
│   ├── components/       # 组件
│   │   ├── ui/           # UI 组件（shadcn/ui）
│   │   ├── editor/       # 编辑器组件
│   │   ├── flow/         # 流程图组件
│   │   └── layout/       # 布局组件
│   ├── lib/              # 工具库
│   │   ├── api.ts        # API 请求
│   │   ├── utils.ts      # 工具函数
│   │   └── ai.ts         # AI 相关
│   ├── hooks/            # React Hooks
│   ├── types/            # TypeScript 类型
│   └── styles/           # 样式文件
└── public/               # 静态资源
```

## API 开发规范

### RESTful API 设计

```
GET     /api/projects          # 获取项目列表
POST    /api/projects          # 创建项目
GET     /api/projects/:id      # 获取项目详情
PATCH   /api/projects/:id      # 更新项目
DELETE  /api/projects/:id      # 删除项目

GET     /api/documents         # 获取文档列表
POST    /api/documents         # 创建文档
GET     /api/documents/:id     # 获取文档详情
PATCH   /api/documents/:id     # 更新文档
DELETE  /api/documents/:id     # 删除文档
```

### 响应格式

成功响应：
```json
{
  "success": true,
  "data": { ... },
  "message": "操作成功"
}
```

错误响应：
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "参数验证失败",
    "details": [ ... ]
  }
}
```

## 常见问题

### Q: 数据库连接失败
A:
1. 确认 Docker 容器正在运行：`docker-compose ps`
2. 检查 `.env` 中的 `DATABASE_URL` 配置
3. 确认端口 5432 没有被占用

### Q: Prisma 迁移失败
A:
1. 尝试重置数据库：`pnpm prisma migrate reset`
2. 重新生成客户端：`pnpm prisma generate`
3. 执行迁移：`pnpm prisma migrate dev`

### Q: 前端无法连接后端
A:
1. 确认后端服务正在运行
2. 检查端口配置（前端 3000，后端 4000）
3. 检查 CORS 配置

### Q: AI 功能不可用
A:
1. 确认已配置有效的 `ANTHROPIC_API_KEY`
2. 检查 API Key 是否有余额
3. 查看后端日志排查错误

## 部署指南

### 本地部署

已通过开发模式运行，适合个人使用。

### Docker 部署

```bash
# 构建镜像
docker-compose build

# 启动所有服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

### 生产部署建议

1. **前端**: 部署到 Vercel 或 Netlify
2. **后端**: 部署到云服务器（阿里云、腾讯云）
3. **数据库**: 使用云数据库服务（RDS）
4. **文件存储**: 使用对象存储（OSS、S3）

## 贡献指南

本项目主要用于个人产品管理工作，如需定制开发请 Fork 项目。

## 获取帮助

- 查看项目文档：`docs/` 目录
- 查看 API 文档：启动后端后访问 `/api/docs`
- 问题反馈：通过 GitHub Issues

---

**文档版本**: v1.0
**更新日期**: 2026-01-15
