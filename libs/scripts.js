let hamburger = document.querySelector(".hamburguer")
let navMenu = document.querySelector(".links-menu")

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))