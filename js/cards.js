const cardsContainer = document.getElementById("cardsContainer");

function renderCards() {
    let filteredCards = [...cardsData];
    if (currentSearchKeyword && currentSearchKeyword.trim() !== "") {
        const kw = currentSearchKeyword.trim().toLowerCase();
        filteredCards = filteredCards.filter(card => 
            card.title.toLowerCase().includes(kw) || card.desc.toLowerCase().includes(kw)
        );
    }

    if (filteredCards.length === 0) {
        cardsContainer.innerHTML = `<div class="no-results"><i class="fas fa-folder-open"></i> 没有找到相关站点～ 试试其他关键词</div>`;
        return;
    }

    const groupMap = new Map();
    filteredCards.forEach(card => {
        const cat = subCategories.find(c => c.id === card.categoryId);
        if (!cat) return;
        if (!groupMap.has(cat.id)) {
            groupMap.set(cat.id, { category: cat, cards: [] });
        }
        groupMap.get(cat.id).cards.push(card);
    });

    const orderedGroups = [];
    for (const cat of subCategories) {
        if (groupMap.has(cat.id)) {
            orderedGroups.push(groupMap.get(cat.id));
        }
    }

    let html = '';
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
    cardsContainer.innerHTML = html;
}

function renderCardHtml(card) {
    if (card.title === "发快递") {
        return `
            <a href="javascript:void(0);" class="card express-card" data-express="true">
                <div class="card-icon"><i class="${card.icon}"></i></div>
                <div class="card-content">
                    <div class="card-title">${escapeHtml(card.title)}</div>
                    <div class="card-desc">${escapeHtml(card.desc)}</div>
                </div>
            </a>
        `;
    }
    return `
        <a href="${card.url}" target="_blank" rel="noopener noreferrer" class="card">
            <div class="card-icon"><i class="${card.icon}"></i></div>
            <div class="card-content">
                <div class="card-title">${escapeHtml(card.title)}</div>
                <div class="card-desc">${escapeHtml(card.desc)}</div>
            </div>
        </a>
    `;
}