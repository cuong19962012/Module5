import axios from 'axios';
export async function getAll() {
    try {
        const result = await axios.get('http://localhost:8000/customer');
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export async function createCustomer(customer) {
    try {
        await axios.post('http://localhost:8000/customer', customer);
    } catch (e) {
        console.log(e);
    }
}
export async function editCustomer(id, customer) {
    try {
        await axios.put('http://localhost:8000/customer/' + id, customer);
    } catch (e) {
        console.log(e);
    }
}
export async function getCustomerById(id) {
    try {
        const result = await axios.get('http://localhost:8000/customer/' + id);
        return result.data;
    } catch (e) {
        console.log(e);

    }
}
export async function deleteCustomer(id) {
    try {
        await axios.delete('http://localhost:8000/customer/' + id);
    } catch (e) {
        console.log(e);

    }
}