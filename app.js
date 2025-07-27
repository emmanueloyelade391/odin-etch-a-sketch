const gridContainer = document.querySelector("#grid-container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
     const div = document.createElement("div");
     div.classList.add("tile");
     gridContainer.appendChild(div);
  }
}

const tiles = document.querySelectorAll(".tile");

function calculateTileWidth() {
  const gridDimensions = gridContainer.getBoundingClientRect();
  const gridWidth = gridDimensions.width;
  const tileWidthCalculation = gridWidth / 16;
  tiles.forEach((tile) => {
    tile.style.width = `${tileWidthCalculation}px`;
    tile.style.height = `${tileWidthCalculation}px`;
  });
}

calculateTileWidth();

const tileColorChanger = document.querySelectorAll(".tile");

tileColorChanger.forEach((tile) => {
  tile.addEventListener("mouseover", (event) => {
    event.target.classList.add("modified-tile");
  })
});

const gridSizeButton = document.querySelector("#grid-size-button");
gridSizeButton.addEventListener("click", () => {
  const userTiles = +prompt(
    "Input the number of tiles you want per side of the grid in a range between 1 - 100:"
  );
  if (userTiles < 1 ) {
    alert("Error. Please input a number that is bigger than or equal to 1.");
  } else if (userTiles > 100) {
    alert("Error. Please input a number that is less than 100.");
  } else if (Number.isNaN(userTiles)) {
    alert("Error. Please input a real number that is between 1 and 100.");
  }

  if (1 <= userTiles && userTiles <= 100) {
    const newGridContainer = document.createElement("div");
    newGridContainer.id = "new-grid-container";
    gridContainer.replaceWith(newGridContainer);
    
    //body.appendChild(newGridContainer);
    
    for (let i = 0; i < userTiles; i++) {
      for (let j = 0; j < userTiles; i++) {
        const div = createElement("div");
        div.style.classList.add("tile");
        newGridContainer.appendChild(div);
      }
    }

    const newTiles = document.querySelector(".tile");

    //body.appendChild(newGridContainer);
    console.log(newGridContainer);
  }
});