function toggleDarkMode(){
document.body.classList.toggle('dark');
}

function filterImages(category){
let imgs = document.querySelectorAll('.grid img');
imgs.forEach(img=>{
if(category === 'all'){
img.style.display = 'block';
}else{
img.style.display = img.classList.contains(category) ? 'block' : 'none';
}
});
}
