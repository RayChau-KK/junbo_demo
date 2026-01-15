#!/bin/bash

# Super PM 快速启动脚本
# 用于一键启动开发环境

set -e

echo "🚀 Starting Super PM Development Environment..."
echo ""

# 检查 Docker 是否运行
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    exit 1
fi

# 启动数据库
echo "📦 Starting database..."
docker-compose up -d postgres

# 等待数据库就绪
echo "⏳ Waiting for database to be ready..."
sleep 5

# 检查后端依赖
if [ ! -d "backend/node_modules" ]; then
    echo "📥 Installing backend dependencies..."
    cd backend && pnpm install && cd ..
fi

# 检查前端依赖
if [ ! -d "frontend/node_modules" ]; then
    echo "📥 Installing frontend dependencies..."
    cd frontend && pnpm install && cd ..
fi

# 生成 Prisma Client
echo "🔨 Generating Prisma Client..."
cd backend && pnpm prisma generate

# 运行数据库迁移
echo "🗄️ Running database migrations..."
pnpm prisma migrate dev

cd ..

echo ""
echo "✅ Environment setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Open a new terminal and run: cd backend && pnpm run dev"
echo "   2. Open another terminal and run: cd frontend && pnpm run dev"
echo "   3. Visit http://localhost:3000 in your browser"
echo ""
echo "💡 Tip: Configure your ANTHROPIC_API_KEY in backend/.env"
echo ""
