这是在github上部署的静态站

project/
├── index.html                # 主页面，仅保留结构骨架
├── css/
│   ├── base.css              # 重置样式、全局变量、滚动条
│   ├── layout.css            # 整体布局（flex容器，主区域结构）
│   ├── sidebar.css           # 侧边栏菜单样式（一级/二级菜单、折叠）
│   ├── main-content.css      # 顶部搜索栏、卡片网格、分组标题样式
│   ├── modal.css             # 弹窗样式
│   ├── footer.css            # 页脚样式
│   └── responsive.css        # 移动端响应式适配
├── js/
│   ├── data/
│   │   ├── categories.js     # 分类数据（一级菜单、二级菜单）
│   │   └── cards.js          # 卡片数据（定义 addCard 及所有卡片）
│   ├── utils.js              # 通用函数（escapeHtml、滚动到分类）
│   ├── sidebar.js            # 侧边栏渲染与折叠逻辑
│   ├── cards.js              # 卡片渲染与分组逻辑
│   ├── search.js             # 搜索功能
│   ├── modal.js              # 快递弹窗控制
│   └── main.js               # 初始化入口，绑定全局事件
└── img/
    └── su.jpg                # 弹窗图片