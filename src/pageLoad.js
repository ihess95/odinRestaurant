function createBase() {
  const bodyContainer = document.getElementById("content");
  const header = document.createElement("div");
  header.textContent = "Ian's Spaghetti Parlor";
  header.classList.add("restaurantHeader");
  const pic = document.createElement("img");
  pic.src = "../img/chef.jpg";
  pic.classList.add("dumpImg");
  const bodyText = document.createElement("div");
  bodyText.classList.add("description");
  bodyText.textContent =
    "Woah this restaurant is so good I almost forgot it's called a spaghetti parlor when all they serve is dumplings!";

  while (bodyContainer.hasChildNodes()) {
    bodyContainer.removeChild(bodyContainer.firstChild);
  }
  bodyContainer.appendChild(header);
  bodyContainer.appendChild(pic);
  bodyContainer.appendChild(bodyText);
}
export { createBase };
