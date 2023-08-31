import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as serviceFacility from '../service/ServiceFacility';
import ModalDelete from '../modal/ModalDelete';
export function FacilityShow() {
    const [facilitys, setFacility] = useState([]);
    const [modal, SetModal] = useState({
        show: false,
        info: {}
    });
    useEffect(() => {
        getAll();
    }, []);
    const getAll = async () => {
        const result = await serviceFacility.getAll();
        setFacility(result);
    }
    const deleteConfirm = async (id) => {
        await serviceFacility.deleteFacility(id);
        hideModalDelete();
        getAll()
    }

    const showModalDelete = (facility) => {
        SetModal({
            show: true,
            info: facility
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
            <h1 className="text-center m-5">List Facility</h1>
            <div className='d-flex justify-content-evenly'>
                <Link to='facility/create/villa'><button className="btn btn-primary">Create Villa</button></Link>
                <Link to='facility/create/house'><button className="btn btn-primary">Create House</button></Link>
                <Link to='facility/create/room'><button className="btn btn-primary">Create Room</button></Link>
            </div>
            <div className="d-flex flex-wrap justify-content-start gap-4 m-5">

                {facilitys.map((e) => (
                    <div key={e.id}
                        className="card flex-grow-1"
                        style={{ width: "15rem", borderRadius: "2rem", padding: 10 }}
                    >
                        <img
                            src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg"
                            className="card-img-top"
                            style={{ borderRadius: "2rem" }}
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">
                                {e.more}
                            </p>
                            <Link to={`/facility/edit/${e.id}`} >
                                <button className="btn btn-primary rounded-pill">
                                    Edit
                                </button>
                            </Link>
                            <button type="button" onClick={() => showModalDelete(e)} className="btn btn-danger rounded-pill">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <ModalDelete showModal={modal} hideModal={hideModalDelete} confirm={deleteConfirm} />
        </>

    );
}