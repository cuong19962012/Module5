import { BookCreate } from "./ss6-api/excercise/excercise2/BookCreate";
import { BookEdit } from "./ss6-api/excercise/excercise2/BookEdit";
import { BookList } from "./ss6-api/excercise/excercise2/BookList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function App() {
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


export default App;
