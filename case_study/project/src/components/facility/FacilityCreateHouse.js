export function FacilityCreateHouse() {
    return (
        <div className="container">
            <h1 className="text-center m-5">Create Facility</h1>
            <form id="" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id=""
                        type="text"
                        placeholder="Name"
                        data-sb-validations=""
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id=""
                        type="text"
                        placeholder="Use Area"
                        data-sb-validations=""
                    />
                    <label htmlFor="useArea">Use Area</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id=""
                        type="text"
                        placeholder="Fee"
                        data-sb-validations=""
                    />
                    <label htmlFor="fee">Fee</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id=""
                        type="text"
                        placeholder="Max Of Persons"
                        data-sb-validations=""
                    />
                    <label htmlFor="maxOfPersons">Max Of Persons</label>
                </div>
                <div className="form-floating mb-3">
                    <select className="form-select" id="" aria-label="Kind Of Rent">
                        <option value="Year">Year</option>
                        <option value="Month">Month</option>
                        <option value="Day">Day</option>
                        <option value="Hour">Hour</option>
                    </select>
                    <label htmlFor="kindOfRent">Kind Of Rent</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id=""
                        type="text"
                        placeholder="Standard"
                        data-sb-validations=""
                    />
                    <label htmlFor="standard">Standard</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id=""
                        type="text"
                        placeholder="Accompanied Service"
                        data-sb-validations=""
                    />
                    <label htmlFor="more">Accompanied Service</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id=""
                        type="text"
                        placeholder="Number Of Floor"
                        data-sb-validations=""
                    />
                    <label htmlFor="numberOfFloor">Number Of Floor</label>
                </div>
                <div className="d-none" id="">
                    <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        <p>To activate this form, sign up at</p>
                        <a href="https://startbootstrap.com/solution/contact-forms">
                            https://startbootstrap.com/solution/contact-forms
                        </a>
                    </div>
                </div>
                <div className="d-none" id="">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary btn-lg" id="" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}