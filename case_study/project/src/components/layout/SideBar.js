import { Component } from "react";
function SideBar() {
    return (
        <div className=" min-vh-100 col-2 bg-dark" style={{ zIndex: 2 }}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100">
                <p className="w-100 text-center h1">
                    Menu
                </p>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                    <li className="nav-item w-100 my-3">
                        <a href="/order/" className="nav-link align-middle px-5 text-light w-100">
                            <i className="fa-solid fa-file-pen" style={{ color: '#ffffff' }} /><span className="ms-1 d-none d-sm-inline">Facility</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default SideBar;