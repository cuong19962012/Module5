import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

export function General() {
    return (
        <div className="container">
            <div style={{ marginTop: 40 }}>
                <h1>Todo list</h1>
                <div>
                    <NewTodo />
                </div>
                <div>
                    <TodoList />
                </div>
            </div>
        </div>
    );
}