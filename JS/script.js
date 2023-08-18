
// todas funções do projeto

    // função que adiciona tarfa 




        function addTask() {
    // titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;

    if (taskTitle) {

        //clona template
        const template = document.querySelector('.template')
        const newTask = template.cloneNode(true)

        // adicionar titulo 
        newTask.querySelector('.task-title').textContent = taskTitle;


        // remover classes desnecessarias
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        //adicionar tarefa na lista
        const list = document.querySelector('#task-list')
        list.appendChild(newTask);

        // adicionar evento de remover tarefa
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click',function(){
            removeTask(this)
        })
        

        // adc evento de completar tarefa

        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click',function(){
            completeTask(this)
        })
        // limpar texto 
        document.querySelector('#task-title').value = ''

    }


}

    // funcao de completar tarefa

        function completeTask(task){
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle('done');

}


    // função de remover tarefa 

        function removeTask(task){
    task.parentNode.remove(true);
}


// evento de adicionar tarefa


const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addTask();
})