const bg = document.getElementById('bg');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    bg.style.backgroundSize = 100 + value*2 +"px";
})