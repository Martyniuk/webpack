import './theme/style.css';

console.log('<-------------- hello from index.js');

function addChild() {
    const element = document.createElement('div');
    element.innerHTML = 'Text';

    return element;
}

document.body.appendChild(addChild());