// ========== 全局变量声明（只在此处声明一次） ==========
let activeSubCategoryId = null;
let activePrimaryCategory = null;
let currentSearchKeyword = "";

// ========== DOM 元素 ==========
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const menuToggleBtn = document.getElementById("menuToggleBtn");

// ========== 侧边栏开关函数 ==========
function closeSidebar() {
    if (window.innerWidth <= 768) {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
    }
}
function openSidebar() {
    if (window.innerWidth <= 768) {
        sidebar.classList.add("open");
        overlay.classList.add("active");
    }
}

// ========== 事件绑定 ==========
overlay.addEventListener("click", closeSidebar);
menuToggleBtn.addEventListener("click", openSidebar);
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
    }
});

// ========== 禁止右键菜单（阻止浏览器默认右键行为） ==========
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    // 可选：如果需要提示用户，可以添加 console.log 或轻提示
    // console.log('右键已被禁用');
});

// ========== 初始化函数 ==========
function init() {
    renderSidebar();
    renderCards();
    initSearch();
    bindExpressClick();
    if (window.innerWidth <= 768) closeSidebar();
}
init();