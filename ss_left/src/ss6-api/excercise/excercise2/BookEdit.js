import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Service from "../excercise2/Service";
import { FallingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function BookEdit(props) {
    // const navigate = useNavigate();

    async function getBook(values) {
        // let booktitle = await Service.addBook(values);
        // toast(`${booktitle.data.title} Created`);
        // navigate("/");
    }
    useEffect(() => {

    }, []);


    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <p className="fw-bold display-6">Libray</p>
                <Link to="/"><button className="btn btn-success" href="/">Back List</button></Link>
            </div>
            <div className="d-flex justify-content-center">
                <Formik
                    initialValues={{
                        title: '',
                        quantity: ''
                    }}
                    onSubmit={(values) => {
                       
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