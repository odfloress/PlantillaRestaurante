let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}



// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == navbar) {
//     if(navbar.classList.contains( 'active' )){
//         navbar.classList.remove('active');
//     }
//   }
// }