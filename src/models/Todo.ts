export interface ITodo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export class Todo implements ITodo {
    public id: number;
    public title: string;
    public description: string;
    public completed: boolean;

    private constructor(id: number, title: string, description: string, completed: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    public static create(title: string, description: string): Todo {
        return new Todo(Date.now(), title, description, false);
    }
}
