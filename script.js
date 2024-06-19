
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll("body,header,.logo,.toggle,.home-text,.nav-link,.copy,.pmg,.elements,.ptable");
ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});

