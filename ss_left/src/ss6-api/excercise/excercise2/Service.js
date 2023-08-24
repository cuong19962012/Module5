import axios from "axios";
export async function getAll() {
    const result = await axios.get('http://localhost:8000/book')
    return result;
}
export function addItem(obj) {
    const result = axios.post('http://localhost:8000/book', { name: obj })
    return result;
}