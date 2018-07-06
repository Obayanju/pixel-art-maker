// Select color input
const colorInput = document.querySelector("#colorPicker");
const color = colorInput.value;

// call makeGrid when user clicks the submit button
const submit = document.querySelector("input[type='button']");
submit.addEventListener("click", makeGrid);

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
  for (let y = 0; y < height; y++) {
    // table row is intitialized inside the for loop so as to create a different <tr> in each loop
    const tableRow = document.createElement("tr");
    grid.appendChild(tableRow);
    for (let x = 0; x < width; x++) {
      const tableColumn = document.createElement("td");
      tableRow.appendChild(tableColumn);
    }
  }
  // we should only be able to set color only after the grid is created
  setColor();
}

// set color when user clicks on a cell
function setColor() {
  // table would contain a NodeList. NB: NodeList is a static collection
  const tableCell = document.querySelectorAll("td");
  // loop through all table cells and add an event listener to listen for a click
  tableCell.forEach(function(currentCell) {
    currentCell.addEventListener("click", function(event) {
      currentCell.style.backgroundColor = color;
    });
  });
}