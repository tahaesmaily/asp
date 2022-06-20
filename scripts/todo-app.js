'use strict'

const todos = getSavedTodos();
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters);

document.querySelector('#filter-todo').addEventListener('input', (e) => {
  setTimeout(function() {
    filters.searchText=e.target.value;
    renderTodos(todos,filters);
  }, 1000);
})

document.querySelector('#todo-form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const todoValue = e.target.elements.addTodo.value.trim();
    if (todoValue.length > 0){
      setTimeout(function() {
 todos.push({
        id: uuidv4(),
        text: todoValue});
        saveTodos(todos);
        renderTodos(todos, filters);
        e.target.elements.addTodo.value="";
      }, 1000);
       
    }
})
