export function ContactShow() {
    return (
        <>
            <div>
                <h1 className="text-center m-5">List Contact</h1>
                <section className="intro">
                    <div className="mask d-flex align-items-center ">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="card bg-dark shadow-2-strong">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-dark table-borderless mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">CONTACT CODE</th>
                                                            <th scope="col">START DATE</th>
                                                            <th scope="col">END DATE</th>
                                                            <th scope="col">DEPOSIT</th>
                                                            <th scope="col">TOTAL PRICE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>#</th>
                                                            <th>#</th>
                                                            <th>#</th>
                                                            <th>#</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}