import { Component } from "react";
import axios from "axios";

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
    }
    async componentDidMount() {
        await axios
            .get("http://localhost:8000/students")
            .then(res => {
                this.setState(prev => (
                    prev.students = res.data
                ))
            })
            .catch(err => {
                throw err;
            })
    }
    render() {
        console.log(this.state.students);
        return (
            <>
                <div>
                    <h1>Users</h1>
                    <ul>
                        {this.state.students.map(student => (
                            <li key={student.id}> {student.name} </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}
export default Students;