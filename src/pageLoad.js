function createBase() {
  const bodyContainer = document.getElementById("content");
  const header = document.createElement("div");
  header.textContent = "Ian's Spaghetti Parlor";
  header.classList.add("restaurantHeader");
  const pic = document.createElement("img");
  pic.src = "../img/dump.jpg";
  pic.classList.add("dumpImg");
  const bodyText = document.createElement("div");
  bodyText.textContent =
    "Woah this restaurant is so good I almost forgot it's called a spaghetti parlor when all they serve is dumplings!";

  bodyContainer.appendChild(header);
  bodyContainer.appendChild(pic);
  bodyContainer.appendChild(bodyText);
}
export { createBase };
