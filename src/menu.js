import sashimi from './images/sashimi.jpg';

function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const itemContainer = document.createElement('div');
  itemContainer.classList.add('menu-item-container');
  // make the menu item picture
  const itemPic = new Image();
  itemPic.classList.add('menu-item-pic');
  itemPic.src = sashimi;
  // make container for item title and description
  const itemDescriptionContainer = document.createElement('div');
  itemDescriptionContainer.classList.add('menu-item-description-container');
  // make the container for menu item name and price
  const itemTitleContainer = document.createElement('div');
  itemTitleContainer.classList.add('menu-item-title-container');
  const itemTitle = document.createElement('p');
  itemTitle.classList.add('menu-item-title');
  itemTitle.appendChild(document.createTextNode('Sashimi'));
  const itemPrice = document.createElement('p');
  itemPrice.classList.add('menu-item-title');
  itemPrice.appendChild(document.createTextNode('$15.00'));
  // add the title and price to the container
  itemTitleContainer.appendChild(itemTitle);
  itemTitleContainer.appendChild(itemPrice);
  // make the menu item description
  const itemDescription = document.createElement('div');
  itemDescription.classList.add('menu-item-description');
  itemDescription.appendChild(document.createElement('hr'));
  itemDescription.appendChild(document.createTextNode('This dish is blah blah blah of the east blue, a classic dish that...'));
  // add the title and the description to the container
  itemDescriptionContainer.appendChild(itemTitleContainer);
  itemDescriptionContainer.appendChild(itemDescription);
  // add the image and the full title and description to the itemContainer
  itemContainer.appendChild(itemPic);
  itemContainer.appendChild(itemDescriptionContainer);
  // finally, append the itemContainer to the menuContainer
  menuContainer.appendChild(itemContainer);
  return menuContainer;
}

export default createMenu;
