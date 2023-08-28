import { Provider } from "react-redux";
import store from "./store";
import { Users } from "./Users";

export function ViewUsers() {
    return (
        <Provider store={store}>
            <Users />
        </Provider>
    )
}