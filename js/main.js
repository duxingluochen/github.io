// 获取 DOM 元素
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const menuToggleBtn = document.getElementById("menuToggleBtn");

// 侧边栏开关（仅移动端）
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

// 绑定全局事件
overlay.addEventListener("click", closeSidebar);
menuToggleBtn.addEventListener("click", openSidebar);
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
    }
});

// 初始化所有模块
function init() {
    renderSidebar();
    renderCards();
    initSearch();
    bindExpressClick();
    if (window.innerWidth <= 768) closeSidebar();
}
init();