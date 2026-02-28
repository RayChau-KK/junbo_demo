# IPFS 部署脚本
# 使用公共 IPFS 网关上传 HTML 文件

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  IPFS 文件上传工具" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$htmlFile = "D:\Super PM\add-config-modal-static.html"

# 检查文件是否存在
if (-not (Test-Path $htmlFile)) {
    Write-Host "错误: 找不到文件 $htmlFile" -ForegroundColor Red
    exit 1
}

Write-Host "文件信息:" -ForegroundColor Yellow
$fileInfo = Get-Item $htmlFile
Write-Host "  路径: $($fileInfo.FullName)" -ForegroundColor Gray
Write-Host "  大小: $([math]::Round($fileInfo.Length / 1KB, 2)) KB" -ForegroundColor Gray
Write-Host "  修改时间: $($fileInfo.LastWriteTime)" -ForegroundColor Gray
Write-Host ""

# 在本地浏览器打开文件测试
Write-Host "正在本地浏览器中打开文件进行测试..." -ForegroundColor Green
Start-Process $htmlFile

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  IPFS 部署选项" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "由于需要 API 密钥,建议使用以下任一免费服务手动上传:" -ForegroundColor Yellow
Write-Host ""
Write-Host "方法 1: Pinata (推荐)" -ForegroundColor Green
Write-Host "  1. 访问: https://pinata.cloud/" -ForegroundColor Gray
Write-Host "  2. 注册免费账号" -ForegroundColor Gray
Write-Host "  3. 点击 'Upload' 按钮" -ForegroundColor Gray
Write-Host "  4. 选择文件: $htmlFile" -ForegroundColor Gray
Write-Host "  5. 获取 IPFS CID 和访问链接" -ForegroundColor Gray
Write-Host ""
Write-Host "方法 2: Web3.Storage (永久免费)" -ForegroundColor Green
Write-Host "  1. 访问: https://web3.storage/" -ForegroundColor Gray
Write-Host "  2. 注册账号" -ForegroundColor Gray
Write-Host "  3. 使用 Web UI 上传文件" -ForegroundColor Gray
Write-Host "  4. 获取 IPFS CID" -ForegroundColor Gray
Write-Host ""
Write-Host "方法 3: NFT.Storage" -ForegroundColor Green
Write-Host "  1. 访问: https://nft.storage/" -ForegroundColor Gray
Write-Host "  2. 注册免费账号" -ForegroundColor Gray
Write-Host "  3. 上传文件并获取 CID" -ForegroundColor Gray
Write-Host ""
Write-Host "方法 4: Filebase" -ForegroundColor Green
Write-Host "  1. 访问: https://filebase.com/" -ForegroundColor Gray
Write-Host "  2. 注册账号(5GB 免费)" -ForegroundColor Gray
Write-Host "  3. 创建 IPFS bucket" -ForegroundColor Gray
Write-Host "  4. 上传文件" -ForegroundColor Gray
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  临时分享方案" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "如果需要快速分享给他人查看,可以:" -ForegroundColor Yellow
Write-Host ""
Write-Host "方案 1: 使用 GitHub Pages (推荐)" -ForegroundColor Green
Write-Host "  将文件提交到 gh-pages 分支,自动部署到:" -ForegroundColor Gray
Write-Host "  https://[your-username].github.io/[repo-name]/add-config-modal-static.html" -ForegroundColor Gray
Write-Host ""
Write-Host "方案 2: 使用 Netlify Drop" -ForegroundColor Green
Write-Host "  1. 访问: https://app.netlify.com/drop" -ForegroundColor Gray
Write-Host "  2. 拖放 HTML 文件" -ForegroundColor Gray
Write-Host "  3. 立即获得公共访问链接" -ForegroundColor Gray
Write-Host ""
Write-Host "方案 3: 使用 Vercel" -ForegroundColor Green
Write-Host "  1. 访问: https://vercel.com/" -ForegroundColor Gray
Write-Host "  2. 部署静态文件" -ForegroundColor Gray
Write-Host "  3. 获得永久 URL" -ForegroundColor Gray
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  本地测试服务器" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "你也可以启动本地服务器进行测试:" -ForegroundColor Yellow
Write-Host ""
Write-Host "使用 Python:" -ForegroundColor Green
Write-Host '  cd "D:\Super PM"' -ForegroundColor Gray
Write-Host "  python -m http.server 8080" -ForegroundColor Gray
Write-Host "  访问: http://localhost:8080/add-config-modal-static.html" -ForegroundColor Gray
Write-Host ""
Write-Host "使用 Node.js:" -ForegroundColor Green
Write-Host '  npx http-server "D:\Super PM" -p 8080' -ForegroundColor Gray
Write-Host "  访问: http://localhost:8080/add-config-modal-static.html" -ForegroundColor Gray
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  GitHub Pages 快速部署" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# 询问是否要部署到 GitHub Pages
$deployToGH = Read-Host "是否要将文件复制到当前项目的 GitHub Pages 目录? (y/n)"

if ($deployToGH -eq 'y' -or $deployToGH -eq 'Y') {
    # 复制文件到项目根目录（gh-pages 分支会自动部署根目录下的 HTML 文件）
    $destPath = "D:\Super PM\add-config-modal-demo.html"
    Copy-Item $htmlFile $destPath -Force

    Write-Host ""
    Write-Host "文件已复制到: $destPath" -ForegroundColor Green
    Write-Host ""
    Write-Host "下一步操作:" -ForegroundColor Yellow
    Write-Host "  1. 提交文件到 git" -ForegroundColor Gray
    Write-Host "  2. 推送到 GitHub 的 gh-pages 分支" -ForegroundColor Gray
    Write-Host "  3. 访问: https://[your-username].github.io/Super-PM/add-config-modal-demo.html" -ForegroundColor Gray
    Write-Host ""

    # 询问是否自动提交
    $autoCommit = Read-Host "是否自动提交到 git? (y/n)"

    if ($autoCommit -eq 'y' -or $autoCommit -eq 'Y') {
        Write-Host ""
        Write-Host "正在提交到 git..." -ForegroundColor Green

        Set-Location "D:\Super PM"
        git add add-config-modal-demo.html
        git add add-config-modal-static.html
        git add IPFS_DEPLOYMENT_GUIDE.md
        git commit -m "feat: add static HTML demo for AddConfigModal component

- Convert React component to pure HTML/CSS/JS
- Support all three states (before, after_tail, after_link)
- Ready for IPFS/GitHub Pages deployment"

        Write-Host ""
        Write-Host "提交完成! 现在可以推送到 GitHub:" -ForegroundColor Green
        Write-Host "  git push origin gh-pages" -ForegroundColor Gray
        Write-Host ""

        # 询问是否推送
        $autoPush = Read-Host "是否立即推送到 GitHub? (y/n)"

        if ($autoPush -eq 'y' -or $autoPush -eq 'Y') {
            git push origin gh-pages
            Write-Host ""
            Write-Host "推送完成! 等待几分钟后访问:" -ForegroundColor Green
            Write-Host "  GitHub Pages URL (待确认)" -ForegroundColor Gray
        }
    }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  完成!" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "文件位置: $htmlFile" -ForegroundColor Green
Write-Host "部署指南: D:\Super PM\IPFS_DEPLOYMENT_GUIDE.md" -ForegroundColor Green
Write-Host ""
