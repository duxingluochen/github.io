//一级菜单
const primaryMenus = [
    { id: "cool", name: "🔥 酷站推荐", icon: "fas fa-fire", hasChildren: false },
    { id: "tools", name: "🔧 实用工具", icon: "fas fa-wrench" , hasChildren: true},
    { id: "ai-dev", name: "🤖 AI与开发", icon: "fas fa-microchip" , hasChildren: true},
    { id: "media", name: "🎬 影视娱乐", icon: "fas fa-film" , hasChildren: true},
    { id: "read-music", name: "📖 阅读与音乐", icon: "fas fa-headphones" , hasChildren: true},
    { id: "study-life", name: "🌟 学习生活", icon: "fas fa-graduation-cap", hasChildren: true }
];
//二级菜单
const subCategories = [
    //

    //实用工具
    { id: "soft_dir", name: "内容分享", parentId: "tools", icon: "fas fa-boxes" },
    { id: "netdisk", name: "网盘搜索", parentId: "tools", icon: "fas fa-cloud-upload-alt" },
    { id: "file_transfer", name: "文件互传", parentId: "tools", icon: "fas fa-exchange-alt" },
    { id: "sms_temp", name: "临时接码网站", parentId: "tools", icon: "fas fa-mobile-alt" },
    { id: "format_convert", name: "格式转换", parentId: "tools", icon: "fas fa-file-alt" },
    { id: "online_edit", name: "在线修改", parentId: "tools", icon: "fas fa-edit" },

    //AI
    { id: "ai_tools", name: "AI工具集", parentId: "ai-dev", icon: "fas fa-robot" },
    { id: "code_prog", name: "程序代码", parentId: "ai-dev", icon: "fas fa-code" },
    { id: "icon_lib", name: "Icon图标", parentId: "ai-dev", icon: "fas fa-icons" },

    //
    { id: "magnet_play", name: "磁力播放", parentId: "media", icon: "fas fa-play-circle" },
    { id: "magnet_search", name: "磁力种子", parentId: "media", icon: "fas fa-magnet" },
    { id: "game_xiuxian", name: "游戏修仙", parentId: "media", icon: "fas fa-gamepad" },
    { id: "movie_app", name: "观影软件", parentId: "media", icon: "fas fa-tv" },
    { id: "online_video", name: "在线看影视", parentId: "media", icon: "fas fa-video" },
    { id: "acg", name: "动漫", parentId: "media", icon: "fas fa-dragon" },
    //
    { id: "novel_online", name: "在线小说漫画", parentId: "read-music", icon: "fas fa-book-open" },
    { id: "novel_download", name: "小说漫画下载", parentId: "read-music", icon: "fas fa-download" },
    { id: "concert", name: "演唱会目录", parentId: "read-music", icon: "fas fa-music" },
    { id: "music_online", name: "在线试听歌曲", parentId: "read-music", icon: "fas fa-headphones" },
    { id: "music_down", name: "音乐软件下载", parentId: "read-music", icon: "fas fa-download" },
    //
    {id:"hover",name:"即时资讯",parentId:"study-life",icon:"fas fa-rss"},

    { id: "education", name: "教育仓库", parentId: "study-life", icon: "fas fa-school" },
    { id: "language", name: "语言专区", parentId: "study-life", icon: "fas fa-language" },
    { id: "life_skills", name: "生活技能", parentId: "study-life", icon: "fas fa-heart" },
    { id: "career", name: "职业技能", parentId: "study-life", icon: "fas fa-briefcase" },
    { id: "office_temp", name: "办公模版", parentId: "study-life", icon: "fas fa-file-powerpoint" },
    { id: "font_plug", name: "字体插件", parentId: "study-life", icon: "fas fa-font" },
    { id: "wallpaper", name: "图片壁纸", parentId: "study-life", icon: "fas fa-image" },
    { id: "video_parse", name: "视频解析", parentId: "study-life", icon: "fas fa-photo-video" },
    { id: "friend_link", name: "友情链接", parentId: "study-life", icon: "fas fa-link" }
];