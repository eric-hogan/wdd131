const input = document.querySelector('#favchap');
const button = document.querySelector ('button');
const list = document.querySelector('#list')




button.addEventListener ('click', function() {
    if (input.value.trim() !== '') { 
        // create elements the list 
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = "";
        
        deleteButton.addEventListener ('click', function() {
            list.removeChild(li);
        });

        input.focus()

    } else { 
        console.log("ivalid input please try again");
        input.focus()}
});
        
        
