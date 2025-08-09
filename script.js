const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid');

const gridItems = [];

const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const gridItemSize = calcGridItemSize(gridContainer.offsetWidth);

    gridItem.style.width = `${gridItemSize}px`;
    gridItem.style.height = 'auto';
    
    gridItem.style.backgroundColor = 'lightgray';
    gridItem.style.border = '1px solid black';

    gridItems.push(gridItem);
    gridContainer.appendChild(gridItem);
}

console.log(calcGridItemSize(gridContainer.offsetWidth));

function calcGridItemSize(gridWidth) {
    return gridWidth / Math.sqrt(GRID_SIZE);
}