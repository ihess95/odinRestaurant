function createMenu() {
  const bodyContainer = document.getElementById("content");
  const header = document.createElement("div");
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menuGrid");
  header.textContent = "Ian's Menu Parlor";
  header.classList.add("restaurantHeader");

  function createFood(foodType, foodName, foodImg, foodDesc, foodCost) {
    // const foodCard = foodType + "Card";
    const foodCard = document.createElement("div");
    const foodTitle = document.createElement("div");
    const foodPic = document.createElement("img");
    const foodText = document.createElement("div");
    const foodPrice = document.createElement("div");

    foodCard.classList.add(foodType + "Card");

    foodTitle.classList.add(foodType + "Title");
    foodTitle.textContent = foodName;

    foodPic.src = foodImg;
    foodPic.classList.add(foodType + "Img");

    foodText.classList.add(foodType + "Desc");
    foodText.textContent = foodDesc;

    foodPrice.classList.add(foodType + "Price");
    foodPrice.textContent = foodCost;

    foodCard.appendChild(foodTitle);
    foodCard.appendChild(foodPic);
    foodCard.appendChild(foodText);
    foodCard.appendChild(foodPrice);
    menuGrid.appendChild(foodCard);
  }
  //   const dumpCard = document.createElement("div");
  //   dumpCard.classList.add("dumpCard");
  //   const dump = document.createElement("img");
  //   dump.src = "../img/dump.jpg";
  //   dump.classList.add("dumpImg");
  //   const dumpText = document.createElement("div");
  //   dumpText.textContent = "Boy Howdy would ya look at these dumps";

  while (bodyContainer.hasChildNodes()) {
    bodyContainer.removeChild(bodyContainer.firstChild);
  }
  bodyContainer.appendChild(header);
  bodyContainer.appendChild(menuGrid);
  //   menuGrid.appendChild(dumpCard);
  //   dumpCard.appendChild(dump);
  //   dumpCard.appendChild(dumpText);
  createFood(
    "dump",
    "Dumplings",
    "../img/dump.jpg",
    "Boy Howdy Look at these dumps",
    "$2.99 a pop"
  );
  createFood(
    "lasagna",
    "Lasagna",
    "../img/lasagna.png",
    "Hoo boy is that a whole lasagn?",
    "Gimme 14.99 for a 'sagn'"
  );
  createFood(
    "pancakes",
    "Pancakes",
    "../img/pancakes.jpeg",
    "The pancakes are fine, I guess...",
    "Pancakes are on the house, callem $0.00"
  );
  createFood(
    "pizza",
    "Pizza Boy",
    "../img/pizza.jpeg",
    "This doesn't even need to be on the menu, you already knew we had pizza",
    "Pizza's pizza, I need a buck fifty a schlice"
  );
}

export { createMenu };
