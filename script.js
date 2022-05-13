const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Highlighted NavBar - Brian Design: https://www.youtube.com/watch?v=3-2Pj5hxwrw
// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const howItWorksMenu = document.querySelector('#how-it-works-page');
  const getInvolvedMenu = document.querySelector('#get-involved-page');
  const contactMenu = document.querySelector('#contact-page');

  let scrollPos = window.scrollY;
  console.log(scrollPos);

  // adds highlight depending on the scroll position
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    howItWorksMenu.classList.remove('highlight');
    getInvolvedMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } 
  else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    howItWorksMenu.classList.remove('highlight');
    getInvolvedMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } 
  else if (window.innerWidth > 960 && scrollPos < 2345) {
    howItWorksMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    getInvolvedMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos < 3000) {
    getInvolvedMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    howItWorksMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  }
  else if (window.innerWidth > 960 && scrollPos < 4200) {
    contactMenu.classList.add('highlight');
    howItWorksMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    getInvolvedMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
