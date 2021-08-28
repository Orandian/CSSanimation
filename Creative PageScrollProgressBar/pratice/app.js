const progress = document.getElementById('progressbar');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = ()=>{
    const progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}