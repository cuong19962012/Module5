import { Component } from "react";
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
    }
    addTodo = () => {
        this.setState(() => (
            {
                todoList: [...this.state.todoList, document.getElementById('input').value]
            }
        ));
    }
    

    render() {
        return (
            <>
                <h1>My Todo List</h1>
                <input id="input"></input>
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {this.state.todoList.map((element, index) => (
                        <li key={index}>
                            {element}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
export default TodoApp;