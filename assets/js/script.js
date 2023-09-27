// TOGGLE BUTTON
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav_link hide");

//TOGGLE WHEN THE BUTTON IS CLICKED 
hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
})