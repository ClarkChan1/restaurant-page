import zeff from './images/zeff.jpg';
import sanji from './images/sanji.jpg';

function createHome() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');
  // make the description for the restaurant
  const description = document.createElement('p');
  description.classList.add('home-description');
  description.appendChild(document.createTextNode('Come one, come all to Baratie, the floating restuarant!'));
  description.appendChild(document.createElement('br'));
  description.appendChild(document.createTextNode("Using fresh ingredients locally sourced from the East Blue, we serve world class cuisine to sailors and pirates alike."));
  description.appendChild(document.createElement('hr'));
  description.appendChild(document.createTextNode('Meet our chefs!'));
  // create container for chef pictures and description
  const chefPicContainer = document.createElement('div');
  // make the containers that will hold the picture and description
  const zeffContainer = document.createElement('div');
  const sanjiContainer = document.createElement('div');
  zeffContainer.classList.add('chef-container');
  sanjiContainer.classList.add('chef-container');
  // make the zeff picture
  const zeffPic = new Image();
  zeffPic.classList.add('chef-pic');
  zeffPic.src = zeff;
  // make the zeff description
  const zeffDescription = document.createElement('p');
  zeffDescription.classList.add('home-description');
  zeffDescription.appendChild(document.createTextNode('Zeff, Head Chef'));
  zeffDescription.appendChild(document.createElement('hr'));
  zeffDescription.appendChild(document.createTextNode("Zeff is the owner of Baratie and has been running the restaurant ever since it's founding in 1776, don't ask him about how he lost his leg, it's a touchy subject."));
  zeffContainer.appendChild(zeffPic);
  zeffContainer.appendChild(zeffDescription);
  // make the sanji picture
  const sanjiPic = new Image();
  sanjiPic.classList.add('chef-pic');
  sanjiPic.src = sanji;
  // make the sanji description
  const sanjiDescription = document.createElement('p');
  sanjiDescription.classList.add('home-description');
  sanjiDescription.appendChild(document.createTextNode('Sanji, Sous Chef'));
  sanjiDescription.appendChild(document.createElement('hr'));
  sanjiDescription.appendChild(document.createTextNode("Sanji has been training under Zeff since he was little, he's an excellent cook and was going to inherit the restarurant until Straw Hat Luffy came along..."));
  sanjiContainer.appendChild(sanjiPic);
  sanjiContainer.appendChild(sanjiDescription);

  // append the chef pictures to the homeContainer
  homeContainer.appendChild(description);
  homeContainer.appendChild(zeffContainer);
  homeContainer.appendChild(sanjiContainer);

  return homeContainer;
}

export default createHome;
