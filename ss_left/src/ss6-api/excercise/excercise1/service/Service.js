import axios from "axios";
export function getAll() {
    const result = axios.get('http://localhost:8000/todo')
    return result;
}
export function addItem(obj) {
    const result = axios.post('http://localhost:8000/todo', { name: obj })
    return result;
}