import TodoService from "./src/services/TodoService";

const todoService = new TodoService();

const titleInput = document.getElementById('title') as HTMLInputElement;
const descriptionInput = document.getElementById('description') as HTMLInputElement;
const addTodoButton = document.getElementById('add-todo') as HTMLButtonElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;

declare global {
    interface Window {
        deleteTodo: (id: number) => Promise<void>;
        toggleCompletion: (id: number, completed: boolean) => Promise<void>;
    }
}

async function renderTodos() {
    const todos = await todoService.getTodos();
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
}

window.deleteTodo = async (id: number) => {
    await todoService.deleteTodo(id);
    renderTodos();
};

window.toggleCompletion = async (id: number, completed: boolean) => {
    await todoService.updateTodo(id, { completed: !completed });
    renderTodos();
};

addTodoButton.addEventListener('click', async () => {
    const title = titleInput.value;
    const description = descriptionInput.value;
    if (title && description) {
        await todoService.createTodo(title, description);
        titleInput.value = '';
        descriptionInput.value = '';
        renderTodos();
    }
});

renderTodos();
