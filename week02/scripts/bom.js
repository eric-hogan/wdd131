const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#scripture_list');

const listItem = document.createElement('li');
const deleteButton = document.createElement('button');


button.addEventListener('click',() => {
    if (input.value.trim() !== ''){
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = input.value;
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
            input.focus();
        })

        listItem.append(deleteButton);
        list.append(listItem)
            
        input.value = '';
        input.focus();
    }
    else {input.focus()};
})