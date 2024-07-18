


const gridContainer = document.querySelector(".grids-container")

for (let i = 0; i < 16 * 16; i++) {
    const boxDiv = document.createElement("div");
    boxDiv.classList.add("grid-item")
    gridContainer.appendChild(boxDiv);
    console.log(`Added grid number ${i}`);
}