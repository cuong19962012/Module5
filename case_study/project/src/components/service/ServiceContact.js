import axios from 'axios';
import * as customerService from './ServiceCustomer';
import * as facilityService from './ServiceFacility';
export async function getAll() {
    try {
        const result = (await axios.get('http://localhost:8000/contact')).data;
        return result;
    } catch (e) {
        console.log(e);
    }
}
export async function createContact(contact) {
    try {
        await axios.post('http://localhost:8000/contact', contact);
    } catch (e) {
        console.log(e);
    }
}
export async function editContact(id, contact) {
    try {
        await axios.put('http://localhost:8000/contact/' + id, contact);
    } catch (e) {
        console.log(e);
    }
}
export async function getContactById(id) {
    try {
        const result = await axios.get('http://localhost:8000/contact/' + id);
        return result.data;
    } catch (e) {
        console.log(e);

    }
}