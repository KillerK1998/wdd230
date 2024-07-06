const input = document.getElementById('favchap');
const addButton = document.querySelector('button');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
    
    const chapter = input.value.trim();

  
    if (chapter !== '') {
        
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete');
        li.textContent = chapter;
        li.appendChild(deleteButton);

        list.appendChild(li);
    
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });
 
        input.value = '';
        input.focus();
    } else {
       
        input.focus();
    }
});
