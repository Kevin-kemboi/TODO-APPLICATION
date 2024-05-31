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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const Todo_1 = require("../models/Todo");
const axios_1 = __importDefault(require("axios"));
const BASE_URL = 'http://localhost:3000/todos';
class TodoService {
    createTodo(title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = Todo_1.Todo.create(title, description);
            const response = yield axios_1.default.post(BASE_URL, todo);
            return response.data;
        });
    }
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(BASE_URL);
            return response.data;
        });
    }
    updateTodo(id, updatedFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.patch(`${BASE_URL}/${id}`, updatedFields);
            return response.data;
        });
    }
    deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default.delete(`${BASE_URL}/${id}`);
        });
    }
}
exports.TodoService = TodoService;
