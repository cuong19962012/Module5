import { useState } from "react";

import * as Service from "../excercise2/Service"
import { useEffect } from "react";

export function BookList() {

    let [bookList, setBookList] = useState([]);

    useEffect(() => {
        Service.getAll().then(res => {
            setBookList(bookList = res.data)
        })
    }, [])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <p className="fw-bold display-6">Libray</p>
                <a className="btn btn-success">Add a new book</a>
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
                                        <a className="btn btn-primary">Edit</a>
                                        <a className="btn btn-danger">Delete</a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}