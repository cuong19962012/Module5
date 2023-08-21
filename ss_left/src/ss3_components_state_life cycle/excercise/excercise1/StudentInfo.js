import React from "react";

class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ADDRESS</th>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((e, index) => {
                                return <tr key={index}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.age}</td>
                                    <td>{e.address}</td>
                                </tr>;
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default StudentInfo;