// Select color input
const colorInput = document.querySelector("#colorPicker");
const color = colorInput.value;

// Select size input
function getSize() {
  const height = document.querySelector("#inputHeight").value;
  const width = document.querySelector("#inputWidth").value;
  return [width, height];
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // get the users size input
  const size = getSize();
  const width = size[0];
  const height = size[1];
  const grid = document.querySelector("table");
  const tableRow = document.createElement("tr");
  const tableColumn = document.createElement("td");
  console.log(width, height);
  for (let y = 0; y < height; y++) {
    grid.appendChild(tableRow);
    for (let x = 0; x < width; x++) {
      tableRow.appendChild(tableColumn);
    }
  }
}

// call makeGrid when user clicks the submit button
const submit = document.querySelector("input[type='button']");
submit.addEventListener("click", makeGrid);