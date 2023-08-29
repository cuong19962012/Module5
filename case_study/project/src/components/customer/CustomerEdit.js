import { Form, Formik, Field } from "formik";
import * as Service from '../service/ServiceCustomer'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export function CustomerEdit() {
    const navigate = useNavigate();
    const pram = useParams();
    const [selectedCustomer, setSelectedCustomer] = useState({});
    const getCustomerById = async () => {
        const result = await Service.getCustomerById(pram.id);
        setSelectedCustomer(result);
    }
    const editCustomter = async (customer) => {
        await Service.editCustomer(pram.id, customer);
        navigate("/customer");
    }
    useEffect(() => {
        getCustomerById();
    }, []);

    if (selectedCustomer.id == null)
        return null;
    return (
        <>

            <h1 className="text-center m-5">Edit Customer</h1>
            <Formik
                initialValues={{
                    "id": selectedCustomer.id,
                    "name": selectedCustomer.name,
                    "birthOfDay": selectedCustomer.birthOfDay,
                    "gender": selectedCustomer.gender,
                    "identity": selectedCustomer.identity,
                    "numberPhone": selectedCustomer.numberPhone,
                    "email": selectedCustomer.email,
                    "address": selectedCustomer.address,
                    "kindOfCustomer": selectedCustomer.kindOfCustomer
                }}
                onSubmit={async (values) => {
                    await editCustomter(values);
                    navigate("/customer/");
                }}

            >
                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                        <Field
                            className="form-control"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            data-sb-validations=""
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            className="form-control"
                            id="birthOfDay"
                            name="birthOfDay"
                            type="date"
                            placeholder="Birth Of Day"
                            data-sb-validations=""
                        />
                        <label htmlFor="birthOfDay">Birth Of Day</label>
                    </div>
                    <div className="mb-3 text-light">
                        <label className="form-label d-block">Gender</label>
                        <div className="form-check form-check-inline">
                            <Field
                                className="form-check-Field"
                                id="male"
                                type="radio"
                                name="gender"
                                value='nam'
                            />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className="form-check-Field"
                                id="female"
                                type="radio"
                                name="gender"
                                value='nu'
                            />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            className="form-control"
                            id="identity"
                            type="text"
                            placeholder="Identity"
                            name="identity"
                            data-sb-validations="required"
                        />
                        <label htmlFor="identity">Identity</label>
                        <div className="invalid-feedback" data-sb-feedback="identity:required">
                            Identity is required.
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            className="form-control"
                            id="phoneNumber"
                            type="text"
                            placeholder="Phone Number"
                            data-sb-validations=""
                            name="numberPhone"
                        />
                        <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            className="form-control"
                            id="emailAddress"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            data-sb-validations="required,email"
                        />
                        <label htmlFor="emailAddress">Email Address</label>
                        <div
                            className="invalid-feedback"
                            data-sb-feedback="emailAddress:required"
                        >
                            Email Address is required.
                        </div>
                        <div className="invalid-feedback" data-sb-feedback="emailAddress:email">
                            Email Address Email is not valid.
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <Field as="select"
                            className="form-select"
                            id="kindOfCustomer"
                            aria-label="Kind Of Customer"
                            name="kindOfCustomer"
                        >
                            <option value="Diamond">Diamond</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Gold">Gold</option>
                            <option value="Silver">Silver</option>
                            <option value="Member">Member</option>
                        </Field>
                        <label htmlFor="kindOfCustomer">Kind Of Customer</label>
                    </div>
                    <div className="form-floating mb-3">
                        <Field
                            className="form-control"
                            id="address"
                            name="address"
                            type="text"
                            placeholder="Address"
                            data-sb-validations=""
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            <p>To activate this form, sign up at</p>
                            <a href="https://startbootstrap.com/solution/contact-forms">
                                https://startbootstrap.com/solution/contact-forms
                            </a>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>
                    <div className="d-grid">
                        <button
                            className="btn btn-primary btn-lg"
                            id="submitButton"
                            type="submit"
                        >
                            Create
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}