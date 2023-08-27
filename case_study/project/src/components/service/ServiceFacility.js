import axios from 'axios';
export async function getAll() {
    try {
        const result = await axios.get('http://localhost:8000/facility');
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export async function createFacility(facility) {
    try {
        await axios.post('http://localhost:8000/facility', facility);
    } catch (e) {
        console.log(e);
    }
}
export async function editFacility(id, facility) {
    try {
        await axios.put('http://localhost:8000/facility/' + id, facility);
    } catch (e) {
        console.log(e);
    }
}
export async function getFacilityById(id) {
    try {
        const result = await axios.get('http://localhost:8000/facility/' + id);
        return result.data;
    } catch (e) {
        console.log(e);

    }
}