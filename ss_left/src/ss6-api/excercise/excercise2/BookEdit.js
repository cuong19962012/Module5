export function BookEdit() {
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <p className="fw-bold display-6">Libray</p>
                <a className="btn btn-success">Back List</a>
            </div>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" className="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                        <input type="text" className="form-control w-25" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </div>
        </div>
    );
}