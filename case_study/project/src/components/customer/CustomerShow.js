import { useEffect } from "react";
import { useState } from "react";
import * as Service from '../service/ServiceCustomer';
import { Link } from "react-router-dom";
import ModalDelete from "../modal/ModalDelete";
export function CustomerShow() {
    const [customers, setCustomers] = useState([]);
    const [modal, SetModal] = useState({
        show: false,
        info: {}
    });
    useEffect(() => {
        getAll();
    }, []);
    const getAll = async () => {
        const result = await Service.getAll();
        setCustomers(result);
    };

    const deleteConfirm = async (id) => {
        await Service.deleteCustomer(id);
        hideModalDelete();
        getAll()

    }

    const showModalDelete = (customer) => {
        SetModal({
            show: true,
            info: customer
        });

    }
    const hideModalDelete = () => {
        SetModal(
            {
                show: false,
                info: {}
            }
        );
    }
    return (
        <>
            <h1 className="text-center m-5">List Customer</h1>
            <div className='d-flex justify-content-start m-5'>
                <Link to='/customer/create'><button className="btn btn-primary">Create customer</button></Link>
            </div>
            <section className="intro">
                <div className="mask d-flex align-items-center ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card bg-dark shadow-2-strong">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-dark table-borderless mb-0 text-center">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">NAME</th>
                                                        <th scope="col">BIRTH OF DAY</th>
                                                        <th scope="col">GENDER</th>
                                                        <th scope="col">IDENTITY</th>
                                                        <th scope="col">NUMBER PHONE</th>
                                                        <th scope="col">EMAIL</th>
                                                        <th scope="col">ADDRESS</th>
                                                        <th scope="col">KIND OF CUSTOMER</th>
                                                        <th scope="col">ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {customers.map(customer => (
                                                        <tr key={customer.id}>
                                                            <td>{customer.name}</td>
                                                            <td>{customer.birthOfDay}</td>
                                                            <td>{customer.Gender === true ? 'Male' : 'Female'}</td>
                                                            <td>{customer.identity}</td>
                                                            <td>{customer.numberPhone}</td>
                                                            <td>{customer.email}</td>
                                                            <td>{customer.address}</td>
                                                            <td>{customer.kindOfCustomer}</td>
                                                            <td className="d-flex justify-content-between">
                                                                <Link to={`/customer/edit/${customer.id}`}><button type="button" className="btn btn-success">Edit</button></Link>
                                                                <button type="button" onClick={() => showModalDelete(customer)} className="btn btn-danger">Delete</button>
                                                            </td>
                                                        </tr>
                                                    ))}
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
            <ModalDelete showModal={modal} hideModal={hideModalDelete} confirm={deleteConfirm} />
        </>

    );
}