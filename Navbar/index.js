const toggle_button= document.querySelector('.nav-toggle');
const links=document.querySelector('.links');
toggle_button.addEventListener('click',function() {

    if(links.classList.contains("show-links"))
    {
        links.classList.remove("show-links");
        toggle_button.classList.remove("nav-toggle-class");
       
    }
    else
    {
        links.classList.add("show-links");
        toggle_button.classList.add("nav-toggle-class");
    }
        
    
});