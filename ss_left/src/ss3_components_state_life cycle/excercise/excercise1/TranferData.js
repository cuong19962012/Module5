import { Component } from "react";
import StudentInfo from "./StudentInfo";
const data = [{ id: 1, name: 'Nguyen Van A', age: 30, address: 'Ha Noi' },
{ id: 2, name: 'Nguyen Van A', age: 30, address: 'Ha Noi' }];
class TranferData extends Component {
    render() {
        return <StudentInfo data={data} />;
    }
}
export default TranferData;