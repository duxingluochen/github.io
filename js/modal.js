const modal = document.getElementById("expressModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalImage = document.getElementById("modalImage");

function openModal(imgUrl) {
    modalImage.src = imgUrl;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
}

// 绑定快递卡片点击事件（使用事件委托）
function bindExpressClick() {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.addEventListener("click", (e) => {
        let target = e.target;
        while (target && target !== cardsContainer) {
            if (target.classList && target.classList.contains("express-card")) {
                e.preventDefault();
                openModal("img/su.jpg");
                return;
            }
            target = target.parentElement;
        }
    });
}

// 绑定弹窗关闭事件
modalCloseBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});