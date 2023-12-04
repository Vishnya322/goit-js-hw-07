function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
createButton.classList.add('custom-button-create');
const destroyButton = document.querySelector('button[data-destroy]');
destroyButton.classList.add('custom-button-destroy');
const boxesContainer = document.querySelector('#boxes');

let boxesCreated = false; 

createButton.addEventListener('click', () => {
  if (boxesCreated) {
    destroyBoxes(); 
  }
  createBoxes(input.value); 
  boxesCreated = true;
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(newBox);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
