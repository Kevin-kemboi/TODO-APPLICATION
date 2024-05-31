import { Todo, ITodo } from '../models/Todo';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/todos';

export class TodoService {
    async createTodo(title: string, description: string): Promise<Todo> {
        const todo = Todo.create(title, description);
        const response = await axios.post(BASE_URL, todo);
        return response.data;
    }

    async getTodos(): Promise<ITodo[]> {
        const response = await axios.get(BASE_URL);
        return response.data;
    }

    async updateTodo(id: number, updatedFields: Partial<ITodo>): Promise<ITodo> {
        const response = await axios.patch(`${BASE_URL}/${id}`, updatedFields);
        return response.data;
    }

    async deleteTodo(id: number): Promise<void> {
        await axios.delete(`${BASE_URL}/${id}`);
    }
}
export default TodoService