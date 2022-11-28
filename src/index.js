// import { createBase } from "./pageLoad";

console.log("this is a test");

function createBase() {
  const bodyContainer = document.querySelector(".content");
  const header = document.createElement("h1");
  header.textContent = "Ian's Spaghetti Parlor";
  header.classList.add("restaurantHeader");

  bodyContainer.appendChild(header);
}

createBase();
