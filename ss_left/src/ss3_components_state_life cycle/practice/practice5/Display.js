import { Component } from "react";
import Notification from "./Notification";
class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    }
    delete = () => {
        this.setState({ display: false });
    }
    render() {
        let comp;
        if (this.state.display) {
            comp = <Notification />;
        }
        return (
            <div>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }
}
export default Display;