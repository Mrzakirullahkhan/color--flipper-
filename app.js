let btn = document.querySelector('.btn');
let text = document.querySelector('.colortext');





btn.addEventListener('click',function colours(){
    let color = Math.random().toString(16).slice(2,8).padEnd(6,0);
    let mycolor = "#" + color;
    text.innerHTML = mycolor;
    document.body.style.backgroundColor=mycolor
})
