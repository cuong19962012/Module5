import { useEffect, useState } from "react";
import * as Service from './ServiceProduct';
import { Link } from "react-router-dom";

import Moment from 'moment';
import MyPagination from "./MyPagination";
export function ProductShow() {
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        getAll(pageNumber, document.getElementById('form4Example1').value);
    }, [pageNumber]);

    const getAll = async (page, searchName) => {
        const result = await Service.getAll(page, searchName);
        setTotalPages(result.data.totalPages);
        setProducts(result.data.content);

    }
    const search = async () => {
        const productName = await document.getElementById('form4Example1').value;
        getAll(1, productName);
    }

    if (products.length === 0)
        return (<div> Not result</div>)

    // "productCode": "p-01",
    // "name": "Ao co co",
    // "inDate": "2022-02-02",
    // "quantity": 100,
    // "type": "ao"
    return (
        <>
            <div className="float-end">
                <input type="text" id="form4Example1" class="form-control w-25" />
                <button class="btn btn-primary btn-block mb-4" onClick={() => search()}>Search</button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>productCode</th>
                        <th>name</th>
                        <th>inDate</th>
                        <th>quantity</th>
                        <th>type</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.productCode}</td>
                            <td>{product.name}</td>
                            <td>{Moment(product.inDate).format('DD-MM-YYYY')}</td>
                            <td>{product.quantity}</td>
                            <td>{product.type.name}</td>
                            <td>
                                <Link to={`/edit/${product.id}`}><button type="button" className="btn btn-primary">Edit</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <MyPagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} />
        </>
    );
}