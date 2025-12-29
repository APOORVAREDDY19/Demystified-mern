const input = document.querySelector('#noteInput');
const addBtn = document.querySelector('#addBtn');
const notesList = document.querySelector('#notesList');

addBtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (!value) return;

    const li = document.createElement('li');
    li.textContent = value;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => li.remove());

    li.appendChild(delBtn);
    notesList.appendChild(li);

    input.value = '';
});
