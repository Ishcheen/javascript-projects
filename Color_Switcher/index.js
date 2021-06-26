const colors =["purple","green","fuchsia", "lime","yellow","red"];
const button=document.getElementById('btn');
const text=document.querySelector('.color');

btn.addEventListener('click',function() 
{
    let n=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[n];
    text.textContent=colors[n];    
})
