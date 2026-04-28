const textInput = document.getElementById('textValue');
const addButton = document.getElementById('add');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
    const taskValue = textInput.value.trim();

    if(taskValue === '') {
        console.log("Строка пуста");
        alert("Пожалуйста, введите текст задачи");
        return;
    }

    const createTask = document.createElement('li');
    createTask.classList.add('list__tasks--task');
    createTask.innerHTML = `
        <p class="task-text">${taskValue}</p>
        <input id="check" type="checkbox" />
        <button class="btn__remove" id="removeCheckTask">Удалить</butto>
    `;

    list.append(createTask);
    taskValue.value = '';
    textInput.value = '';
});

list.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn__remove')) {
        const liElement = event.target.closest('li');
        liElement.remove();
    }
   
});

list.addEventListener('change', (event) => {
    if(event.target.type === 'checkbox') {
        const liElement = event.target.closest('li');

        if(event.target.checked) {
            liElement.classList.add('done');
        } else {
            liElement.classList.remove('done');
        }
    }
})