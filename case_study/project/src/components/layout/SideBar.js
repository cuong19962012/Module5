import { Component } from "react";
import { NavLink } from 'react-router-dom'
function SideBar() {
    return (
        <div className=" min-vh-100 col-2 bg-dark" style={{ zIndex: 2 }}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100">
                <p className="w-100 text-center h1">
                    Menu
                </p>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                    <li className="nav-item my-3 d-flex">
                        <NavLink to='' className="nav-link align-middle text-light">
                            <i className="fa-solid fa-file-pen" style={{ color: '#ffffff' }} /><span className="ms-1 d-none d-sm-inline">Facility</span>
                        </NavLink>
                    </li>
                    <li className="nav-item my-3 d-flex">
                        <NavLink to='/customer' className="nav-link align-middle text-light">
                            <i className="fa-solid fa-file-pen" style={{ color: '#ffffff' }} /><span className="ms-1 d-none d-sm-inline">Customer</span>
                        </NavLink>
                    </li>
                    <li className="nav-item my-3 d-flex">
                        <NavLink to="/contact" className="nav-link align-middle text-light">
                            <i className="fa-solid fa-file-pen" style={{ color: '#ffffff' }} /><span className="ms-1 d-none d-sm-inline">Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div >
    );
};
export default SideBar;