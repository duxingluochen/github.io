const cardsContainer = document.getElementById("cardsContainer");

function renderCards() {
    let filteredSub = [...cardsData];
    let filteredPrimary = [...primaryCardsData];
    if (currentSearchKeyword && currentSearchKeyword.trim() !== "") {
        const kw = currentSearchKeyword.trim().toLowerCase();
        filteredSub = filteredSub.filter(c => c.title.toLowerCase().includes(kw) || c.desc.toLowerCase().includes(kw));
        filteredPrimary = filteredPrimary.filter(c => c.title.toLowerCase().includes(kw) || c.desc.toLowerCase().includes(kw));
    }
    let html = '';
    if (filteredPrimary.length > 0) {
        const menu = primaryMenus.find(p => p.id === filteredPrimary[0].primaryId);
        if (menu) {
            html += `
                <div class="category-group" id="category-primary-${menu.id}">
                    <div class="group-title">
                        <i class="${menu.icon}"></i>
                        <h2>${escapeHtml(menu.name)}</h2>
                    </div>
                    <div class="cards-grid">
                        ${filteredPrimary.map(card => renderCardHtml(card)).join('')}
                    </div>
                </div>
            `;
        }
    }
    if (filteredSub.length > 0) {
        const groupMap = new Map();
        filteredSub.forEach(card => {
            const cat = subCategories.find(c => c.id === card.categoryId);
            if (!cat) return;
            if (!groupMap.has(cat.id)) groupMap.set(cat.id, { category: cat, cards: [] });
            groupMap.get(cat.id).cards.push(card);
        });
        const orderedGroups = [];
        for (const cat of subCategories) {
            if (groupMap.has(cat.id)) orderedGroups.push(groupMap.get(cat.id));
        }
        for (const group of orderedGroups) {
            const cat = group.category;
            const cards = group.cards;
            html += `
                <div class="category-group" id="category-${cat.id}">
                    <div class="group-title">
                        <i class="${cat.icon}"></i>
                        <h2>${escapeHtml(cat.name)}</h2>
                    </div>
                    <div class="cards-grid">
                        ${cards.map(card => renderCardHtml(card)).join('')}
                    </div>
                </div>
            `;
        }
    }
    if (html === '') {
        cardsContainer.innerHTML = `<div class="no-results"><i class="fas fa-folder-open"></i> 没有找到相关站点～ 试试其他关键词</div>`;
    } else {
        cardsContainer.innerHTML = html;
    }
}

function renderCardHtml(card) {
    // 判断是否为 Font Awesome 图标（以 "fas ", "fab ", "far " 开头）
    const isFontAwesome = card.icon && (card.icon.startsWith("fas ") || card.icon.startsWith("fab ") || card.icon.startsWith("far "));
    
    let iconHtml;
    if (isFontAwesome) {
        iconHtml = `<i class="${card.icon}"></i>`;
    } else {
        // 本地图片路径（相对路径，相对于 index.html）
        iconHtml = `<img src="${card.icon}" alt="${card.title}" class="card-icon-img">`;
    }

    // 快递卡片特殊处理（如果您的项目中还有这个逻辑）
    if (card.title === "发快递") {
        return `<a href="javascript:void(0);" class="card express-card" data-express="true">
                    <div class="card-icon">${iconHtml}</div>
                    <div class="card-content">
                        <div class="card-title">${escapeHtml(card.title)}</div>
                        <div class="card-desc">${escapeHtml(card.desc)}</div>
                    </div>
                </a>`;
    }
    return `<a href="${card.url}" target="_blank" rel="noopener noreferrer" class="card">
                <div class="card-icon">${iconHtml}</div>
                <div class="card-content">
                    <div class="card-title">${escapeHtml(card.title)}</div>
                    <div class="card-desc">${escapeHtml(card.desc)}</div>
                </div>
            </a>`;
}