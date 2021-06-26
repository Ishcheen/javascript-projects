const colors=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const button=document.getElementById('btn');
const text=document.querySelector('.color');

button.addEventListener('click',function() 
{
    let c="#";
    for(let i=0;i<6;i++)
    {
        c+=colors[Math.floor(Math.random()*colors.length)];
    }
    document.body.style.backgroundColor=c;
    text.textContent=c;
    
})