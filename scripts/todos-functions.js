'use strict'


const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    
    try{
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e){
        return [];
    } 
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    if (index > -1){
        todos.splice(index, 1);
    }
    return todos;
}


const editon=(id,v)=>{
 const index = todos.findIndex((todo) => todo.id === id)
  if (index>-1){
   todos[index].text=v;
   console.log(todos[index])
  }
  return todos;
}
// Render applicatin todos
const generateTodoDOM = (todos) => {
    todos.forEach( (todo) => {

        const todoElement = document.createElement('label');
        const containerEl = document.createElement('div')
      
        const removeButton = document.createElement('button');
        const editButton=document.createElement('button')
        const todoText = document.createElement('input');

        // Setup container
        containerEl.classList.add('list-item__container')
        todoElement.classList.add('list-item')
        todoElement.appendChild(containerEl)


        //create checkbox
      

        // Create text element for the Todo
        todoText.value = todo.text;
        todoText.id=todo.id;
        containerEl.appendChild(todoText);
        
        
        removeButton.textContent = '🗑';
        editButton.textContent="edit"
        removeButton.classList.add('button', 'button--text')
        editButton.classList.add('button','button--text')
        todoElement.appendChild(removeButton);
        todoElement.appendChild(editButton)
        removeButton.addEventListener('click', () =>{
          setTimeout(()=>{
            todos=removeTodo(todo.id);
            saveTodos(todos)
            renderTodos(todos,filters)
          },1000);
        })
        editButton.addEventListener('click',()=>{
          
          var A =document.getElementById(todo.id).value;
          setTimeout(()=>{
            todos=editon(todo.id,A);
            saveTodos(todos);
            renderTodos(todos,filters);
          },1000)
        })
        document.querySelector('#todos').appendChild(todoElement);
    })
}

const getSummaryDOM = (todos) => {
    const summary = document.createElement('h2');
    const completedTodos = todos.filter( (todo) => !todo.completed);
    summary.classList.add('list-title')
    if (completedTodos.length > 1){
    summary.textContent = completedTodos.length;
    } else {
    summary.textContent = completedTodos.length;
    }
    document.querySelector('#todos').appendChild(summary);
}

const renderTodos = (todos, filters) => {
    
    document.querySelector('#todos').innerHTML = '';

    let filteredTodos = todos.filter( (todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()));

    getSummaryDOM(todos);
    generateTodoDOM(filteredTodos);
}



