const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid');

let gridItems = [];

let gridSize = 16;

let pickedColor = 'black';

createGrid();
setHoverEffect(pickedColor);

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
    setHoverEffect(pickedColor);
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
}

function setHoverEffect(color) {
    gridItems.forEach(item => item.addEventListener('mouseover', e => {
        if(item.style.backgroundColor !== color) {
            item.style.backgroundColor = color;
        }
    }));
}

const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', e => {
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
    });
});

const colorPicker = document.querySelector('#color-picker');

colorPicker.addEventListener('change', e => {
    toggleBtnStyle(e, colorBtn, rainbowBtn);
    pickedColor = e.target.value;
    setHoverEffect(pickedColor);
});

const rainbowBtn = document.querySelector('.rainbow-btn');

rainbowBtn.addEventListener('click', e => {
    toggleBtnStyle(e, colorBtn, rainbowBtn);

    gridItems.forEach(item => item.addEventListener('mouseover', e => {
        item.style.backgroundColor = getRandomColor();
    }));
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const colorBtn = document.querySelector('.color-btn');

colorBtn.addEventListener('click', e => {
    toggleBtnStyle(e, colorBtn, rainbowBtn);

    setHoverEffect(colorPicker.value);
});

function toggleBtnStyle(event, colorBtn, rainbowBtn) {
    if(event.target.classList.contains('rainbow-btn')) {
        //click on rainbow
        colorBtn.classList.remove('black-btn');
        colorBtn.classList.add('white-btn');
        rainbowBtn.classList.remove('white-btn');
        rainbowBtn.classList.add('rainbow');
    } else {
        //click on color
        rainbowBtn.classList.remove('rainbow');
        rainbowBtn.classList.add('white-btn');
        colorBtn.classList.remove('white-btn');
        colorBtn.classList.add('black-btn');
    }

}