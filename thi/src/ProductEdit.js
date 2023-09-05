import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Service from './ServiceProduct';
import { toast } from "react-toastify";
import * as Yup from "yup";

export function ProductEdit() {
    const param = useParams();
    const [selectedProduct, setSelectedProduct] = useState();
    const navigate = useNavigate();

    const getProductById = async (id) => {
        const result = await Service.getById(id);
        setSelectedProduct(result);
    };

    const edit = async (product) => {
        await Service.edit(param.id, product);
        navigate('/');
        toast('Edit Successfully');
    };

    useEffect(() => {
        getProductById(param.id)
    }, [param.id]);


    if (!selectedProduct)
        return null;

    // "productCode": "p-01",
    // "name": "Ao co co",
    // "inDate": "2022-02-02",
    // "quantity": 100,
    // "type": "ao"
    // console.log(selectedProduct);
    return (
        <>
            <h1>Product Edit</h1>
            <Formik
                initialValues={{
                    "productCode": selectedProduct.productCode,
                    "name": selectedProduct.name,
                    "inDate": selectedProduct.inDate,
                    "quantity": selectedProduct.quantity,
                    "type": selectedProduct.type
                }}

                onSubmit={values => {
                    edit(values);
                }}

                validationSchema={Yup.object({
                    name: Yup.string().max(100,"Must greater than 100"),
                    quantity: Yup.number().min(1,"Must greater than 0").integer("Must be integer"),
                    inDate:Yup.date().min(Date(),"Must be than today")
                })}

            >
                <Form>
                    <div className="form-outline mb-4 ">
                        <Field type="text" id="form4Example1" name="productCode" className="form-control" />
                        <label className="form-label" htmlFor="form4Example1">ProductCode</label>

                    </div>
                    <div className="form-outline mb-4">
                        <Field type="text" id="form4Example2" name="name" className="form-control" />
                        <label className="form-label" htmlFor="form4Example2">Name</label>
                        <br /><ErrorMessage component={'span'} name="name" />
                    </div>
                    <div className="form-outline mb-4">
                        <Field type="date" id="form4Example2" name="inDate" className="form-control" />
                        <label className="form-label" htmlFor="form4Example2">In Date</label>
                        <br /><ErrorMessage component={'span'} name="inDate" />
                    </div>
                    <div className="form-outline mb-4">
                        <Field type="number" id="form4Example2" name="quantity" className="form-control" />
                        <label className="form-label" htmlFor="form4Example2">Quantity</label>
                        <br /><ErrorMessage component={'span'} name="quantity" />
                    </div>
                    <Field as='select' class="form-select" name="type" aria-label="Default select example">
                        <option value="quan">Quan</option>
                        <option value="ao">Ao</option>
                        <option value="mu">Mu</option>
                    </Field>


                    <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
                </Form>
            </Formik>
        </>

    );
}