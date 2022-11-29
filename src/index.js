import { createBase } from "./pageLoad";
import { createMenu } from "./menu";
import { createContact } from "./contact";

// console.log("this is a test");

function createButtons() {
  const webContainer = document.querySelector(".webContainer");
  const buttonContainer = document.createElement("div");
  const content = document.getElementById("content");
  buttonContainer.classList.add("buttonContainer");
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", function () {
    createBase();
  });
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", function () {
    createMenu();
  });
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact Us";
  contactBtn.addEventListener("click", function () {
    createContact();
  });
  buttonContainer.appendChild(homeBtn);
  buttonContainer.appendChild(menuBtn);
  buttonContainer.appendChild(contactBtn);
  webContainer.appendChild(buttonContainer);
  webContainer.appendChild();
}
createButtons();

createBase();
