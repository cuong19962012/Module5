import * as serviceFacility from '../service/ServiceFacility';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, Field } from 'formik';
export function FacilityCreateRoom() {
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
                "more": '',
                "kindOfRent": 'day',
                "type": "room"
            }}
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
                    <Field as='textarea'
                        className="form-control"
                        id=""
                        col='10'
                        name="more"
                        placeholder="Accompanied Service"
                        data-sb-validations=""
                    />
                    <label htmlFor="more">Accompanied Service</label>
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