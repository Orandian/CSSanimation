const buttons = document.querySelectorAll('a');
const body = document.querySelector('body');

const wave = function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';

    this.appendChild(ripples);

    setTimeout(()=>{
        ripples.remove();
    }, 1000);
};

// buttons.forEach(btn => {
//     btn.addEventListener('click', wave);
// });

body.addEventListener('click', wave);

