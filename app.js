const gridContainer = document.querySelector("#grid-container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
     const div = document.createElement("div");
     div.classList.add("tile");
     gridContainer.appendChild(div);
  }
}

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

function changeTileColor() {
  const tileColorChanger = document.querySelectorAll(".tile");
  tileColorChanger.forEach((tile) => {
    tile.addEventListener("mouseover", (event) => {
      event.target.classList.add("modified-tile");
    })
  });
}


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