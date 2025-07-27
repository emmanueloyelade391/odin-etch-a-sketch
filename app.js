//The variable and loop creates a 16 x 16 grid
const gridContainer = document.querySelector("#grid-container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
     const div = document.createElement("div");
     div.classList.add("tile");
     gridContainer.appendChild(div);
  }
}

//calculateTileNumber calculates the width for all tiles in the 16 x 16 grid
//so that each side of the grid has exactly 16 tiles.
function calculateTileNumber() {
  const tiles = document.querySelectorAll(".tile");
  const gridDimensions = gridContainer.getBoundingClientRect();
  const gridWidth = gridDimensions.width;
  const tileNumberCalculation = gridWidth / 16;
  tiles.forEach((tile) => {
    tile.style.width = `${tileNumberCalculation}px`;
    tile.style.height = `${tileNumberCalculation}px`;
  });
}

//changeTileColor changes the color of the tile that the mouse hovers over.
function changeTileColor() {
  const tileColorChanger = document.querySelectorAll(".tile");
  tileColorChanger.forEach((tile) => {
    tile.addEventListener("mouseover", (event) => {
      event.target.classList.add("modified-tile");
    })
  });
}

//calculateNewTileNumber calculates the width of each tile in the new grid 
//that the user makes so that each side of the new grid has exactly the number
//of tiles the user inputs per side.
function calculateNewTileNumber(tileNumber) {
      const tiles = document.querySelectorAll(".tile");
      const gridDimensions = gridContainer.getBoundingClientRect();
      const gridWidth = gridDimensions.width;
      const tileNumberCalculation = gridWidth / tileNumber;
      tiles.forEach((tile) => {
        tile.style.width = `${tileNumberCalculation}px`;
        tile.style.height = `${tileNumberCalculation}px`;
      });
    }

calculateTileNumber();
changeTileColor();

//The variable and event listener asks the user for a valid number of tiles
//and then calls the calculateNewTileNumber function.
const gridSizeButton = document.querySelector("#grid-size-button");
gridSizeButton.addEventListener("click", () => {
  let gridChild = gridContainer.lastElementChild;
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
    while(gridChild) {
      gridContainer.removeChild(gridChild);
      gridChild = gridContainer.lastElementChild;
    }

    for (let i = 0; i < userTiles; i++) {
      for (let j = 0; j < userTiles; j++ ) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        gridContainer.appendChild(tile);
      }
    }

    calculateNewTileNumber(userTiles);
    changeTileColor();
  }
});

const resetGrid = document.querySelector("#reset-grid");
resetGrid.addEventListener("click", () => {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.classList.remove("modified-tile");
  })
})