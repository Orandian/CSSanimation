const toggle = document.getElementById('toggle');

toggle.addEventListener('click',()=>{
    const sec = document.getElementById('sec');
    const nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
});
