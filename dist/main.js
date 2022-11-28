function createBase() {
  const bodyContainer = document.getElementById("content");
  const header = document.createElement("h1");
  header.textContent = "Ian's Spaghetti Parlor";
  header.classList.add("restaurantHeader");

  bodyContainer.appendChild(header);
}

createBase();
