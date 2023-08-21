import { Component } from "react";
class Notification extends Component {
    componentWillUnmount() {
        alert('The component is going to be inmounted');
    }
    render() {
        return <h1>Hello World</h1>;
    }
}
export default Notification;