import axios from "axios";
export async function getAll() {
    const result = await axios.get('http://localhost:8000/book');
    return result;
}
export function addBook(book) {
    const result = axios.post('http://localhost:8000/book', book);
    return result;
}
export function deleteBook(id) {
    const result = axios.delete('http://localhost:8000/book/' + id);
    return result;
}
export function getBookById(id) {
    const result = axios.get('http://localhost:8000/book/' + id);
    return result;
}
export function updateBook(book) {
    const result = axios.put('http://localhost:8000/book/' + book.id, book);
    return result;
}