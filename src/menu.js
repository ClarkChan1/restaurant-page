import sashimi from './images/sashimi.jpg';
import seafoodRisotto from './images/seafood-risotto.jpg';
import meatballs from './images/meatballs.jpg';
import soba from './images/soba-noodles.jpg';
import meat from './images/meat.png';
import bento from './images/bento.png';
import oshiruko from './images/oshiruko.png';
import aligot from './images/aligot.png';
import chopper from './images/chopper.png';

function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  // make the array with objects that have the information for each menu item
  let itemArr = [{
    imageUrl: sashimi,
    itemTitle: "Sashimi Platter",
    itemPrice: 18.00,
    itemDescription: "Bluefin tuna and toro slices, a staple of fine dining."
  }, {
    imageUrl: seafoodRisotto,
    itemTitle: "Seafood Risotto",
    itemPrice: 12.00,
    itemDescription: "Buttery Risotto served with shrimp, octopus, and calamari."
  }, {
    imageUrl: meatballs,
    itemTitle: "Signature Meatballs",
    itemPrice: 15.00,
    itemDescription: "One of Sanji's signature dishes. These meatballs are to die for... Literally, Luffy almost died at G5 for these..."
  }, {
    imageUrl: meat,
    itemTitle: "Mystery Meat",
    itemPrice: 10.00,
    itemDescription: "Feeling frisky? Try our Mystery Meat, it changes every week!"
  }, {
    imageUrl: soba,
    itemTitle: "Soba Noodles",
    itemPrice: 8.00,
    itemDescription: "Sanji served this dish extensively at the land of Wano, totally out of the goodness of his heart and not so he can try and score with the Wano ladies..."
  }, {
    imageUrl: bento,
    itemTitle: "Chef's Choice Bento Box",
    itemPrice: 25.00,
    itemDescription: "On one the days preceding Sanji and Pudding's wedding, Sanji made this Bento box for Pudding. It is comprised of all the Straw Hat Pirates' favorite foods."
  }, {
    imageUrl: aligot,
    itemTitle: "Aligot",
    itemPrice: 16.00,
    itemDescription: "Thick slices of filet served with potatoes and a delectable, cheesy fondue sauce."
  }, {
    imageUrl: oshiruko,
    itemTitle: "Oshiruko",
    itemPrice: 5.00,
    itemDescription: "Red bean soup with mochi cakes. Don't tell Big Mom we serve this..."
  }, {
    imageUrl: chopper,
    itemTitle: "Emergency Rations",
    itemPrice: 5.00,
    itemDescription: "In the event of an extreme food shortage, Captain Straw Hat Luffy has given us permission to serve Tony Tony Chopper, a memeber of the straw hat crew as an emergency ration..."
  }];
  // loop through all the items in itemArr and create DOM elements for them
  for (let a = 0; a < itemArr.length; a++) {
    const currentItem = itemArr[a];
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-item-container');
    // make the menu item picture
    const itemPic = new Image();
    itemPic.classList.add('menu-item-pic');
    itemPic.src = currentItem.imageUrl;
    // make container for item title and description
    const itemDescriptionContainer = document.createElement('div');
    itemDescriptionContainer.classList.add('menu-item-description-container');
    // make the container for menu item name and price
    const itemTitleContainer = document.createElement('div');
    itemTitleContainer.classList.add('menu-item-title-container');
    const itemTitle = document.createElement('p');
    itemTitle.classList.add('menu-item-title');
    itemTitle.appendChild(document.createTextNode(`${currentItem.itemTitle}`));
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('menu-item-title');
    itemPrice.appendChild(document.createTextNode(`$${currentItem.itemPrice}`));
    // add the title and price to the container
    itemTitleContainer.appendChild(itemTitle);
    itemTitleContainer.appendChild(itemPrice);
    // make the menu item description
    const itemDescription = document.createElement('div');
    itemDescription.classList.add('menu-item-description');
    itemDescription.appendChild(document.createElement('hr'));
    itemDescription.appendChild(document.createTextNode(`${currentItem.itemDescription}`));
    // add the title and the description to the container
    itemDescriptionContainer.appendChild(itemTitleContainer);
    itemDescriptionContainer.appendChild(itemDescription);
    // add the image and the full title and description to the itemContainer
    itemContainer.appendChild(itemPic);
    itemContainer.appendChild(itemDescriptionContainer);
    // finally, append the itemContainer to the menuContainer
    menuContainer.appendChild(itemContainer);
  }

  return menuContainer;
}

export default createMenu;
