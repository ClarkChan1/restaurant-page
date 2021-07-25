import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';

import homeBackground from './images/food.jpg';
import menuBackground from './images/food2.jpg';

let homeContent;
let menuContent;
let contactContent;

let currentSection;

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  // create the title text
  const title = document.createElement('div');
  title.classList.add('title-container');
  title.innerHTML = '<p class="title">Baratie</p>';
  // create the three category buttons
  const navBar = document.createElement('nav');
  navBar.classList.add('nav-bar');
  const homeButton = document.createElement('div');
  homeButton.classList.add('section-button-container');
  homeButton.id = "homeButton";
  homeButton.innerHTML += '<p class="section-button">Home</p>';
  homeButton.classList.add('section-button-container-selected');
  homeButton.addEventListener('click', function() {
    changeSection('home', navBar);
  });
  const menuButton = document.createElement('div');
  menuButton.classList.add('section-button-container');
  menuButton.id = "menuButton";
  menuButton.innerHTML += '<p class="section-button">Menu</p>';
  menuButton.addEventListener('click', function() {
    changeSection('menu', navBar);
  });
  const contactButton = document.createElement('div');
  contactButton.classList.add('section-button-container');
  contactButton.id = "contactButton";
  contactButton.innerHTML += '<p class="section-button">Contact</p>';
  contactButton.addEventListener('click', function() {
    changeSection('contact', navBar);
  });
  // add all the three sections to the header
  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);
  // append title and the section buttons to the header
  header.appendChild(title);
  header.appendChild(navBar);
  // append the header to the document body
  document.body.appendChild(header);
}

function changeSection(newSection, navBar) {
  // remove the underline from the old section
  navBar.querySelector(`#${currentSection}Button`).classList.remove('section-button-container-selected');
  // underline the new section
  navBar.querySelector(`#${newSection}Button`).classList.add('section-button-container-selected');
  // display the new section's content
  if (currentSection != newSection) {
    clearContent();
    // actually switch to the new content
    switch (newSection) {
      case 'home':
        document.body.appendChild(homeContent);
        document.body.style.backgroundImage = `url(${homeBackground})`;
        break;
      case 'menu':
        document.body.appendChild(menuContent);
        document.body.style.backgroundImage = `url(${menuBackground})`;
        break;
      case 'contact':
        document.body.appendChild(contactContent);
        break;
    }
    currentSection = newSection;
  }
}

function loadWebsite() {
  createHeader();
  homeContent = createHome();
  menuContent = createMenu();
  // initially display the home section
  document.body.appendChild(homeContent);
  currentSection = "home";
}

function clearContent() {
  document.body.removeChild(document.querySelector(`.${currentSection}-container`));
}

loadWebsite();
