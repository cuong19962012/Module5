import { useEffect, useState } from "react";
import * as Service from '../excercise1/service/Service'
export function TodoList() {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        Service.getAll()
            .then(res => {
                setTodo(pre => (pre = res.data))
            })
    }, [])
    function addTodo() {
        Service.addItem(document.getElementById('input').value).then(res => {
            Service.getAll()
                .then(res => {
                    setTodo(pre => (pre = res.data))
                })
        })
    }
    return (
        <>
            <h1>Todo List</h1>
            <input type="text" id="input"></input><br />
            <button type="submit" onClick={() => addTodo()} >Submit</button >
            <ul>
                {todo.map(e => (
                    <li key={e.id}>{e.name}</li>
                ))}
            </ul>
        </>
    );
}