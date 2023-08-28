
import { Provider } from 'react-redux';
import React from "react";
import { Users } from "./ss7_redux/excercise/Users";
import store from './ss7_redux/excercise/store';
export function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}


export default App;
