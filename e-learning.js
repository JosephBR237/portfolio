const player = document.getElementById("main-video");
const title = document.getElementById("main-title");
const tuto = document.getElementById("tuto");

const item = document.querySelectorAll(".item");

item.forEach(card => {
    card.addEventListener("click", () => {
        player.src = card.dataset.src;

        title.textContent = card.dataset.title;
        tuto.textContent = card.dataset.tuto;
    })
})