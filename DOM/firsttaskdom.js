window.onload = function () {
  let listItems = document.querySelectorAll("#list li");
  let modalContent = "";

  modalContent += listItems[0].textContent + ", ";
  modalContent += listItems[listItems.length - 1].textContent + ", ";
  modalContent += listItems[1].textContent + ", ";
  modalContent += listItems[3].textContent + ", ";
  modalContent += listItems[2].textContent;
  let modal = document.getElementById("modal");
  modal.textContent = modalContent;
  modal.style.display = "block";
};


// -------------- task 2

const header = document.getElementById('header');
header.style.fontSize = '40px';
header.style.backgroundColor = 'aquamarine'

const firstParagraph = document.querySelector('.header_selected');
firstParagraph.style.fontWeight = 'bold';

const secondParagraph = document.querySelector('#myDiv p:nth-child(2)');
secondParagraph.style.color = 'red';

const thirdParagraph = document.querySelector('.header_emphatic');
thirdParagraph.style.textDecoration = 'underline';

const fourthParagraph = document.querySelector('.header_cursive');
fourthParagraph.style.fontStyle = 'italic';

const span = document.getElementById('span');
span.style.display = 'none';

const ul = document.getElementById('myList');
const parentElement = ul.parentNode;

const textNode = document.createTextNode('Makemehorizontal!');
parentElement.removeChild(ul);
parentElement.appendChild(textNode);

