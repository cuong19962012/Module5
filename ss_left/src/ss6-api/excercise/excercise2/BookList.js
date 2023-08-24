import { useState } from "react";

import * as Service from "../excercise2/Service"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "./ModalDelete";
export function BookList() {

    let [bookList, setBookList] = useState([]);

    useEffect(() => {
        Service.getAll().then(res => {
            setBookList(b => (b.current = res.data))
        })
    }, [])

    const deletedRender = () => {
        Service.getAll().then(res => {
            setBookList(b => (b.current = res.data))
        })
    };



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
                                        <ModalDelete id={element.id} title={element.title} func={deletedRender} />
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