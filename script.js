let colorlist = ['yellow', 'red', 'black', 'white', 'blue', 'gray', 'green', 'orange', 'purple', 'brown'];

const blackBtn = document.querySelector('.black');
const whiteBtn = document.querySelector('.white');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');
const yellowBtn = document.querySelector('.yellow');
const grayBtn = document.querySelector('.gray');
const greenBtn = document.querySelector('.green');
const orangeBtn = document.querySelector('.orange');
const purpleBtn = document.querySelector('.purple');
const brownBtn = document.querySelector('.brown');

let selectedColor;

let currentSize;

const sizeInput = document.querySelector('.size-input');
const sizeBtn = document.querySelector('.submit-size');

let defaultSize = 15;
let newSize;

sizeBtn.addEventListener('click', function() {

    newSize = sizeInput.value;
    
})

sizeBtn.addEventListener('click', function() {

    currentSize = sizeInput.value;
    localStorage.setItem('size', currentSize);
    
})

blackBtn.addEventListener('click', function() {

    selectedColor = 'black';
    localStorage.setItem('currentColor', selectedColor);
    
});

whiteBtn.addEventListener('click', function() {

    selectedColor = 'white';
    localStorage.setItem('currentColor', selectedColor);
    
});

redBtn.addEventListener('click', function() {

    selectedColor = 'red';
    localStorage.setItem('currentColor', selectedColor);
    
});

blueBtn.addEventListener('click', function() {

    selectedColor = 'blue';
    localStorage.setItem('currentColor', selectedColor);
    
});

yellowBtn.addEventListener('click', function() {

    selectedColor = 'yellow';
    localStorage.setItem('currentColor', selectedColor);
    
});

grayBtn.addEventListener('click', function() {

    selectedColor = 'gray';
    localStorage.setItem('currentColor', selectedColor);
    
});

greenBtn.addEventListener('click', function() {

    selectedColor = 'green';
    localStorage.setItem('currentColor', selectedColor);
    
});

orangeBtn.addEventListener('click', function() {

    selectedColor = 'orange';
    localStorage.setItem('currentColor', selectedColor);
    
});

purpleBtn.addEventListener('click', function() {

    selectedColor = 'purple';
    localStorage.setItem('currentColor', selectedColor);
    
});

brownBtn.addEventListener('click', function() {

    selectedColor = '#59270b';
    localStorage.setItem('currentColor', selectedColor);
    
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
    if (mouseIsPressed) {
        noStroke()
        fill(localStorage.getItem('currentColor'));
        ellipse(mouseX, mouseY, defaultSize, defaultSize);
    } else {
        fill(0);
    }
    
}
