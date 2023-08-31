import { useEffect, useState } from 'react';
import * as Service from '../service/ServiceContact';
import { Link } from 'react-router-dom';
export function ContactShow() {
    const [contacts, setContacts] = useState([]);
    const getAllContacts = async () => {
        const result = await Service.getAll();
        setContacts(result);
    }

    useEffect(() => {
        getAllContacts();
    }, []);
    return (
        <>
            <div>
                <h1 className="text-center m-5">List Contact</h1>
                <div className='d-flex justify-content-start m-5'>
                    <Link to='/contact/create'><button className="btn btn-primary">Create contact</button></Link>
                </div>
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
                                                        {
                                                            contacts.map(contact => (
                                                                <tr key={contact.id}>
                                                                    <th>{contact.contactCode}</th>
                                                                    <th>{contact.startDate}</th>
                                                                    <th>{contact.endDate}</th>
                                                                    <th>{contact.deposit}</th>
                                                                    <th>{contact.totalPrice}</th>
                                                                </tr>
                                                            ))
                                                        }
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