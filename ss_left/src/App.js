import { BookCreate } from "./ss6-api/excercise/excercise2/BookCreate";
import { BookList } from "./ss6-api/excercise/excercise2/BookList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<BookList />}></Route>
            <Route path="/create" element={<BookCreate />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
