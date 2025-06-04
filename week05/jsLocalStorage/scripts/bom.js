const input = document.querySelector('#favchap');
const button = document.querySelector ('button');
const list = document.querySelector('#list')

let chaptersArray = getChapterList() || []

chaptersArray.forEach(chapter => {
        displayList(chapter)
});


button.addEventListener ('click', function() {
    if (input.value != ''){ 
        displayList(input.value)
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus()};
    });


    function displayList(item) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';

        li.appendChild(deleteButton);
        list.appendChild(li);
        
        input.value = "";
        deleteButton.classList.add('delete');
        deleteButton.addEventListener ('click', function() {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }


function setChapterList(){
    localStorage.setItem('BomList', JSON.stringify(chaptersArray))
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('BomList'));
}


function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}




        




        
        
