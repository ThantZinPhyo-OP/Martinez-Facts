let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.toggle('bx-x');
    header.classList.toggle('active');
};

sr.reveal('.home-Text',{delay:200 , orgin:'top'})
sr.reveal('.home-img',{delay:200 , orgin:'top'})
sr.reveal('.about , .experience , .cta , .resume , .contact , .copyright' , {delay:200,orgin:'top'})