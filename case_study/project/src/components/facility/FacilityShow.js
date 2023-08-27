import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as serviceFacility from '../service/ServiceFacility';
export function FacilityShow() {

    const [facilitys, setFacility] = useState([]);
    useEffect(() => {
        getAll();
    }, []);
    const getAll = async () => {
        const result = await serviceFacility.getAll();
        setFacility(result);
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
                    <div
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
                            <a href="#" className="btn btn-primary rounded-pill">
                                Edit
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}