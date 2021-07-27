import zeff from './images/zeff.jpg';
import sanji from './images/sanji.jpg';
import patty from './images/patty.png';
import carne from './images/carne.png';
import luffy from './images/luffy.jpg';

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
  description.appendChild(document.createTextNode('Meet our staff!'));
  // append the home description to homeContainer
  homeContainer.appendChild(description);
  // now add all the chef pictures and descriptions
  let chefArr = [{
    imageUrl: zeff,
    chefTitle: "Head Chef, Zeff",
    chefDescription: "Zeff is the owner of Baratie and has been running the restaurant ever since it's founding in 1776, don't ask him about how he lost his leg, it's a touchy subject.",
  }, {
    imageUrl: sanji,
    chefTitle: "Sous Chef, Sanji",
    chefDescription: "Sanji has been training under Zeff since he was little, he's an excellent cook and was going to inherit the restarurant until Straw Hat Luffy came along...",
  }, {
    imageUrl: patty,
    chefTitle: "Patissier, Patty",
    chefDescription: "Patty is in charge of making the desserts at Baratie and is highly skilled with knives. He manages the Sister Anko dessert ship.",
  }, {
    imageUrl: carne,
    chefTitle: "Meat Master, Carne",
    chefDescription: "Carne is one of Baratie's best chefs, specializing in charcuterie and all manner of meat based cuisine. He is in charge of the Nasugasira Teppanyaki ship.",
  }, {
    imageUrl: luffy,
    chefTitle: "Chore Boy, Luffy",
    chefDescription: "Straw Hat Luffy deflected a cannonball at Baratie and now serves as a Chore Boy to make up for the damages.",
  }];
  for (let a = 0; a < chefArr.length; a++) {
    const currentChef = chefArr[a];
    // make the containers that will hold the picture and description
    const chefContainer = document.createElement('div');
    chefContainer.classList.add('chef-container');
    // make the chef picture
    const chefPic = new Image();
    chefPic.classList.add('chef-pic');
    chefPic.src = currentChef.imageUrl;
    // make the chef description
    const chefDescription = document.createElement('p');
    chefDescription.classList.add('chef-description');
    chefDescription.appendChild(document.createTextNode(currentChef.chefTitle));
    chefDescription.appendChild(document.createElement('hr'));
    chefDescription.appendChild(document.createTextNode(currentChef.chefDescription));
    chefContainer.appendChild(chefPic);
    chefContainer.appendChild(chefDescription);
    homeContainer.appendChild(chefContainer);
  }
  return homeContainer;
}

export default createHome;
