import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookList } from "./BookList";
import { BookCreate } from "./BookCreate";
import { BookEdit } from "./BookEdit";
export function BookStore() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" >
                        <Route index element={<BookList />} />
                        <Route path="/create" element={<BookCreate />} />
                        <Route path="/edit/:id" element={<BookEdit />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}