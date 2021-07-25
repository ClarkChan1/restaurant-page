import sashimi from './images/sashimi.jpg';
import seafoodRisotto from './images/seafood-risotto.jpg';
import meatballs from './images/meatballs.jpg';
import soba from './images/soba-noodles.jpg';
import meat from './images/meat.png';
import oshiruko from './images/oshiruko.png';
import chopper from './images/chopper.png';

function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  // make the array with objects that have the information for each menu item
  let itemArr = [{
    imageUrl: sashimi,
    itemTitle: "Sashimi",
    itemPrice: 15.00,
    itemDescription: "This dish is blah blah blah of the east blue, a classic dish that..."
  }, {
    imageUrl: seafoodRisotto,
    itemTitle: "Seafood Risotto",
    itemPrice: 12.00,
    itemDescription: "This dish is blah blah blah of the east blue, a classic dish that...This dish is blah blah blah of the east blue, a classic dish that...This dish is blah blah blah of the east blue, a classic dish that..."
  }, {
    imageUrl: meatballs,
    itemTitle: "Signature Meatballs",
    itemPrice: 15.00,
    itemDescription: "This dish is blah blah blah of the east blue, a classic dish that..."
  }, {
    imageUrl: meat,
    itemTitle: "Mystery Meat",
    itemPrice: 10.00,
    itemDescription: "This dish is blah blah blah of the east blue, a classic dish that..."
  }, {
    imageUrl: soba,
    itemTitle: "Soba Noodles",
    itemPrice: 8.00,
    itemDescription: "This dish is blah blah blah of the east blue, a classic dish that..."
  }, {
    imageUrl: oshiruko,
    itemTitle: "Oshiruko",
    itemPrice: 5.00,
    itemDescription: "This dish is blah blah blah of the east blue, a classic dish that..."
  }, {
    imageUrl: chopper,
    itemTitle: "Emergency Rations",
    itemPrice: 5.00,
    itemDescription: "This dish is blah blah blah of the east blue, a classic dish that..."
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
