const slides = document.querySelector(".slides");
const menu = document.querySelector(".ri-menu-3-line");
const close = document.querySelector(".ri-close-large-fill");
const menuItem = document.querySelector(".menuItem");




menu.addEventListener("click", () => {
            slides.style.left = 0
            menuItem.style.width = "80%"
            close.style.display = "block"
            menuItem.style.display = "block"
})


close.addEventListener("click", () => {
            slides.style.left = "-100%"
            close.style.display = "none"
            menuItem.style.display = "none"
})