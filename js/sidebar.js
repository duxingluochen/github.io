const navMenuEl = document.getElementById("navMenu");
let activeSubCategoryId = null;
const menuOpenState = {};
primaryMenus.forEach(menu => { menuOpenState[menu.id] = false; });

function renderSidebar() {
    navMenuEl.innerHTML = "";
    primaryMenus.forEach(primary => {
        const childrenCats = subCategories.filter(cat => cat.parentId === primary.id);
        if (childrenCats.length === 0) return;
        const menuItemDiv = document.createElement("div");
        const isOpen = menuOpenState[primary.id];
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
                // 折叠其他一级菜单，展开当前所属一级
                const targetParentId = sub.parentId;
                for (const key in menuOpenState) {
                    menuOpenState[key] = (key === targetParentId);
                }
                renderSidebar();
                activeSubCategoryId = sub.id;
                renderSidebar();
                // 清空搜索并展示全部分类
                currentSearchKeyword = "";
                searchInput.value = "";
                renderCards();
                scrollToCategory(sub.id);
                closeSidebar();
            });
            li.appendChild(linkSpan);
            subUl.appendChild(li);
        });
        menuItemDiv.appendChild(header);
        menuItemDiv.appendChild(subUl);
        navMenuEl.appendChild(menuItemDiv);
    });
}