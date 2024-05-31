"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoService_1 = require("./services/TodoService");
const todoService = new TodoService_1.TodoService();
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');
function renderTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield todoService.getTodos();
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';
            li.innerHTML = `
            <span>${todo.title} - ${todo.description}</span>
            <button onclick="window.deleteTodo(${todo.id})">Delete</button>
            <button onclick="window.toggleCompletion(${todo.id}, ${todo.completed})">${todo.completed ? 'Undo' : 'Complete'}</button>
        `;
            todoList.appendChild(li);
        });
    });
}
window.deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield todoService.deleteTodo(id);
    renderTodos();
});
window.toggleCompletion = (id, completed) => __awaiter(void 0, void 0, void 0, function* () {
    yield todoService.updateTodo(id, { completed: !completed });
    renderTodos();
});
addTodoButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const title = titleInput.value;
    const description = descriptionInput.value;
    if (title && description) {
        yield todoService.createTodo(title, description);
        titleInput.value = '';
        descriptionInput.value = '';
        renderTodos();
    }
}));
renderTodos();
