const body = document.createElement('body');
const main = document.createElement('main');
main.classList.add('mainClass', 'check', 'item');
const div = document.createElement('div');
div.id = 'myDiv';
const paragraph = document.createElement('p');
paragraph.textContent = 'First paragraph';
div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body);