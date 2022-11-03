
const input = document.querySelector('.input-text');
const addForm = document.querySelector('.add-form');
const tasksList = document.querySelector('.tasks-list');
const deleteAllBtn = document.querySelector('.deleteAll-btn')


let ID = 1;
let tasks = [];

const createHTMLTask = ({ id, name }) => `<li>${name} <img class="delete-btn" src="./img/delete.svg" alt="botón de borrar" data-id="${id}" /></li>`

const renderTasksList = (tasks = []) => {

    const allTasks = tasks.map((task) => createHTMLTask(task)).join('')

    console.log(allTasks)


    tasksList.innerHTML = allTasks

}


const addTask = (e) => {
    e.preventDefault();
    const taskName = input.value
    const newTask = {
        id: ID,
        name: taskName
    }
    console.log('New Task: ', newTask)

    // tasks.push(newTask)
    tasks = [
        ...tasks,
        newTask
    ]
    ID++;
    input.value = '';
    console.log(tasks)

    renderTasksList(tasks)
}

const deleteTask = (event) => {
    
    

}

const deleteAll = () => {}


addForm.addEventListener('submit', addTask)
tasksList.addEventListener('click', deleteTask)











