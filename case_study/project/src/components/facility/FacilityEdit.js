import * as serviceFacility from '../service/ServiceFacility';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Formik, Field } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
export function FacilityEdit() {
    const navigate = useNavigate();
    const pram = useParams();
    let [selectedFacility, setSelectedFacility] = useState({});
    const getFacilityById = async () => {
        const facility = await serviceFacility.getFacilityById(pram.id);
        setSelectedFacility(selectedFacility = facility);
    }
    useEffect(() => {
        getFacilityById();
    }, [])
    const edit = async (facility) => {
        await serviceFacility.editFacility(pram.id, facility);
        navigate('/');
    }
    if (selectedFacility.id == null)
        return null;
    return (
        <Formik
            initialValues={{
                "id": selectedFacility.id,
                "name": selectedFacility.name,
                "useArea": selectedFacility.useArea,
                "price": selectedFacility.price,
                "maxOfPersons": selectedFacility.maxOfPersons,
                "standard": selectedFacility.standard,
                "more": selectedFacility.more,
                "poolArea": selectedFacility.poolArea,
                "numberOfFloor": selectedFacility.numberOfFloor,
                "kindOfRent": selectedFacility.kindOfRent,
                "type": selectedFacility.type
            }}
            onSubmit={(facility) => {
                edit(facility);
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
                {
                    selectedFacility.standard ?
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
                        </div> : ""
                }
                {selectedFacility.type === 'room' ?
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
                    </div> :
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
                    </div>
                }
                {
                    selectedFacility.poolArea ? <div className="form-floating mb-3">
                        <Field
                            className="form-control"
                            id=""
                            type="number"
                            name="poolArea"
                            placeholder="Pool Of Area"
                            data-sb-validations=""
                        />
                        <label htmlFor="poolOfArea">Pool Of Area</label>
                    </div> : ''
                }
                {selectedFacility.numberOfFloor ? <div className="form-floating mb-3">
                    <Field
                        className="form-control"
                        id=""
                        name="numberOfFloor"
                        type="number"
                        placeholder="Number Of Floor"
                        data-sb-validations=""
                    />
                    <label htmlFor="numberOfFloor">Number Of Floor</label>
                </div> : ''}
                <div className="d-grid">
                    <button className="btn btn-primary btn-lg" id="" type="submit">
                        Edit
                    </button>
                </div>
            </Form>
        </Formik>
    );
}