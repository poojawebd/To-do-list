const todoList = [
    // {
    //     name: 'Buy milk',
    //     dueDate: '2022 - 12 - 22'
    // },
    // {
    //     name: 'Buy eggs',
    //     dueDate: '2022 - 12 - 22'
    // }
];


// renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let index = 0; index < todoList.length; index++) {
        const todoObj = todoList[index];
        const { name, dueDate } = todoObj;

        const html = `
         <div>
         
           <span class = "name"> ${name} </span> <span class = "mar-date"> ${dueDate} </span>
             <button onclick=" 
             deleteTodo( ${index}) ;
             renderTodoList();
            ">Delete</button>  
            
        </div> `;

        todoListHTML += html;     
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



function addTodo() {
    let inputElement = document.querySelector('.js-input');
    let name = inputElement.value;

    const dueDateElement = document.querySelector('.js-dueDate');
    const dueDate = dueDateElement.value;

    todoList.push({ name, dueDate });

    inputElement.value = '';


    renderTodoList();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

document.addEventListener('keydown', function (event) {
   
    if (event.key === 'Delete') {
        if (todoList.length > 0) {
            // Delete the last task in the list
            todoList.pop();
            renderTodoList();
        }
    }

    if (event.key === 'Enter') {
        addTodo();
    }
});




function showDate() {
    const selectedDate = document.getElementById('calendar').value;
    document.getElementById('output').textContent = `You selected: ${selectedDate}`;
}