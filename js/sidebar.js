const navMenuEl = document.getElementById("navMenu");
const menuOpenState = {};

// 初始化所有一级菜单为折叠状态（仅对有子菜单的）
primaryMenus.forEach(menu => {
    if (menu.hasChildren) {
        menuOpenState[menu.id] = false;
    }
});

function renderSidebar() {
    navMenuEl.innerHTML = "";
    primaryMenus.forEach(primary => {
        const childrenCats = subCategories.filter(cat => cat.parentId === primary.id);
        
        if (primary.hasChildren && childrenCats.length > 0) {
            // 有二级菜单的项
            const menuItemDiv = document.createElement("div");
            const isOpen = menuOpenState[primary.id] || false;
            menuItemDiv.className = `menu-item ${isOpen ? 'open' : ''}`;
            
            const header = document.createElement("div");
            header.className = "menu-header";
            header.innerHTML = `
                <div class="title">
                    <i class="${primary.icon}"></i>
                    <span>${primary.name}</span>
                </div>
                <i class="fas fa-chevron-right chevron"></i>
            `;
            header.addEventListener("click", (e) => {
                e.stopPropagation();
                // 切换当前菜单的折叠状态，不影响其他
                menuOpenState[primary.id] = !menuOpenState[primary.id];
                renderSidebar();
            });
            
            const subUl = document.createElement("ul");
            subUl.className = "sub-menu";
            childrenCats.forEach(sub => {
                const li = document.createElement("li");
                const linkSpan = document.createElement("span");
                linkSpan.className = "sub-cat";
                if (activeSubCategoryId === sub.id) linkSpan.classList.add("active");
                linkSpan.innerHTML = `<i class="${sub.icon}"></i> ${sub.name}`;
                linkSpan.addEventListener("click", (e) => {
                    e.stopPropagation();
                    
                    // 1. 折叠所有一级菜单
                    for (const key in menuOpenState) {
                        menuOpenState[key] = false;
                    }
                    // 2. 展开当前二级菜单所属的一级菜单
                    const parentId = sub.parentId;
                    if (parentId && menuOpenState.hasOwnProperty(parentId)) {
                        menuOpenState[parentId] = true;
                    }
                    
                    // 3. 更新高亮状态
                    activeSubCategoryId = sub.id;
                    activePrimaryCategory = null;
                    
                    // 4. 清空搜索框
                    currentSearchKeyword = "";
                    const searchInput = document.getElementById("searchInput");
                    if (searchInput) searchInput.value = "";
                    
                    // 5. 重新渲染侧边栏和卡片
                    renderSidebar();
                    renderCards();
                    
                    // 6. 滚动到对应分类
                    scrollToCategory(sub.id);
                    
                    // 7. 关闭移动端侧边栏
                    closeSidebar();
                });
                li.appendChild(linkSpan);
                subUl.appendChild(li);
            });
            menuItemDiv.appendChild(header);
            menuItemDiv.appendChild(subUl);
            navMenuEl.appendChild(menuItemDiv);
        } else {
            // 无二级菜单的一级项（如酷站推荐）
            const directMenuItem = document.createElement("div");
            directMenuItem.className = `menu-item direct-menu-item ${activePrimaryCategory === primary.id ? 'active' : ''}`;
            const link = document.createElement("div");
            link.className = "menu-header";
            link.innerHTML = `
                <div class="title">
                    <i class="${primary.icon}"></i>
                    <span>${primary.name}</span>
                </div>
            `;
            link.addEventListener("click", (e) => {
                e.stopPropagation();
                activePrimaryCategory = primary.id;
                activeSubCategoryId = null;
                currentSearchKeyword = "";
                const searchInput = document.getElementById("searchInput");
                if (searchInput) searchInput.value = "";
                renderSidebar();
                renderCards();
                scrollToCategory(primary.id, true);
                closeSidebar();
            });
            directMenuItem.appendChild(link);
            navMenuEl.appendChild(directMenuItem);
        }
    });
}