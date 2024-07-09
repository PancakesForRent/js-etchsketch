const body = document.querySelector("body");
const container  = document.querySelector(".container");
let numOfSquares = 16; // default size
const containerSize = Number(window.getComputedStyle(container).getPropertyValue("max-width").slice(0,-2));


const canvasButtonDiv = document.createElement("div");
canvasButtonDiv.setAttribute("class", "canvas-buttons");
const canvasButton = document.createElement("button");
canvasButton.textContent = "Change canvas size";
const canvasReset = document.createElement("button");
canvasReset.textContent = "Reset canvas";
canvasButtonDiv.appendChild(canvasButton);
canvasButtonDiv.appendChild(canvasReset);
body.appendChild(canvasButtonDiv);

canvasButton.addEventListener("click", () => {
    let size = Number(prompt("Enter the size of your canvas box"));
    if(size > 100 || size <= 0){
        alert("Invalid size input!");
    }else{
        numOfSquares = size;
        createGrid(numOfSquares);
    }
});

canvasReset.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
        box.style.opacity = 1;
    })
});



function createGrid(numSize) {
    container.innerHTML = "";
    for(let i = 0; i < (numSize * numSize); i++){
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        let height = Math.floor(containerSize/numSize);
        let width = Math.floor(containerSize/numSize);
        box.style.height = height + "px";
        box.style.width = width + "px";
        box.style.opacity = 1;
        container.appendChild(box);

        box.addEventListener("mouseover", () => {
            box.style.opacity -= 0.1;
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
    }
}

createGrid(numOfSquares);