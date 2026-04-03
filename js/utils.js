function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// 平滑滚动到指定分类（支持二级分类和一级分类）
function scrollToCategory(categoryId, isPrimary = false) {
    const targetId = isPrimary ? `category-primary-${categoryId}` : `category-${categoryId}`;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}