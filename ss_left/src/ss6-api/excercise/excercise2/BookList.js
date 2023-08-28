import { useState } from "react";

import * as Service from "../excercise2/Service"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ModalDelete } from "./ModalDelete";

export function BookList() {

    let [bookList, setBookList] = useState([]);
    let [book, setBook] = useState({})

    useEffect(() => {
        Service.getAll().then(res => {
            setBookList(res.data)
        })
    }, [])

    const deletedBook = async (id, title) => {
        setBook({ show: false });
        await Service.deleteBook(id);
        toast(`${title} deleted`);
        Service.getAll().then(res => {
            setBookList(res.data)
        })
    };

    const setDeleteBook = (id, title) => {
        setBook(pre => (
            pre = {
                id: id,
                title: title,
                show: true
            }
        ));
    }



    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <p className="fw-bold display-6">Libray</p>
                <Link to="/create"><button className="btn btn-success">Add a new book</button></Link>
            </div>
            <div>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th>TITLE</th>
                            <th>QUANTITY</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((element) => (
                            <tr key={element.id}>
                                <td>
                                    {element.title}
                                </td>
                                <td>
                                    {element.quantity}
                                </td>
                                <td>
                                    <div className="d-flex justify-content-evenly">
                                        <Link to={`/edit/${element.id}`}><button className="btn btn-primary">Edit</button></Link>
                                        <button className="btn btn-danger" onClick={() => setDeleteBook(element.id, element.title)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ModalDelete id={book.id} title={book.title} show={book.show} deletedBook={() => deletedBook(book.id, book.title)} />
        </div>
    );
}