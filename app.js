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
})