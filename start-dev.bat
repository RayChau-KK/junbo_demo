@echo off
REM Super PM 快速启动脚本 (Windows)
REM 用于一键启动开发环境

echo.
echo 🚀 Starting Super PM Development Environment...
echo.

REM 检查 Docker 是否运行
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not running. Please start Docker Desktop first.
    pause
    exit /b 1
)

REM 启动数据库
echo 📦 Starting database...
docker-compose up -d postgres

REM 等待数据库就绪
echo ⏳ Waiting for database to be ready...
timeout /t 5 /nobreak >nul

REM 检查后端依赖
if not exist "backend\node_modules" (
    echo 📥 Installing backend dependencies...
    cd backend
    call pnpm install
    cd ..
)

REM 检查前端依赖
if not exist "frontend\node_modules" (
    echo 📥 Installing frontend dependencies...
    cd frontend
    call pnpm install
    cd ..
)

REM 生成 Prisma Client
echo 🔨 Generating Prisma Client...
cd backend
call pnpm prisma generate

REM 运行数据库迁移
echo 🗄️ Running database migrations...
call pnpm prisma migrate dev

cd ..

echo.
echo ✅ Environment setup complete!
echo.
echo 📝 Next steps:
echo    1. Open a new terminal and run: cd backend ^&^& pnpm run dev
echo    2. Open another terminal and run: cd frontend ^&^& pnpm run dev
echo    3. Visit http://localhost:3000 in your browser
echo.
echo 💡 Tip: Configure your ANTHROPIC_API_KEY in backend\.env
echo.

pause
