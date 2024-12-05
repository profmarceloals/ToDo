//Selecionar o elementos do DOM
var newTaskInput = document.getElementById('new-task');
var addTaskButton= document.getElementById('add-task');
var taskList = document.getElementById('task-list');

//Adicionar evento de clique no botão de adicionar tarefa
addTaskButton.addEventListener('click', addTask);

//Função para adicionar nova tarefa
function addTask(){
    var taskText = newTaskInput.value.trim();

    if(taskText !== ''){
        var taskItem = document.createElement('li');

        //Criar elemento de texto para tarefa
        var taskItemText = document.createElement('span');
        taskItemText.textContent = taskText;
        taskItem.appendChild(taskItemText);

        //Criar o botão de concluir tarefa
        var completButton = document.createElement('button');
        completButton.textContent = 'Concluir';
        completButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed')
        });
        taskItem.appendChild(completButton);

        //Cria o botão de editar tarefa
        var editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton. addEventListener('click', () => {
            var newTaskText = prompt('Edite sua tarefa:', taskItemText.textContent);
            if(newTaskText !== ''){
                taskItemText.textContent = newTaskText.trim();
            }
        });
        taskItem.appendChild(editButton);

        //Criar botão apagar tarefa
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Apagar";
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        })
        taskItem.appendChild(deleteButton);

        //Adicionar nova tarefa a lista
        taskList.appendChild(taskItem);

        //Limpar o campo deentrada da nova tarefa
        newTaskInput.value = '';
    }
}
        //Adicionar evento de pressionara tecla Enter no campo de entrada da nova tarefa
        newTaskInput.addEventListener('keypress', (event) => {
            if(event.key === 'Enter'){
                addTask();
            }
        })