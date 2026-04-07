const cardsData = [];   //二级卡片
const primaryCardsData = []; // 一级菜单直接卡片

function addCard(catId, title, desc, url, iconClass) {
    cardsData.push({
        id: `${catId}_${cardsData.length}`,
        categoryId: catId,
        title, desc, url,
        icon: iconClass || "fas fa-globe",
        type: "sub"
    });
}

//一级菜单渲染
function addPrimaryCard(primaryId, title, desc, url, iconClass) {
    primaryCardsData.push({
        id: `${primaryId}_${primaryCardsData.length}`,
        primaryId: primaryId,
        title, desc, url,
        icon: iconClass || "fas fa-globe",
        type: "primary"
    });
}

// 以下为所有卡片数据（与原来相同，为节省篇幅此处省略，实际使用时复制原 cardsData 的添加部分）
// 请将原 cardsData 中所有 addCard 调用复制到此文件
// 示例：
// addCard("soft_dir", "异次元软件世界", "精品软件、绿色工具评测下载", "https://www.iplaysoft.com/", "fas fa-star");
// ... 
//渲染酷站推荐
addPrimaryCard("cool", "豆包", "智能助手", "https://www.doubao.com/chat/", "fas fa-robot");
addPrimaryCard("cool","低价流量卡","免费办理 极速发货","https://m.szkytx.cn/haoka/?u=25076337","fas fa-utensils");
addPrimaryCard("cool","发快递","免费上门取件","javascript:void(0);","fas fa-truck");
addPrimaryCard("cool","好好看","密码:cys9 免费看电影、电视剧、连续剧、综艺记录、动漫等等影视","https://wwbis.lanzouu.com/b01bjbmxti","fas fa-fire");
addPrimaryCard("cool","蜜桃","密码:c598 内涵文、二次元韩漫&高清无码点播、短视频、吃瓜免费看","https://wwbis.lanzouu.com/b01bjbmy2h","img/mtsp.png");
addPrimaryCard("cool","可可影视","密码:4tpt 免费看电影、电视剧、连续剧、综艺记录、动漫等等影视","https://wwbis.lanzouu.com/b01bjbmy7c","img/kkdy.png");
//推荐

// 实用工具 内容分享
addCard("soft_dir", "异次元软件世界", "精品软件、绿色工具评测下载", "https://www.iplaysoft.com/", "fas fa-star");
addCard("soft_dir", "小众软件", "分享免费、小巧、有趣的软件", "https://www.appinn.com/", "fas fa-cube");
addCard("soft_dir","官方流量卡","免费办理 极速发货","https://m.szkytx.cn/haoka/?u=25076337","fas fa-utensils");
addCard("soft_dir", "影视", "在线影视站", "https://www.hjl26.cc:9999", "fas fa-film");
addCard("soft_dir","点点链接","一个链接聚合分享你我全部","https://ddlink.cc/","img/DDlink-20241015173156.jpg");
// 网盘搜索
addCard("netdisk","秒搜","坚持做最好的网盘资源","https://miaosou.fun/","img/m.png");
addCard("netdisk","小云","阿里云盘夸克云盘搜索神器","https://dash.yunso.net","img/favicon.ico");
addCard("netdisk", "大力盘搜索", "百度网盘资源搜索引擎", "https://www.dalipan.com/", "fas fa-search");
addCard("netdisk", "海搜", "网盘资源聚合搜索", "https://haisou.cc/", "fas fa-cloud");
addCard("netdisk","虫部落快搜","搜索快人一步","https://search.chongbuluo.com/","fas fa-search");
addCard("netdisk","迷鹿导航","方便快捷实用","https://www.plnav.com/","fas fa-search");
addCard("netdisk","爱达杂货铺","收集有用的导航","https://adzhp.cc/","fas fa-search");
// 文件互传
addCard("file_transfer", "文叔叔", "临时文件传输，不限速", "https://www.wenshushu.cn/", "fas fa-share-alt");
addCard("file_transfer", "Firefox Send", "加密文件分享", "https://send.firefox.com/", "fas fa-fire");
//临时接码
addCard("sms_temp", "在线接码平台", "临时手机号接收短信", "https://www.sms-activate.org/", "fas fa-sms");
addCard("sms_temp", "Textnow", "免费虚拟号码", "https://www.textnow.com/", "fas fa-phone-alt");
//格式转换
addCard("format_convert", "CloudConvert", "300+格式转换神器", "https://cloudconvert.com/", "fas fa-exchange-alt");
addCard("format_convert", "Convertio", "在线文件转换器", "https://convertio.co/zh/", "fas fa-file-export");
// 在线修改
addCard("online_edit", "Photopea", "在线PS照片编辑器", "https://www.photopea.com/", "fas fa-pen-fancy");
addCard("online_edit", "PDF24", "免费PDF编辑工具", "https://tools.pdf24.org/", "fas fa-file-pdf");
// AI与开发
addCard("ai_tools", "ChatGPT", "OpenAI智能对话助手", "https://chat.openai.com/", "fas fa-comment-dots");
addCard("ai_tools", "Midjourney", "AI绘画生成器", "https://www.midjourney.com/", "fas fa-palette");
addCard("ai_tools", "Notion AI", "智能写作工作区", "https://www.notion.so/", "fas fa-brain");
// 程序代码
addCard("code_prog", "GitHub", "全球开源社区", "https://github.com/", "fab fa-github");
addCard("code_prog", "Stack Overflow", "编程问答社区", "https://stackoverflow.com/", "fab fa-stack-overflow");
//图标
addCard("icon_lib", "Iconify", "海量开源图标库", "https://iconify.design/", "fas fa-icons");
addCard("icon_lib", "Flaticon", "矢量图标素材库", "https://www.flaticon.com/", "fas fa-paint-brush");
// 影视娱乐
addCard("magnet_play", "WebTorrent", "磁力在线播放器", "https://webtorrent.io/", "fas fa-play");
addCard("magnet_play", "BT蚂蚁", "磁力链接播放工具", "#", "fas fa-download");
addCard("magnet_search", "BTDigg", "磁力搜索引擎", "https://btdig.com/", "fas fa-search");
addCard("magnet_search", "磁力猫", "资源索引站", "#", "fas fa-cat");
addCard("game_xiuxian", "Steam", "正版游戏平台", "https://store.steampowered.com/", "fab fa-steam");
addCard("game_xiuxian", "TapTap", "手游推荐社区", "https://www.taptap.cn/", "fas fa-gamepad");
addCard("movie_app", "PotPlayer", "全能本地播放器", "https://potplayer.daum.net/", "fas fa-play-circle");
addCard("movie_app", "VLC", "开源跨平台播放器", "https://www.videolan.org/", "fas fa-video");
//
addCard("online_video", "茶杯狐", "影视搜索导航", "https://cupfox.app/", "fas fa-tv");
addCard("online_video", "4k影视", "超清、秒播、拖拽不卡顿", "https://www.4kvm.org/", "fas fa-film");
addCard("online_video","好好看","密码:cys9 免费看电影、电视剧、连续剧、综艺记录、动漫等等影视","https://wwbis.lanzouu.com/b01bjbmxti","fas fa-fire");
addCard("online_video","蜜桃","密码:c598 内涵文、二次元韩漫&高清无码点播、短视频、吃瓜免费看","https://wwbis.lanzouu.com/b01bjbmy2h","img/mtsp.png");
addCard("online_video","可可影视","密码:4tpt 免费看电影、电视剧、连续剧、综艺记录、动漫等等影视","https://wwbis.lanzouu.com/b01bjbmy7c","img/kkdy.png");

//
addCard("acg", "Bangumi", "番组计划，动漫数据库", "https://bangumi.tv/", "fas fa-star");
addCard("acg", "ACG动漫", "ACG动漫", "https://www.agedm.io/", "fas fa-smile");
// 阅读与音乐
addCard("novel_online", "笔趣阁", "小说在线阅读", "#", "fas fa-book");
addCard("novel_online", "VIP兔", "自由观影，畅想精彩", "https://viptu.com/", "fas fa-comic");


addCard("novel_download", "知轩藏书", "精校小说下载", "http://zxcs.me/", "fas fa-file-download");
addCard("novel_download", "漫画柜", "高清漫画下载", "https://www.manhuagui.com/", "fas fa-images");
addCard("concert", "LiveMusic", "高清演唱会资源站", "#", "fas fa-microphone-alt");
addCard("concert", "Billboard现场", "经典舞台录像", "#", "fas fa-music");
addCard("music_online", "Spotify", "全球流行音乐", "https://open.spotify.com/", "fab fa-spotify");
addCard("music_online", "网易云音乐", "发现好音乐", "https://music.163.com/", "fas fa-headphones");
addCard("music_online","闪闪音乐网","闪闪音乐网","https://www.33ve.com/","fas fa-music");
addCard("music_down", "Listen1", "跨平台音乐播放器", "https://listen1.github.io/listen1/", "fas fa-music");
addCard("music_down", "Foobar2000", "专业音频播放器", "https://www.foobar2000.org/", "fas fa-headphones");
// 学习生活
addCard("education", "中国大学MOOC", "名校课程", "https://www.icourse163.org/", "fas fa-university");
addCard("education", "Coursera", "国际在线课程", "https://www.coursera.org/", "fas fa-graduation-cap");
// 即时资讯
addCard("hover","大盘云图","A股热力图","https://52etf.site/","fas fa-chart-line");
addCard("hover","猫眼实时票房","提供电影、电视、综艺等影视内容实时票房数据","https://piaofang.maoyan.com/dashboard","fas fa-ticket-alt");


addCard("language", "多邻国", "免费学外语", "https://www.duolingo.com/", "fas fa-language");
addCard("language", "沪江网校", "语言培训平台", "https://class.hujiang.com/", "fas fa-chalkboard");
addCard("life_skills", "下厨房", "美食菜谱社区", "https://www.xiachufang.com/", "fas fa-utensils");
addCard("life_skills", "wikiHow", "万事指南", "https://zh.wikihow.com/", "fas fa-lightbulb");
// 快递卡片，无链接，使用弹窗
addCard("life_skills","发快递","免费上门取件","javascript:void(0);","fas fa-truck");
addCard("career", "B站课堂", "技能提升视频", "https://www.bilibili.com/", "fab fa-bilibili");
addCard("career", "慕课网", "IT技能实战", "https://www.imooc.com/", "fas fa-laptop-code");
addCard("office_temp", "第一PPT", "免费PPT模板", "http://www.1ppt.com/", "fas fa-chalkboard");
addCard("office_temp", "石墨文档", "在线协作模板", "https://shimo.im/", "fas fa-file-alt");
addCard("font_plug", "识字体网", "在线字体识别", "https://www.likefont.com/", "fas fa-font");
addCard("font_plug", "Google Fonts", "免费商用字体库", "https://fonts.google.com/", "fab fa-google");
addCard("wallpaper", "Wallhaven", "超清壁纸库", "https://wallhaven.cc/", "fas fa-image");
addCard("wallpaper", "Unsplash", "无版权图片", "https://unsplash.com/", "fas fa-camera");
addCard("video_parse", "VIP视频解析", "全网视频解析接口", "https://home.nuaa.tech/vip/", "fas fa-video");
addCard("video_parse", "解析工具聚合", "多线路解析", "https://v.zhenlang.cc/", "fas fa-link");
addCard("friend_link", "小众软件论坛", "软硬玩家聚集地", "https://meta.appinn.net/", "fas fa-users");
addCard("friend_link", "知乎", "知识社区", "https://www.zhihu.com/", "fab fa-zhihu");
addCard("friend_link","小光资源库","涵盖各类型,总资源10000T+","https://linkdd.cn/guangyu","img/DDlink-20241015173156.jpg")