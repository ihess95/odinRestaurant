function createBase() {
  const bodyContainer = document.getElementById("content");
  const header = document.createElement("div");
  header.textContent = "Ian's Spaghetti Parlor";
  header.classList.add("restaurantHeader");

  bodyContainer.appendChild(header);
}

// export { createBase };
