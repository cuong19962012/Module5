import { ErrorMessage, Field, Form, Formik, yupToFormErrors } from "formik";
import { useNavigate } from "react-router-dom";
import { createContact } from '../service/ServiceContact';
import * as Yup from 'yup';
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

                    validationSchema={Yup.object({
                        contactCode: Yup.string().required("Not empty").matches('^C(0{3})[0-9]+$', "Not contactcode"),
                        startDate: Yup.date().required("Not empty").min(new Date(), "Greater than now"),
                        endDate: Yup.date().required("Not empty").min(Yup.ref('startDate'), "End date can't be before Start date"),
                        deposit: Yup.number("Not number").nullable().required("Not Empty").moreThan(0, "Greater than zero"),
                        totalPrice: Yup.number().required("Not empty").min(Yup.ref('deposit'), "Totalprice can't be less than deposit"),
                    })}



                    onSubmit={(values) => {
                        create(values);
                    }}
                >
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="form-floating mb-3">
                            <Field className="form-control" name="contactCode" id="contactCode" type="text" placeholder="Contact Code" data-sb-validations="required" />
                            <label htmlFor="contactCode">Contact Code</label>
                            <div style={{ color: 'red' }}><ErrorMessage component="span" name='contactCode' /></div>
                        </div>
                        <div className="form-floating mb-3">
                            <Field className="form-control" name="startDate" id="startDate" type="date" placeholder="Start Date" data-sb-validations />
                            <label htmlFor="startDate">Start Date</label>
                            <div style={{ color: 'red' }}><ErrorMessage component="span" name='startDate' /></div>
                        </div>
                        <div className="form-floating mb-3">
                            <Field className="form-control" id="endDate" name="endDate" type="date" placeholder="End Date" data-sb-validations />
                            <label htmlFor="endDate">End Date</label>
                            <div style={{ color: 'red' }}><ErrorMessage component="span" name='endDate' /></div>
                        </div>
                        <div className="form-floating mb-3">
                            <Field className="form-control" name="deposit" id="deposit" type="number" placeholder="Deposit" data-sb-validations />
                            <label htmlFor="deposit">Deposit</label>
                            <div style={{ color: 'red' }}><ErrorMessage component="span" name='deposit' /></div>
                        </div>
                        <div className="form-floating mb-3">
                            <Field className="form-control" id="totalPrice" name="totalPrice" type="number" placeholder="Total Price" data-sb-validations />
                            <label htmlFor="totalPrice">Total Price</label>
                            <div style={{ color: 'red' }}><ErrorMessage component="span" name='totalPrice' /></div>
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