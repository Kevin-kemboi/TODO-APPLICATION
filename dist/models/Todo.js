"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    static create(title, description) {
        return new Todo(Date.now(), title, description, false);
    }
}
exports.Todo = Todo;
