

function addToDo(event) {
    event.preventDefault();
    let list = document.querySelector('ul'); //grabs first item in html/dom with the ul tag

    let item = document.createElement('li'); //creates a new list item in html that I can work with

    let text = document.getElementById('item').value; // targets the id 'item' which selects a input tag and then .value grabs whatever the user puts into the input box
    
    
    item.innerText = text; //sets
   item.addEventListener('click', toggleToDo)
    let deleteButton = document.createElement('button');
   
    deleteButton.innerText = 'X'
  
    deleteButton.addEventListener('click', removeToDo)
  
    item.appendChild(deleteButton);
   
    list.appendChild(item); // 
}

function removeToDo(event) {
    event.target.parentNode.remove();
}

function toggleToDo(event) {
    let value = event.target.getAttribute('aria-checked')
    if (value !== 'true') {
        event.target.setAttribute('aria-checked', 'true')
        
    } else {
        event.target.setAttribute('aria-checked', 'false')
    }
}

document.querySelector('button').addEventListener('click', addToDo) //