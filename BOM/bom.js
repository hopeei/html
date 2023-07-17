// ----------------------------- task 1
let value = window.open('', '', 'width=300, height=300');
setTimeout(() => {
  value.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
  value.moveTo(200, 200);
}, 4000);
setTimeout(() => {
  value.close();
}, 6000);

// ---------------------------------- task 2
function changeCSS() {
    let change = document.getElementById('text')
    change.style.color = 'orange';
    change.style.fontSize = '20px';
    change.style.fontFamily = 'Comic Sans MS';
}

// ---------------------------- task 3
document.getElementById('button1').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
  });
  document.getElementById('button2').addEventListener('dblclick', function() {
    document.body.style.backgroundColor = 'pink';
  });

  document.getElementById('button3').addEventListener('mousedown', function() {
    document.body.style.backgroundColor = 'brown';
  });
  document.getElementById('button3').addEventListener('mouseup', function() {
    document.body.style.backgroundColor = 'white';
  });
  document.getElementById('link').addEventListener('mouseenter', function() {
    document.body.style.backgroundColor = 'yellow';
  });
  document.getElementById('link').addEventListener('mouseleave', function() {
    document.body.style.backgroundColor = 'white';
  });

  // ------------------------- task 4
  function removeElement() {
    let selectElement = document.getElementById("list");
    let selectedValue = selectElement.value;

    if (selectedValue) {
      let optionToRemove = selectElement.querySelector('option[value="' + selectedValue + '"]');
      selectElement.removeChild(optionToRemove);
    }
  }

  // ------------------------ task 5
  function showMessage(event) {
    let messageElement = document.getElementById('message');

    if (event.type === 'click') {
      messageElement.innerText = 'I was pressed!';
    } else if (event.type === 'mouseover') {
      messageElement.innerText = 'Mouse on me!';
    } else if (event.type === 'mouseout') {
      messageElement.innerText = 'Mouse is not on me!';
    }
  }