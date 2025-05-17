const input = document.querySelector('#favchap');
const button = document.querySelector ('button');
const list = document.querySelector('#list')


list.append(li);

button.addEventListener ('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const delete_button = document.createElement('button');

        li.textContent = input.value

        list.appendChild(li);

    else 
    {input.focus};
});
        delete_button.textContent = '❌';
        li.append(delete_button);};
    
