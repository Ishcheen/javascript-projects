// set date
const date=document.getElementById('date');
date.innerHTML=new Date().getFullYear();

// close links
const navToggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');
const linksContainer=document.querySelector('.links-container');

navToggle.addEventListener('click',function() {
    const containerHeight=linksContainer.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;
    if(containerHeight===0)
    {
        linksContainer.style.height=`${linksHeight}px`;
    }
    else
    {
        linksContainer.style.height=0;
    }
});

// fixed navbar
const navbar=document.getElementById('nav');
const topLink=document.querySelector('.top-link');
window.addEventListener('scroll',function() {
    const scrollHeight=window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height;
    if(scrollHeight>navHeight)
    {
        navbar.classList.add('fixed-nav');
    }
    else
    {
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight>500)
    {
        topLink.classList.add('show-link');
    }
    else
    {
        topLink.classList.remove('show-link');
    }
});