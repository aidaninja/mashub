const container = document.querySelector(".container");
const popup = document.querySelector(".popup");
const btnOpen = document.querySelector(".container .content .open");
const btnClose = document.querySelector(".popup .close");
const toggle = e => {
    e.preventDefault();
    container.classList.toggle("active");
    popup.classList.toggle("active");
};

btnOpen.addEventListener("click", toggle);
btnClose.addEventListener("click", toggle);
