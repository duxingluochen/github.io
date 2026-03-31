let currentSearchKeyword = "";

function initSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
        currentSearchKeyword = e.target.value;
        if (currentSearchKeyword.trim() !== "") {
            activeSubCategoryId = null;
            renderSidebar();
        }
        renderCards();
    });
}