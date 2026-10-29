const container = document.querySelector("#container");
const button = document.querySelector(".numOfSquares");

container.style.width = "1004px"
container.style.height = "1004px"

const containerWidth = parseFloat(container.style.width);
const containerHeight = parseFloat(container.style.height);


button.addEventListener("click", () => {
    let numOfSquares = Number(prompt("Please enter the number square per side (1 - 100)", "10"));
    
    if(numOfSquares === null) return;

    if (!Number.isInteger(numOfSquares) || numOfSquares < 1 || numOfSquares > 100) {
        alert("Please enter a whole number from 1 to 100.");
        return;
    }

    container.replaceChildren();

    for(let i = 1; i < ((numOfSquares * numOfSquares) + 1); i++) {
    let grid = document.createElement("div");
    grid.style.width = `${(containerWidth - 4) / numOfSquares}px`;
    grid.style.height = `${(containerHeight - 4) / numOfSquares}px`;
    grid.style.border = "1px solid red";

    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "blue";
    })
    container.appendChild(grid);
}
});
