// import { createBase } from "./pageLoad";

// console.log("this is a test");

// createBase();
function createButtons() {
  const webContainer = document.querySelector(".webContainer");
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact Us";
  buttonContainer.appendChild(homeBtn);
  buttonContainer.appendChild(menuBtn);
  buttonContainer.appendChild(contactBtn);
  webContainer.appendChild(buttonContainer);
  webContainer.appendChild(document.getElementById("content"));
}
createButtons();
