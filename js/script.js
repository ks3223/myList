const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');
const input2 = document.querySelector('#search');
const modal = document.querySelector('.modal');


/////////////////////////////////////////////////////////////////////////////////////////
function addTask() {
    let newItem = document.createElement('li');
    newItem.classList.add('nodots');
    newItem.textContent = nameInput.value;
    list.appendChild(newItem);
    newItem.classList.add('item');

    const deleteButton = document.createElement('button');
    newItem.appendChild(deleteButton);
    deleteButton.classList.add('btn2');
    deleteButton.textContent = 'X';

    
    
        deleteButton.addEventListener('click', () => {
            
            const cansel = document.querySelector('#deleteTask');
            modal.classList.remove('hidden');
            cansel.addEventListener('click', () => {
                modal.classList.add('hidden');
                list.removeChild(newItem);
                
            })
            const absoluteDelete = document.querySelector('#canselTask');
            absoluteDelete.addEventListener('click', () => {
                modal.classList.add('hidden');
                

            })
        })

    newItem.addEventListener('click', () => {
        newItem.classList.toggle('strike');
    })

    nameInput.value = '';
}
myButton.addEventListener('click', addTask);

nameInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        addTask();
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
function isMatching(full, chunk) {
    let result = full.toLowerCase().indexOf(chunk.toLowerCase()) != -1 ? true : false;
    return result;
}
function search() {
    const items = document.querySelectorAll('.item');
    let value = input2.value;
    for (let item of items) {
        if (isMatching(item.textContent, value) === false) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        };
    }


}
input2.addEventListener('keyup', () => {
    search();
})
//////////////////////////////////////////////////////////////////////////////////////////////////////