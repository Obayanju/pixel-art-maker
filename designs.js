// Select color input
const colorInput = document.querySelector("#colorPicker");
const color = colorInput.value;

// Select size input
const width = document.querySelector("#inputWidth").value;
const height = document.querySelector("#inputHeight").value;

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  const grid = document.querySelector("table");
  // console.log(grid);
  for (let y = 0; y < height; y++) {
    tableRow = document.createElement("tr");
    grid.appendChild(tableRow);
    for (let x = 0; x < width; x++) {
      tableColumn = document.createElement("td");
      grid.appendChild(tableColumn);
    }
  }
}
