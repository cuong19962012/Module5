import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { createContact } from '../service/ServiceContact';
export function ContactCreate() {
    const navigate = useNavigate();
    const create = async (contact) => {
        await createContact(contact);
        navigate('/contact/');
    };
    return (
        <>
            <div>
                <h1 className="text-center m-5">Craete Contact</h1>
                <Formik
                    initialValues={{
                        "contactCode": '',
                        "startDate": '',
                        "endDate": '',
                        "deposit": '',
                        "totalPrice": ''
                    }}
                    onSubmit={(values) => {
                        create(values);
                    }}
                >
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="form-floating mb-3">
                            <Field className="form-control" name="contactCode" id="contactCode" type="text" placeholder="Contact Code" data-sb-validations="required" />
                            <label htmlFor="contactCode">Contact Code</label>
                            <div className="invalid-feedback" data-sb-feedback="contactCode:required">Contact Code is required.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <Field className="form-control" name="startDate" id="startDate" type="date" placeholder="Start Date" data-sb-validations />
                            <label htmlFor="startDate">Start Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <Field className="form-control" id="endDate" name="endDate" type="date" placeholder="End Date" data-sb-validations />
                            <label htmlFor="endDate">End Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <Field className="form-control" name="deposit" id="deposit" type="number" placeholder="Deposit" data-sb-validations />
                            <label htmlFor="deposit">Deposit</label>
                        </div>
                        <div className="form-floating mb-3">
                            <Field className="form-control" id="totalPrice" name="totalPrice" type="number" placeholder="Total Price" data-sb-validations />
                            <label htmlFor="totalPrice">Total Price</label>
                        </div>
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                <p>To activate this form, sign up at</p>
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        <div className="d-none" id="submitErrorMessage">
                            <div className="text-center text-danger mb-3">Error sending message!</div>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Create</button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </>
    );
}