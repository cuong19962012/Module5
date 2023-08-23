export function CustomerCreate() {
    return (
        <>
            <h1 className="text-center m-5">Create Customer</h1>
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Name"
                        data-sb-validations=""
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="birthOfDay"
                        type="text"
                        placeholder="Birth Of Day"
                        data-sb-validations=""
                    />
                    <label htmlFor="birthOfDay">Birth Of Day</label>
                </div>
                <div className="mb-3 text-light">
                    <label className="form-label d-block">Gender</label>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            id="male"
                            type="radio"
                            name="gender"
                            data-sb-validations="required"
                        />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            id="female"
                            type="radio"
                            name="gender"
                            data-sb-validations="required"
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            id="lgbt"
                            type="radio"
                            name="gender"
                            data-sb-validations="required"
                        />
                        <label className="form-check-label" htmlFor="lgbt">
                            LGBT
                        </label>
                    </div>
                    <div className="invalid-feedback" data-sb-feedback="gender:required">
                        One option is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="identity"
                        type="text"
                        placeholder="Identity"
                        data-sb-validations="required"
                    />
                    <label htmlFor="identity">Identity</label>
                    <div className="invalid-feedback" data-sb-feedback="identity:required">
                        Identity is required.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="phoneNumber"
                        type="text"
                        placeholder="Phone Number"
                        data-sb-validations=""
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="emailAddress"
                        type="email"
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
                    <select
                        className="form-select"
                        id="kindOfCustomer"
                        aria-label="Kind Of Customer"
                    >
                        <option value="Diamond">Diamond</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Member">Member</option>
                    </select>
                    <label htmlFor="kindOfCustomer">Kind Of Customer</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="address"
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
            </form>
        </>
    );
}