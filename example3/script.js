var addNewButton = document.querySelector('.add-new');

addNewButton.addEventListener('click', createButton);

function showAlert() {
  alert('You clicked me!');
}

function createButton() {
  var newButton = document.createElement('button');
  newButton.className = 'click-me';
  newButton.innerText = "New click me button!";
  parent.appendChild(newButton);
}

var parent = document.querySelector('.parent');

parent.addEventListener('click', function(event) {
  if (event.target.className === 'click-me') {
    alert(event.target.className);
  }
});
