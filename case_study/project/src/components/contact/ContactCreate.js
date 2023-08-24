export function ContactCreate() {
    return (
        <>
            <div>
                <h1 className="text-center m-5">Craete Contact</h1>
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                        <input className="form-control" id="contactCode" type="text" placeholder="Contact Code" data-sb-validations="required" />
                        <label htmlFor="contactCode">Contact Code</label>
                        <div className="invalid-feedback" data-sb-feedback="contactCode:required">Contact Code is required.</div>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="startDate" type="text" placeholder="Start Date" data-sb-validations />
                        <label htmlFor="startDate">Start Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="endDate" type="text" placeholder="End Date" data-sb-validations />
                        <label htmlFor="endDate">End Date</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="deposit" type="text" placeholder="Deposit" data-sb-validations />
                        <label htmlFor="deposit">Deposit</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="totalPrice" type="text" placeholder="Total Price" data-sb-validations />
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
                        <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </>
    );
}