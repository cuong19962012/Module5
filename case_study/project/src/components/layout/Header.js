function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <div className="col-4">
                    <button
                        className="navbar-toggler "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
                <div className="col-8 col-md-4 d-flex justify-content-center">
                    <img
                        className="navbar-brand "
                        style={{ width: "auto", height: 100 }}
                        src="https://furamavietnam.com/wp-content/uploads/2018/10/logo.png"
                    />
                </div>
                <div className="collapse navbar-collapse col-4" id="navbarNavAltMarkup">
                    <div className="navbar-nav col-12"></div>
                </div>
            </div>
        </nav>
    );
};
export default Header;