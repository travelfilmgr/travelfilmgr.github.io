function toggleDarkMode(){
document.body.classList.toggle('dark');
}

function filterImages(cat){
document.querySelectorAll('.grid img').forEach(img=>{
img.style.display = (cat==='all'||img.classList.contains(cat))?'block':'none';
});
}
