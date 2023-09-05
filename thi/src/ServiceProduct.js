import axios from "axios";

export async function getAll(page, searchName) {
    try {
        const result = await axios.get(`http://localhost:8080/?page=${page}&searchName=${searchName}`);
        return result;
    }
    catch (e) {
        console.log(e);
    }
}

export async function remove(id) {
    try {
        const result = await axios.delete(`http://localhost:8080/${id}`);
        console.log(result);
        return result;
    }
    catch (e) {
        console.log(e);
    }
}

export async function getById(id) {
    try {
        const result = await axios.get(`http://localhost:8000/products/${id}`);
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
}
export async function edit(id, product) {
    try {
        const result = await axios.put(`http://localhost:8000/products/${id}`, product);
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
}
export async function search(productName) {
    try {
        const result = await axios.get(`http://localhost:8000/products?name_like=${productName}`);
        console.log(result);
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
}