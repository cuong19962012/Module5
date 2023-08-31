import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Service from '../service/ServiceCustomer'
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { sub } from "date-fns/fp"
export function CustomerCreate() {
    const navigate = useNavigate();
    const createCustomer = async (customer) => {
        await Service.createCustomer(customer);
        navigate('/customer');
    }
    return (
        <>

            <h1 className="text-center m-5">Create Customer</h1>
            <Formik
                initialValues={{
                    "name": '',
                    "birthOfDay": '',
                    "gender": 'nam',
                    "identity": '',
                    "numberPhone": '',
                    "email": '',
                    "address": '',
                    "kindOfCustomer": 'Member'
                }}


                validationSchema={Yup.object({
                    name: Yup.string().required("Not Empty"),
                    birthOfDay: Yup.date().required().max(sub({ years: 18 }, new Date()), "Customer must be over 18 years old"),
                    identity: Yup.string().required().matches("^[0-9]{10}$", "Not identity"),
                    numberPhone: Yup.string().required().matches("^(84|0[3|5|7|8|9])+([0-9]{8})$", "Not phoneNumber"),
                    email: Yup.string().required().matches("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", "Not email"),
                    address: Yup.string().required()
                })}


                onSubmit={(values) => {
                    createCustomer(values)
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
                        <div style={{ color: 'red' }}><ErrorMessage component="span" name='name' /></div>
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
                        <div style={{ color: 'red' }}><ErrorMessage component="span" name='birthOfDay' /></div>
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
                        <div style={{ color: 'red' }}><ErrorMessage component="span" name='identity' /></div>
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
                        <div style={{ color: 'red' }}><ErrorMessage component="span" name='numberPhone' /></div>
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
                        <div style={{ color: 'red' }}><ErrorMessage component="span" name='email' /></div>
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
                        <div style={{ color: 'red' }}><ErrorMessage component="span" name='address' /></div>
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
            </Formik >
        </>
    );
}