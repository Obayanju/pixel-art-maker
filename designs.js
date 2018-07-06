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
  // console.log(width, height);
  for (let y = 0; y < height; y++) {
    // table row is intitialized inside the for loop so as to create a different <tr> in each loop
    const tableRow = document.createElement("tr");
    grid.appendChild(tableRow);
    for (let x = 0; x < width; x++) {
      const tableColumn = document.createElement("td");
      tableRow.appendChild(tableColumn);
    }
  }
}

// call makeGrid when user clicks the submit button
const submit = document.querySelector("input[type='button']");
submit.addEventListener("click", makeGrid);