// Get references to HTML elements
const dynamicTextElement = document.getElementById('dynamicText');
const styledElement = document.getElementById('styledElement');
const addElementBtn = document.getElementById('addElementBtn');
const removeElementBtn = document.getElementById('removeElementBtn');
const container = document.getElementById('container');

let newElementCounter = 1;
let lastAddedElement = null;

// Function to change the text content
function changeText() {
    dynamicTextElement.textContent = 'The text has been changed dynamically by JavaScript!';
}

// Function to modify CSS styles
function applyStyles() {
    styledElement.style.backgroundColor = 'lightblue';
    styledElement.style.color = 'darkblue';
    styledElement.style.padding = '15px';
    styledElement.style.border = '1px solid blue';
}

// Function to add a new element
function addElement() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `New Paragraph Element ${newElementCounter}`;
    newParagraph.id = `newParagraph-${newElementCounter}`;
    container.appendChild(newParagraph);
    lastAddedElement = newParagraph;
    newElementCounter++;
}

// Function to remove the last added element
function removeElement() {
    if (lastAddedElement) {
        container.removeChild(lastAddedElement);
        lastAddedElement = null;
    } else {
        alert('No element has been added yet, or the last one has been removed.');
    }
}

// Call the functions to demonstrate initial changes
changeText();
applyStyles();

// Add event listeners to the buttons
addElementBtn.addEventListener('click', addElement);
removeElementBtn.addEventListener('click', removeElement);
