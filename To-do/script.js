const form = document.getElementById('tarefas-form');
const listaTarefas = document.getElementById('tarefas');

form.onsubmit = function(e) {
    e.preventDefault();
    const inputField = document.getElementById('tarefa-texto');
    adionarTarefa(inputField.value);
    form.reset();
};

function adionarTarefa(description) {
    const divTarefa = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const labelTarefa = document.createElement('label');
    const descricaoTarefa = document.createTextNode(description);

    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('name', description);
    novaTarefa.setAttribute('id', description);
    novaTarefa.setAttribute('class', "tarefinha");

    labelTarefa.setAttribute('for', description);
    labelTarefa.appendChild(descricaoTarefa);

    divTarefa.classList.add('task-item');
    divTarefa.appendChild(novaTarefa);
    divTarefa.appendChild(labelTarefa);

    listaTarefas.appendChild(divTarefa);
}


console.log(form);
console.log(listaTarefas);