const bars = document.querySelector(".fa-bars")
const navbar = document.querySelector(".navbar")

bars.addEventListener("click",()=>{
    navbar.classList.toggle("toggler")
})