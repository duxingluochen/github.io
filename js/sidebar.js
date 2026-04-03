const navMenuEl = document.getElementById("navMenu");
const menuOpenState = {};
primaryMenus.forEach(menu => { if (menu.hasChildren) menuOpenState[menu.id] = false; });

function renderSidebar() {
    navMenuEl.innerHTML = "";
    primaryMenus.forEach(primary => {
        const childrenCats = subCategories.filter(cat => cat.parentId === primary.id);
        if (primary.hasChildren && childrenCats.length > 0) {
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
                    activeSubCategoryId = sub.id;
                    activePrimaryCategory = null;
                    currentSearchKeyword = "";
                    document.getElementById("searchInput").value = "";
                    renderSidebar();
                    renderCards();
                    scrollToCategory(sub.id);
                    const parentId = sub.parentId;
                    if (parentId && !menuOpenState[parentId]) {
                        menuOpenState[parentId] = true;
                        renderSidebar();
                    }
                    closeSidebar();
                });
                li.appendChild(linkSpan);
                subUl.appendChild(li);
            });
            menuItemDiv.appendChild(header);
            menuItemDiv.appendChild(subUl);
            navMenuEl.appendChild(menuItemDiv);
        } else {
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
                document.getElementById("searchInput").value = "";
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