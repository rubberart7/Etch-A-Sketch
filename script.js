const defaultSize = 550;
// const rows = 16;
// const cols = 16;
const defaultSquares = 16;

const sketchArea = document.getElementById("sketch-area");

function setGridSize(squares) {
    for (let i = 0; i < (squares * squares); i++) {
        sketchArea.style.width = `${defaultSize}px`;
        sketchArea.style.height = `${defaultSize}px`;
        const gridCell = document.createElement("div");
        gridCell.style.width = `${(defaultSize / squares)}px`;
        gridCell.style.height = `${(defaultSize / squares)}px`;
        //try to figure out this top part later for why
        gridCell.classList.add("cell");
    
    
        gridCell.addEventListener("mouseover", function(){
            gridCell.style.backgroundColor = "darkblue";
        });
    
        sketchArea.appendChild(gridCell);
        console.log(`Added cell number ${i}`);
    }
}

function removeGridCells() {
    while(sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}


setGridSize(defaultSquares);

sizeSetterButton = document.querySelector(".size-button");
sizeSetterButton.addEventListener("click", function() {
    const enteredSquares = document.getElementById("size-input").value;
    removeGridCells();
    setGridSize(enteredSquares);
});

resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function(){
    removeGridCells();
    setGridSize(defaultSquares);
});





