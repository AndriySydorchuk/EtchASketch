const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid');

let gridItems = [];

let gridSize = 16;

createGrid();

function calcGridItemSize(gridWidth) {
    return gridWidth / Math.sqrt(gridSize);
}

const askSizeBtn = document.querySelector('.size-btn');

askSizeBtn.addEventListener('click', e => {
    do {
        gridSize = prompt("Enter a new grid size (a single value between 1 and 100): ");
        
        if(gridSize === null) return; //cancel button is pressed

        gridSize = Number(gridSize);
    } while(gridSize <= 0 || gridSize > 100);

    createGrid();
})

function deleteGrid() {
    gridItems.forEach(item => item.remove());
    gridItems = [];
}

function createGrid() {
    deleteGrid();

    for (let i = 0; i < gridSize; i++) {
        const gridItem = document.createElement('div');

        const gridItemSize = calcGridItemSize(gridContainer.offsetWidth);

        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = 'auto';
        
        gridItem.style.border = '1px solid black';

        gridItems.push(gridItem);
        gridContainer.appendChild(gridItem);
    }

    setHoverEffect();
}

function setHoverEffect() {
    gridItems.forEach(item => item.addEventListener('mouseover', e => {
        if(item.style.backgroundColor !== 'black') {
            item.style.backgroundColor = 'black';
        }
    }));
}

const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', e => {
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
    });
});