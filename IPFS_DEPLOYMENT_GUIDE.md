# IPFS 部署指南

## 生成的静态HTML文件

已成功将 React 组件转换为纯静态 HTML 文件：
- 文件路径：`D:\Super PM\add-config-modal-static.html`
- 大小：约 20KB
- 功能：完整支持三个状态的切换和交互

## 功能特性

### ✅ 完全静态化
- 无需 React 或任何外部依赖
- 纯原生 HTML + CSS + JavaScript
- 可直接在浏览器中打开运行

### ✅ 三个状态完整实现
1. **改造前**：显示投放渠道选择 + 跳转链接输入框
2. **改造后-跳转尾量**：显示投放渠道选择 + 跳转类型选择（默认选中"跳转尾量"）
3. **改造后-跳转链接**：显示投放渠道选择 + 跳转类型选择（默认选中"跳转链接"）+ 链接输入框

### ✅ 样式完全匹配
- 弹窗宽度：440px
- 圆角、边框、颜色等完全还原原设计
- 支持 hover 效果和过渡动画
- 响应式设计，支持移动端

### ✅ 交互功能完整
- 状态切换按钮（页面顶部控制面板）
- 单选按钮动态显示/隐藏输入框
- 表单验证提示
- 确认/取消按钮

## IPFS 部署方法

### 方法一：使用 Pinata（推荐）

1. **注册账号**
   - 访问：https://pinata.cloud/
   - 免费账号提供 1GB 存储空间

2. **上传文件**
   - 登录后点击 "Upload" 按钮
   - 选择 `add-config-modal-static.html` 文件
   - 上传完成后会获得 CID（内容标识符）

3. **访问文件**
   - IPFS 网关地址：`https://gateway.pinata.cloud/ipfs/[CID]`
   - 公共网关地址：`https://ipfs.io/ipfs/[CID]`

### 方法二：使用 Web3.Storage

1. **注册账号**
   - 访问：https://web3.storage/
   - 提供永久免费存储

2. **上传文件**
   - 点击 "Upload Files"
   - 选择 HTML 文件上传
   - 获得 CID

3. **访问文件**
   - 网关地址：`https://[CID].ipfs.w3s.link/`
   - 或：`https://ipfs.io/ipfs/[CID]`

### 方法三：使用 NFT.Storage

1. **注册账号**
   - 访问：https://nft.storage/
   - 完全免费服务

2. **上传文件**
   - 使用 Web UI 上传文件
   - 获得 IPFS CID

3. **访问文件**
   - 网关地址：`https://nftstorage.link/ipfs/[CID]`

### 方法四：使用 Filebase

1. **注册账号**
   - 访问：https://filebase.com/
   - 免费账号提供 5GB 存储

2. **创建 Bucket**
   - 登录后创建新的 IPFS bucket
   - 上传 HTML 文件

3. **获取 IPFS 链接**
   - 文件自动获得 CID
   - 通过任意 IPFS 网关访问

## 手动部署步骤（Windows）

如果你想在本地安装 IPFS Desktop：

### 1. 安装 IPFS Desktop

```powershell
# 访问 GitHub 下载最新版本
https://github.com/ipfs/ipfs-desktop/releases

# 或使用 Chocolatey 安装
choco install ipfs-desktop
```

### 2. 上传文件

```powershell
# 启动 IPFS Desktop 后，在命令行中执行
ipfs add "D:\Super PM\add-config-modal-static.html"

# 输出示例：
# added QmXxxx... add-config-modal-static.html
```

### 3. 固定文件（Pin）

```powershell
# 确保文件在网络中持久存在
ipfs pin add QmXxxx...
```

### 4. 访问文件

通过以下网关访问：
- https://ipfs.io/ipfs/QmXxxx...
- https://gateway.pinata.cloud/ipfs/QmXxxx...
- https://cloudflare-ipfs.com/ipfs/QmXxxx...

## 公共 IPFS 网关列表

部署后可以通过以下任意网关访问：

1. **官方网关**：`https://ipfs.io/ipfs/[CID]`
2. **Cloudflare**：`https://cloudflare-ipfs.com/ipfs/[CID]`
3. **Pinata**：`https://gateway.pinata.cloud/ipfs/[CID]`
4. **Infura**：`https://ipfs.infura.io/ipfs/[CID]`
5. **Dweb.link**：`https://dweb.link/ipfs/[CID]`

## 本地测试

在部署到 IPFS 之前，你可以直接在浏览器中打开：

```
file:///D:/Super PM/add-config-modal-static.html
```

或启动本地服务器：

```powershell
# 使用 Python
cd "D:\Super PM"
python -m http.server 8080

# 然后访问：http://localhost:8080/add-config-modal-static.html
```

```powershell
# 或使用 Node.js
npx http-server "D:\Super PM" -p 8080

# 然后访问：http://localhost:8080/add-config-modal-static.html
```

## 部署后的链接格式

部署成功后，你会获得类似以下格式的链接：

```
IPFS CID: QmXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
网关链接: https://ipfs.io/ipfs/QmXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 注意事项

1. **永久性**：IPFS 上的内容是永久的，一旦上传并被其他节点固定，就无法删除
2. **访问速度**：首次访问可能较慢，因为需要从网络中检索内容
3. **内容寻址**：任何对文件的修改都会产生新的 CID
4. **固定（Pinning）**：建议使用固定服务确保文件长期可访问

## 推荐的部署流程

1. 在本地浏览器测试 HTML 文件功能
2. 注册 Pinata 或 Web3.Storage 账号
3. 上传文件并获得 CID
4. 通过多个网关测试访问
5. 将 IPFS 链接分享给用户

## 技术细节

### 文件结构
- 单文件 HTML（所有 CSS 和 JS 内联）
- 不依赖外部资源
- 总大小：~20KB
- 兼容所有现代浏览器

### 支持的浏览器
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### 性能优化
- 使用 CSS 动画代替 JavaScript 动画
- 事件委托减少内存占用
- 延迟加载非关键资源

## 参考资源

- [IPFS 官方文档](https://docs.ipfs.tech/)
- [Pinata 文档](https://docs.pinata.cloud/)
- [Web3.Storage 文档](https://web3.storage/docs/)
- [NFT.Storage 文档](https://nft.storage/docs/)

---

**部署时间**：2026-02-28
**文件版本**：v1.0
**状态**：已完成转换，待部署到 IPFS
