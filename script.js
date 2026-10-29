const container = document.querySelector("#container");

for(i = 1; i < 257; i++) {
    let grid = document.createElement("div");
    grid.style.width = "62.5px";
    grid.style.height = "62.5px";
    grid.style.border = "1px solid red";
    container.appendChild(grid);
}