import * as serviceFacility from '../service/ServiceFacility';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export function FacilityCreateVilla() {
    const navigate = useNavigate();
    const create = async (facility) => {
        await serviceFacility.createFacility(facility);
        navigate('/');
    }
    return (
        <Formik
            initialValues={{
                "name": '',
                "useArea": '',
                "price": '',
                "maxOfPersons": '',
                "standard": '',
                "more": '',
                "poolArea": '',
                "numberOfFloor": '',
                "kindOfRent": 'day',
                "type": "villa"
            }}

            validationSchema={
                Yup.object({
                    name: Yup.string().required("Not Empty"),
                    useArea: Yup.number().required().moreThan(0, "Greater than zero"),
                    price: Yup.number("Not number").required("Not Empty").moreThan(0, "Greater than zero"),
                    maxOfPersons: Yup.number("Not number").required("Not Empty").moreThan(0, "Greater than zero"),
                    standard: Yup.string().required("Not Empty"),
                    more: Yup.string().required("Not Empty"),
                    numberOfFloor: Yup.number("Not number").required("Not Empty").moreThan(0, "Greater than zero"),
                    poolArea:Yup.number("Not number").required("Not Empty").moreThan(0, "Greater than zero")
                })
            }

            onSubmit={(facility) => {
                create(facility);
            }}
        >
            <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                    <Field
                        className="form-control"
                        id=""
                        name="name"
                        type="text"
                        placeholder="Name"
                        data-sb-validations=""
                    />
                    <label htmlFor="name">Name</label>
                    <div style={{ color: 'red' }}><ErrorMessage component="span" name='name' /></div>
                </div>
                <div className="form-floating mb-3">
                    <Field
                        className="form-control"
                        id="" name="useArea"
                        type="number"
                        placeholder="Use Area"
                        data-sb-validations=""
                    />
                    <label htmlFor="useArea">Use Area (M2)</label>
                    <div style={{ color: 'red' }}><ErrorMessage component="span" name='useArea' /></div>
                </div>
                <div className="form-floating mb-3">
                    <Field
                        className="form-control"
                        id=""
                        name="price"
                        type="number"
                        placeholder="Price"
                        data-sb-validations=""
                    />
                    <label htmlFor="fee">Price</label>
                    <div style={{ color: 'red' }}><ErrorMessage component="span" name='price' /></div>
                </div>
                <div className="form-floating mb-3">
                    <Field
                        className="form-control"
                        id=""
                        name="maxOfPersons"
                        type="number"
                        placeholder="Max Of Persons"
                        data-sb-validations=""
                    />
                    <label htmlFor="maxOfPersons">Max Of Persons</label>
                    <div style={{ color: 'red' }}><ErrorMessage component="span" name='maxOfPersons' /></div>
                </div>
                <div className="form-floating mb-3">
                    <Field as='select' className="form-select" id="" name='kindOfRent' aria-label="Kind Of Rent">
                        <option value="year">Year</option>
                        <option value="month">Month</option>
                        <option value="day">Day</option>
                        <option value="hour">Hour</option>
                    </Field>
                    <label htmlFor="kindOfRent">Kind Of Rent</label>
                </div>
                <div className="form-floating mb-3">
                    <Field
                        className="form-control"
                        id=""
                        name="standard"
                        type="text"
                        placeholder="Standard"
                        data-sb-validations=""
                    />
                    <label htmlFor="standard">Standard</label>
                    <div style={{ color: 'red' }}><ErrorMessage component="span" name='standard' /></div>
                </div>
                <div className="form-floating mb-3">
                    <Field as='textarea'
                        className="form-control"
                        id=""
                        col='10'
                        name="more"
                        placeholder="Description"
                        data-sb-validations=""
                    />
                    <label htmlFor="more">Description</label>
                    <div style={{ color: 'red' }}><ErrorMessage component="span" name='more' /></div>
                </div>
                <div className="form-floating mb-3">
                    <Field
                        className="form-control"
                        id=""
                        type="number"
                        name="poolArea"
                        placeholder="Pool Of Area"
                        data-sb-validations=""
                    />
                    <label htmlFor="poolOfArea">Pool Of Area</label>
                    <div style={{ color: 'red' }}><ErrorMessage component="span" name='poolArea' /></div>
                </div>
                <div className="form-floating mb-3">
                    <Field
                        className="form-control"
                        id=""
                        name="numberOfFloor"
                        type="number"
                        placeholder="Number Of Floor"
                        data-sb-validations=""
                    />
                    <label htmlFor="numberOfFloor">Number Of Floor</label>
                    <div style={{ color: 'red' }}><ErrorMessage component="span" name='numberOfFloor' /></div>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary btn-lg" id="" type="submit">
                        Create
                    </button>
                </div>
            </Form>
        </Formik>
    );
}