let burger=document.querySelector(".burger");
let Links = document.querySelector(".nav-links");
let TextArea = document.querySelector(".text-center");
burger.addEventListener('click',()=>{
    Links.classList.toggle("nav-show");
    TextArea.classList.toggle("textareahide")
})