const itemForm = document.querySelector('#item-form')
const itemInput = document.querySelector('#item-input')
const itemList = document.querySelector('#item-list')

function addItem (e){
    e.preventDefault()
    const newItem = itemInput.value;
    // validate input
    if(newItem === ''){
        alert('Please enter an item')
    }
    // create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    //  create button
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.append(li);
    itemInput.value = ''

}
// function createButton
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    // create icon
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

// function createIcon
function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// Event Listeners
itemForm.addEventListener('submit', addItem);