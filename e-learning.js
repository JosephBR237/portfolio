const player = document.getElementById("main-video");
const title = document.getElementById("current-title");
const duration = document.getElementById("current-duration");
const desc = document.getElementById("current-description");

const item = document.querySelectorAll(".item");

item.forEach(card => {
    card.addEventListener("click", () => {
        player.src = card.dataset.src;

        title.textContent = card.dataset.title;
        duration.textContent = card.dataset.duration;
        desc.textContent = card.dataset.desc;
    })
})