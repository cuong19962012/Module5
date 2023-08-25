import { Field, Formik, Form } from "formik";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as Service from "../excercise2/Service";
import { FallingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function BookEdit() {
    const pram = useParams();
    const navigate = useNavigate();
    let [selectedBook, setSelectedBook] = useState({});
    function getBook(pram) {
        Service.getBookById(pram).then(res => {
            setSelectedBook(selectedBook = res.data);
        })
    }
    useEffect(() => {
        getBook(pram.id);
    }, []);

    const updateBook = async (book) => {
        await Service.updateBook(book).then(res => {
            toast(`${res.data.title} Update`);
            navigate("/");
        })
    };
    if (!selectedBook.id)
        return null;

    return (

        <div className="container">
            <div className="d-flex justify-content-between">
                <p className="fw-bold display-6">Libray</p>
                <Link to="/"><button className="btn btn-success" href="/">Back List</button></Link>
            </div>
            <div className="d-flex justify-content-center">
                <Formik
                    initialValues={{
                        id: selectedBook.id,
                        title: selectedBook.title,
                        quantity: selectedBook.quantity
                    }}
                    onSubmit={(values) => {
                        updateBook(values)
                    }}
                >
                    {
                        ({ isSubmitting }) =>
                        (
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <Field type="text" className="form-control w-100" name="title" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                                    <Field type="number" className="form-control w-100" name="quantity" id="exampleInputPassword1" />
                                </div>
                                {isSubmitting ?
                                    <FallingLines
                                        color="#4fa94d"
                                        width="100"
                                        visible={true}
                                        ariaLabel='falling-lines-loading'
                                    />
                                    :
                                    <button type="submit" className="btn btn-primary">Update</button>}
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}