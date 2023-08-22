import { useState } from 'react';

const facilityData = [
    {
        id: 1,
        name: 'VL-0001',
        useArea: 100,
        fee: 0,
        maxOfPerson: 10,
        standard: 'Vip',
        otherAmenities: 'Massage',
        poolOfArea: 50,
        numberOfFloor: 2
    },
    {
        id: 2,
        name: 'HO-0002',
        useArea: 100,
        fee: 0,
        maxOfPerson: 20,
        standard: 'Vip',
        otherAmenities: 'Massage',
        numberOfFloor: 2
    },
    {
        id: 3,
        name: 'RO-0002',
        useArea: 50,
        fee: 0,
        maxOfPerson: 4,
        standard: 'Vip',
        accompaniedService: 'Free Breakfast',
    },
    {
        id: 4,
        name: 'VL-0002',
        useArea: 200,
        fee: 0,
        maxOfPerson: 30,
        standard: 'Vip',
        otherAmenities: 'Massage',
        poolOfArea: 100,
        numberOfFloor: 2
    }
];
export function FacilityShow() {
    const [listFacility, SetListFacility] = useState(facilityData);
    return (
        <>
            <h1 className="text-center m-5">List Facility</h1>
            <div className="d-flex flex-wrap justify-content-start gap-4 m-5">

                {listFacility.map((e) => (
                    <div
                        className="card flex-grow-1"
                        style={{ width: "12rem", borderRadius: "2rem", padding: 10 }}
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
                                {e.accompaniedService || e.otherAmenities}
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