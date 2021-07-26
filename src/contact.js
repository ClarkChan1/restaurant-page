function createContact() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  // add the main description
  const description = document.createElement('p');
  description.classList.add('contact-description');
  description.appendChild(document.createTextNode('Bring your friends and family along with a healthy appetite and come visit Baratie today! (Customers who were recently starving eat free! Devil Fruit users get a 20% discount if they can swim a lap around Baratie!)'));
  description.appendChild(document.createElement('hr'));
  // add the phone number
  const phoneNumber = document.createElement('p');
  phoneNumber.classList.add('phone-number');
  phoneNumber.appendChild(document.createTextNode('Phone: 1-800-Team-Sanji'));
  phoneNumber.appendChild(document.createElement('hr'));
  // add the google map location
  const location = document.createElement('iframe');
  location.classList.add('location');
  location.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30634007.87388524!2d-121.16438940000002!3d20.403375450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4bd65cc38c57%3A0x67b8d980a619503d!2sBaratie!5e0!3m2!1sen!2sus!4v1627272957658!5m2!1sen!2sus";
  location.allowfullscreen = "";
  location.loading = "lazy";
  // add all the componenets to contactContainer
  contactContainer.appendChild(description);
  contactContainer.appendChild(phoneNumber);
  contactContainer.appendChild(location);
  return contactContainer;
}

export default createContact;
