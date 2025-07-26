const gridContainer = document.querySelector("#grid-container");
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
     const div = document.createElement("div");
     div.classList.add("tile");
     gridContainer.appendChild(div);
  }
}

const tiles = document.querySelector(".tile");

function calculateGridWidth() {
  const tileDimensions = tiles.getBoundingClientRect();
  const tileWidth = tileDimensions.width;
  const gridWidthCalculation = tileWidth * 16;
  gridContainer.style.width = `${gridWidthCalculation}px`;
}

calculateGridWidth();