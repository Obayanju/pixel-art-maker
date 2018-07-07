// call makeGrid when user clicks the submit button
const submit = document.querySelector("input[type='submit']");
submit.addEventListener("click", makeGrid);

// Select size input
function getSize() {
  const height = document.querySelector("#inputHeight").value;
  const width = document.querySelector("#inputWidth").value;
  return [width, height];
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // prevent submit button from reloading page
  event.preventDefault();
  const grid = document.querySelector("table");
  // clear any previously created table
  grid.innerHTML = "";
  // get the users size input
  const size = getSize();
  const width = size[0];
  const height = size[1];
  for (let y = 0; y < height; y++) {
    // table row is intitialized inside the for loop so as to create a different <tr> in each loop
    const tableRow = document.createElement("tr");
    grid.appendChild(tableRow);
    for (let x = 0; x < width; x++) {
      const tableColumn = document.createElement("td");
      tableRow.appendChild(tableColumn);
    }
  }
  grid.addEventListener("click", setCellColor);
  // we should only be able to set color only after the grid is created
  // setColor();
}

// function to run when user clicks on a cell
function setCellColor(event) {
  const colorPicker = document.querySelector("input[type='color']");
  event.target.style.backgroundColor = colorPicker.value;
  // console.log(event.target);
}