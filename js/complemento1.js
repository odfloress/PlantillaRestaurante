let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}
